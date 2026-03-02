// ----------------------------------- Request ----------------------------------- // 
export const CreateUserRequestModel = {
  requiredFields: ['name', 'username', 'email']
};

export const UpdateUserRequestModel = {
  requiredFields: ['name', 'username', 'email']
};

export const UserPathParamsModel = {
  userId: 'number'
};

// ----------------------------------- Response ----------------------------------- // 
export const UserModel = {
  requiredFields: ['id', 'name', 'username', 'email']
};

export const CreateUserResponseModel = {
  requiredFields: ['id']
};

export const ErrorResponseModel = {
  requiredFields: ['error']
};