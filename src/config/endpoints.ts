export const Endpoints = {
  USERS: '/users',
  USER_BY_ID: (id: number) => `/users/${id}`,

  POSTS: '/posts',
  POST_BY_ID: (id: number) => `/posts/${id}`
};