import { APIResponse } from '@playwright/test';

export class StatusValidator {
  async validate(response: APIResponse, expectedStatus: number): Promise<void> {
    const actualStatus = response.status();

    if (actualStatus !== expectedStatus) {
      throw new Error(
        `Status validation failed. Expected: ${expectedStatus}, Received: ${actualStatus}`
      );
    }
  }
}