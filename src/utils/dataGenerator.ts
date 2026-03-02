export class DataGenerator {

  static generateValidUser(overrides: Partial<any> = {}) {
    const random = Math.floor(Math.random() * 10000);

    const defaultUser = {
      name: `User_${random}`,
      username: `user_${random}`,
      email: `user_${random}@test.com`
    };

    return {
      ...defaultUser,
      ...overrides
    };
  }

  static generateInvalidUser() {
    return {
      name: "",           // invalid empty name
      username: "x",      // maybe too short
      email: "invalid"    // invalid email format
    };
  }
}