import { expect } from '@playwright/test';
import { UserService } from '../services/userService';

export class UserCrudScenario {
  constructor(private userService: UserService) {}

  async createUserFlow(userData: unknown): Promise<number> {
    const response = await this.userService.createUser(userData);
    expect(response.status()).toBe(201);

    const body = await response.json();
    return body.id;
  }

  async getUserFlow(userId: number): Promise<void> {
    const response = await this.userService.getUserById(userId);
    expect(response.status()).toBe(200);
  }

  async updateUserFlow(userId: number, userData: unknown): Promise<void> {
    const response = await this.userService.updateUser(userId, userData);
    expect(response.status()).toBe(200);
  }

  async deleteUserFlow(userId: number): Promise<void> {
    const response = await this.userService.deleteUser(userId);
    expect(response.status()).toBe(200);
  }

  async userLifecycleWorkflow(userData: unknown) {
    const userId = await this.createUserFlow(userData);

    // Demo API limitation
    const effectiveUserId = 1;

    await this.getUserFlow(effectiveUserId);
    await this.updateUserFlow(effectiveUserId, userData);
    await this.deleteUserFlow(effectiveUserId);

    return userId;
  }
}