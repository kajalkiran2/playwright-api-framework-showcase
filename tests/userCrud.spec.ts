import { test, expect } from '@playwright/test';
import { ApiClient } from '../src/core/apiClient';
import { UserService } from '../src/services/userService';
import { UserCrudScenario } from '../src/scenarios/userCrud.scenario';
import { DataGenerator } from '../src/utils/dataGenerator';

let scenario: UserCrudScenario;

test.beforeEach(async () => {
  const client = new ApiClient();
  await client.init();

  const userService = new UserService(client);
  scenario = new UserCrudScenario(userService);
});

test('User Lifecycle Workflow', async () => {
  const userData = DataGenerator.generateValidUser();

  const userId = await scenario.userLifecycleWorkflow(userData);

  expect(userId).toBeDefined();
});