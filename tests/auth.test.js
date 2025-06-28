const request = require('supertest');
const app = require('../src/app');
const User = require('../src/models/User').default;

describe('Auth API', () => {
  beforeEach(async () => {
    await User.deleteMany();
  });

  test('POST /api/auth/register - should register a new user', async () => {
    const response = await request(app)
      .post('/api/auth/register')
      .send({
        username: 'testuser',
        email: 'test@example.com',
        password: 'password123'
      });
    
    expect(response.statusCode).toBe(201);
    expect(response.body).toHaveProperty('token');
  });
});