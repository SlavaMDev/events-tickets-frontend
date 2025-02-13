import client from './client.ts';

export async function login(user: any) { // TODO implement types
  return await client.post('/auth/login', user);
}