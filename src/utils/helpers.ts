import { APIResponse } from '@playwright/test';
import { StatusValidator } from '../validations/statusValidator';
import { SchemaValidator } from '../validations/schemaValidator';
import { ResponseTimeValidator } from '../validations/responseTimeValidator';
import { TestConfig } from '../config/testConfig';

export class UserValidationHelper {
  private statusValidator = new StatusValidator();
  private schemaValidator = new SchemaValidator();
  private responseTimeValidator = new ResponseTimeValidator();

  async validateResponse(
    response: APIResponse,
    duration: number,
    options: {
      expectedStatus: number;
      schema?: string[];
    }
  ) {
    await this.statusValidator.validate(response, options.expectedStatus);
    this.responseTimeValidator.validate(
        duration,
        TestConfig.maxResponseTime
    );

    if (options.schema) {
      await this.schemaValidator.validate(response, options.schema);
    }
  }
}