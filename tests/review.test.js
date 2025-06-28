const request = require('supertest');
const app = require('../src/app');
const Book = require('../src/models/Book').default;
const User = require('../src/models/User').default;
const Review = require('../src/models/Review').default;

describe('Review API', () => {
  let token;
  let bookId;

  beforeEach(async () => {
    await Review.deleteMany();
    await Book.deleteMany();
    await User.deleteMany();

    // Create test user
    const user = await User.create({
      username: 'reviewer',
      email: 'review@test.com',
      password: 'password123'
    });

    // Get auth token
    const loginRes = await request(app)
      .post('/api/auth/login')
      .send({ email: 'review@test.com', password: 'password123' });
    
    token = loginRes.body.token;

    // Create test book
    const book = await Book.create({
      title: 'Test Book',
      author: 'Test Author',
      isbn: '1234567890'
    });

    bookId = book._id;
  });

  test('POST /api/reviews - should add a review', async () => {
    const response = await request(app)
      .post('/api/reviews')
      .set('Authorization', `Bearer ${token}`)
      .send({
        bookId,
        rating: 5,
        comment: 'Great book!'
      });
    
    expect(response.statusCode).toBe(201);
    expect(response.body).toHaveProperty('rating', 5);
  });
});