export class ResponseTimeValidator {
  validate(duration: number, maxTimeInMs: number): void {
    if (duration > maxTimeInMs) {
      throw new Error(
        `Response time validation failed. Max allowed: ${maxTimeInMs}ms, Actual: ${duration}ms`
      );
    }
  }
}