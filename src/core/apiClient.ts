import { request, APIRequestContext, APIResponse } from '@playwright/test';
import { getConfig } from '../config/env';
import { AuthManager } from './authManager';
import { TestConfig } from '../config/testConfig';
import { Logger } from '../utils/logger';

export class ApiClient {
  private context!: APIRequestContext;

  async init() {
    const config = getConfig();

    const authManager = new AuthManager(config.AUTH_TYPE, {
      apiKey: config.API_KEY,
      token: config.JWT_TOKEN
    });

    const authHeaders = authManager.getAuthHeaders();

    this.context = await request.newContext({
      baseURL: config.BASE_URL,
      extraHTTPHeaders: {
        'Content-Type': 'application/json',
        ...authHeaders
      }
    });
  }

  async send(
    method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH',
    endpoint: string,
    options?: {
      data?: any;
      params?: Record<string, string>;
      headers?: Record<string, string>;
    }
  ) {
    let attempt = 0;
    while (attempt <= TestConfig.retryCount) {
      Logger.info(`Sending ${method} request to ${endpoint}`);
      const startTime = Date.now();

      const response = await this.context.fetch(endpoint, {
        method,
        data: options?.data,
        params: options?.params,
        headers: options?.headers
      });

      const duration = Date.now() - startTime;
      Logger.info(
        `Received ${response.status()} from ${endpoint} in ${duration}ms`
      );

      // If not 5XX → return
      if (response.status() < 500) {
        if (attempt > 0) {
          Logger.warn(
            `Endpoint ${endpoint} succeeded after ${attempt} retry(s)`
          );
        }
        return {
          response,
          duration,
          retryCount: attempt
        };
      }

      // If last attempt → stop retrying
      if (attempt === TestConfig.retryCount) {
        Logger.error(
          `Endpoint ${endpoint} failed after ${attempt} retry(s)`
        );
        return {
          response,
          duration,
          retryCount: attempt
        };
      }

      // Retry case
      Logger.warn(
        `Retrying ${endpoint}. Attempt ${attempt + 1}`
      );
      await new Promise(resolve =>
        setTimeout(resolve, TestConfig.retryDelay)
      );
      attempt++;
    }
    throw new Error('Unexpected retry failure');
  }
}