import { CreateUserRequestModel, CreateUserResponseModel, UpdateUserRequestModel, UserModel, UserPathParamsModel } from "../models/userModel";
import { UserService } from "../services/userService";
import { UserValidationHelper } from "../utils/helpers";
import { SchemaValidator } from "../validations/schemaValidator";

export class UserCrudScenario {
  private validator: UserValidationHelper;
  private schemaValidator: SchemaValidator;

  constructor(private userService: UserService) {
    this.validator = new UserValidationHelper();
    this.schemaValidator = new SchemaValidator();
  }

  // ---------------- CREATE ----------------
  async createUserFlow(userData: any) {
    this.schemaValidator.validateObject(
      userData,
      CreateUserRequestModel.requiredFields
    );

    const { response, duration } =
      await this.userService.createUser(userData);

    await this.validator.validateResponse(response, duration, {
      expectedStatus: 201,
      schema: CreateUserResponseModel.requiredFields
    });

    const createdUser = await response.json();
    return createdUser.id;
  }

  // ---------------- GET ----------------
  async getUserFlow(userId: number) {

    this.schemaValidator.validateParams(
      { userId },
      UserPathParamsModel
    );

    const { response, duration } =
      await this.userService.getUserById(userId);

    await this.validator.validateResponse(response, duration, {
      expectedStatus: 200,
      schema: UserModel.requiredFields
    });
  }

  // ---------------- UPDATE ----------------
  async updateUserFlow(userId: number, userData: any) {

    const updatedData = {
      ...userData,
      name: `${userData.name}_Updated`
    };

    this.schemaValidator.validateParams(
      { userId },
      UserPathParamsModel
    );

    this.schemaValidator.validateObject(
      updatedData,
      UpdateUserRequestModel.requiredFields
    );

    const { response, duration } =
      await this.userService.updateUser(userId, updatedData);

    await this.validator.validateResponse(response, duration, {
      expectedStatus: 200
    });
  }

  // ---------------- DELETE ----------------
  async deleteUserFlow(userId: number) {

    this.schemaValidator.validateParams(
      { userId },
      UserPathParamsModel
    );

    const { response, duration } =
      await this.userService.deleteUser(userId);

    await this.validator.validateResponse(response, duration, {
      expectedStatus: 200
    });
  }

  // ---------------- FULL WORKFLOW ----------------
  async userLifecycleWorkflow(userData: any) {

    const userId = await this.createUserFlow(userData);

    // Since demo API doesn't persist, you may still use 1 if needed
    const effectiveUserId = 1;

    await this.getUserFlow(effectiveUserId);
    await this.updateUserFlow(effectiveUserId, userData);
    await this.deleteUserFlow(effectiveUserId);

    return { createdUserId: userId };
  }

  async getUserWithInvalidId() { 
    const invalidId = 999999; 
    const { response, duration } = 
    await this.userService.getUserById(invalidId); 
    await this.validator.validateResponse(response, duration, { 
      expectedStatus: 404 
    }); 
  }
}