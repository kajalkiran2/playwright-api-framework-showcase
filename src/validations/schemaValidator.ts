import { APIResponse } from '@playwright/test';

export class SchemaValidator {

  // -------- Response Validation --------
  async validate(response: APIResponse, requiredFields: string[]): Promise<void> {
    const body = await response.json();

    for (const field of requiredFields) {
      if (!(field in body)) {
        throw new Error(`Schema validation failed. Missing field: ${field}`);
      }
    }
  }

  // -------- Request / Object Validation --------
  validateObject(obj: any, requiredFields: string[]): void {
    for (const field of requiredFields) {
      if (!(field in obj)) {
        throw new Error(`Request validation failed. Missing field: ${field}`);
      }
    }
  }

  validateParams(params: Record<string, any>, schema: Record<string, string>) {
    for (const key in schema) {
      if (!(key in params)) {
        throw new Error(`Missing path/query param: ${key}`);
      }

      if (typeof params[key] !== schema[key]) {
        throw new Error(
          `Invalid type for param ${key}. Expected ${schema[key]}`
        );
      }
    }
  }
}