import client from './client.ts';

export async function getTickets(userType: string, page: number, query: string) {
  return await client.get('/tickets', { params: { userType, page, query } });
}