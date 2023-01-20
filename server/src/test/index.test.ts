import request from 'supertest';
import app from '../server/index';

test('Server ir running', async () => {
  const response = await request(app).get('/').send()
  expect(response.statusCode).toBe(200)
})