import { AuthType } from "../config/env";

export class AuthManager {
  constructor(
    private authType: AuthType,
    private credentials?: { apiKey?: string; token?: string }
  ) {}

  getAuthHeaders(): Record<string, string> {
    switch (this.authType) {
      case 'apiKey':
        return { 'x-api-key': this.credentials!.apiKey! };

      case 'jwt':
        return { Authorization: `Bearer ${this.credentials!.token}` };

      case 'none':
      default:
        return {};
    }
  }
}