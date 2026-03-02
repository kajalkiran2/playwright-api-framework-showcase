// src/services/userService.ts

import { ApiClient } from '../core/apiClient';
import { Endpoints } from '../config/endpoints';

export class UserService {
  constructor(private client: ApiClient) {}

  async getAllUsers() {
    return this.client.send('GET', Endpoints.USERS);
  }

  async getUserById(userId: number) {
    return this.client.send('GET', Endpoints.USER_BY_ID(userId));
  }

  async createUser(data: any) {
    return this.client.send('POST', Endpoints.USERS, { data });
  }

  async updateUser(userId: number, data: any) {
    return this.client.send('PUT', Endpoints.USER_BY_ID(userId), { data });
  }

  async deleteUser(userId: number) {
    return this.client.send('DELETE', Endpoints.USER_BY_ID(userId));
  }
}