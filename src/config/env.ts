export function getConfig() {
  const baseUrl = process.env.BASE_URL;

  if (!baseUrl) {
    throw new Error('BASE_URL is not defined in environment variables');
  }

  return {
    BASE_URL: baseUrl as string
  };
}