import { APIResponse } from '@playwright/test';

export class HeaderValidator {
  async validate(
    response: APIResponse,
    headerKey: string,
    expectedValue: string
  ): Promise<void> {
    const headers = response.headers();
    const actualValue = headers[headerKey.toLowerCase()];

    if (actualValue !== expectedValue) {
      throw new Error(
        `Header validation failed for '${headerKey}'. Expected: ${expectedValue}, Received: ${actualValue}`
      );
    }
  }
}