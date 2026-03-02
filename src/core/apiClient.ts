import { request, APIRequestContext, APIResponse } from '@playwright/test';
import { getConfig } from '../config/env';
import { TestConfig } from '../config/testConfig';

export class ApiClient {
  private context!: APIRequestContext;

  async init(): Promise<void> {
    if (this.context) return;

    const config = getConfig();

    this.context = await request.newContext({
      baseURL: config.BASE_URL,
      extraHTTPHeaders: {
        'Content-Type': 'application/json'
      }
    });
  }

  async send(
    method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH',
    endpoint: string,
    options?: {
      data?: unknown;
      params?: Record<string, string>;
      headers?: Record<string, string>;
    }
  ): Promise<APIResponse> {

    if (!this.context) {
      throw new Error('ApiClient not initialized. Call init() first.');
    }

    for (let attempt = 0; attempt <= TestConfig.retryCount; attempt++) {

      const response = await this.context.fetch(endpoint, {
        method,
        data: options?.data,
        params: options?.params,
        headers: options?.headers
      });

      if (response.status() < 500) {
        return response;
      }

      if (attempt === TestConfig.retryCount) {
        return response;
      }

      await new Promise(resolve =>
        setTimeout(resolve, TestConfig.retryDelay)
      );
    }

    throw new Error('Unexpected retry failure');
  }
}