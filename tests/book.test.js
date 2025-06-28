const request = require('supertest');
const app = require('../src/app');
const Book = require('../src/models/Book').default;

describe('Book API', () => {
  beforeEach(async () => {
    await Book.deleteMany();
  });

  test('GET /api/books - should return all books', async () => {
    const response = await request(app).get('/api/books');
    expect(response.statusCode).toBe(200);
    expect(response.body).toBeInstanceOf(Array);
  });
});