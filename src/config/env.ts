import dotenv from 'dotenv';

export type AuthType = 'none' | 'apiKey' | 'jwt';

export const getConfig = () => {
  const BASE_URL = process.env.BASE_URL;
  const AUTH_TYPE = process.env.AUTH_TYPE as AuthType;
  const API_KEY = process.env.API_KEY;
  const JWT_TOKEN = process.env.JWT_TOKEN;

  if (!BASE_URL) {
    throw new Error("BASE_URL is missing in .env");
  }

  if (!AUTH_TYPE) {
    throw new Error("AUTH_TYPE is missing in .env");
  }

  if (AUTH_TYPE === 'apiKey' && !API_KEY) {
    throw new Error("API_KEY required when AUTH_TYPE=apiKey");
  }

  if (AUTH_TYPE === 'jwt' && !JWT_TOKEN) {
    throw new Error("JWT_TOKEN required when AUTH_TYPE=jwt");
  }

  return {
    BASE_URL,
    AUTH_TYPE,
    API_KEY,
    JWT_TOKEN
  };
};