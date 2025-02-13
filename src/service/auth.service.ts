import client from './client.ts';

export async function login(user: any) {
  return await client.post('/auth/login', user);
}

export async function registration(user: any) {
  return await client.post('/auth/signup', user);
}