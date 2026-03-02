import { APIResponse } from '@playwright/test';
import { Endpoints } from '../config/endpoints';
import { ApiClient } from '../core/apiClient';

export class UserService {
  constructor(private client: ApiClient) {}

  async getAllUsers(): Promise<APIResponse> {
    return this.client.send('GET', Endpoints.USERS);
  }

  async getUserById(userId: number): Promise<APIResponse> {
    return this.client.send('GET', Endpoints.USER_BY_ID(userId));
  }

  async createUser(data: unknown): Promise<APIResponse> {
    return this.client.send('POST', Endpoints.USERS, { data });
  }

  async updateUser(userId: number, data: unknown): Promise<APIResponse> {
    return this.client.send('PUT', Endpoints.USER_BY_ID(userId), { data });
  }

  async deleteUser(userId: number): Promise<APIResponse> {
    return this.client.send('DELETE', Endpoints.USER_BY_ID(userId));
  }
}