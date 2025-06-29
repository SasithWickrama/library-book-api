# Book Review API

A RESTful API for managing books and reviews, built with Express.js and MongoDB.

## Features

- User authentication (register/login)
- Book management (CRUD operations)
- Review system for books
- Secure routes with JWT authentication
- MongoDB database
- CORS enabled for API development
- Error handling middleware

## Technologies Used

- Node.js
- Express.js
- MongoDB (with Mongoose ODM)
- JSON Web Tokens (JWT) for authentication
- Dotenv for environment variables
- CORS middleware

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- MongoDB (local or Atlas cluster)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/book-review-api.git
   cd book-review-api

The server will start on http://localhost:3000

API Endpoints
Authentication
POST /api/auth/register - Register a new user

POST /api/auth/login - Login an existing user

Books
GET /api/books - Get all books

GET /api/books/:id - Get a single book

POST /api/books - Create a new book (protected)

PUT /api/books/:id - Update a book (protected)

DELETE /api/books/:id - Delete a book (protected)

Reviews
GET /api/reviews - Get all reviews

GET /api/reviews/:id - Get a single review

POST /api/reviews - Create a new review (protected)

PUT /api/reviews/:id - Update a review (protected)

DELETE /api/reviews/:id - Delete a review (protected)

Project Structure
text
book-review-api/
├── routes/
│   ├── authRoutes.js      # Authentication routes
│   ├── bookRoutes.js      # Book-related routes
│   └── reviewRoutes.js    # Review-related routes
├── models/                # MongoDB models (not shown in code)
├── .env                   # Environment variables
├── package.json
└── app.js              # Main application file
Environment Variables
The following environment variables are required:

MONGODB_URI: MongoDB connection string

JWT_SECRET: Secret key for JWT token generation

PORT: Port number for the server (optional, defaults to 3000)

Contributing
Contributions are welcome! Please follow these steps:

Fork the project

Create your feature branch (git checkout -b feature/AmazingFeature)

Commit your changes (git commit -m 'Add some amazing feature')

Push to the branch (git push origin feature/AmazingFeature)

Open a Pull Request

License
Distributed under the MIT License. See LICENSE for more information.

Contact
Your Name - sasith.finland@gmail.com

Project Link: https://github.com/SasithWickrama/library-book-api
