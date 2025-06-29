<<<<<<< HEAD
📚 Book API

A RESTful API for managing books, authentication, and reviews, built with **Node.js**, **Express**, and **MongoDB**. Developed as part of a university assignment.

---

🚀 Features

- 📘 CRUD operations for books
- 🔐 User registration & login (JWT-based authentication)
- ✍️ Add and retrieve reviews for books
- 🔍 Find books by ID or ISBN
- 🧪 Unit and integration tests with Jest and Supertest

---

🧱 Tech Stack

- **Backend**: Node.js, Express
- **Database**: MongoDB, Mongoose
- **Authentication**: JWT (JSON Web Tokens)
- **Testing**: Jest, Supertest
- **Dev Tools**: Nodemon, dotenv

---

📁 Project Structure

```
book-api/
├── src/
│   ├── controllers/       # Route handlers
│   ├── middleware/        # Auth & validation middleware
│   ├── models/            # Mongoose schemas (Book, User, Review)
│   ├── routes/            # API routes
│   ├── services/          # Helper service modules
│   ├── validators/        # Input validators
│   └── app.js             # Entry point of the app
├── tests/                 # Unit and integration tests
├── .env                   # Environment variables
├── package.json
└── README.md
```

---

🔧 Setup & Installation

1. **Clone the repo:**

```bash
git clone https://github.com/SasithWickrama/library-book-api.git
cd book-api
```

2. **Install dependencies:**

```bash
npm install
```

3. **Set up your `.env` file:**

```
PORT=3000
MONGODB_URI=mongodb://localhost:27017/book-api
JWT_SECRET=your_jwt_secret_key
```

4. **Start the server:**

```bash
npm run dev
```

---

📚 API Endpoints

### Auth
- `POST /api/auth/register` – Register a new user
- `POST /api/auth/login` – Authenticate and get token

### Books
- `GET /api/books` – List all books
- `GET /api/books/:id` – Get a book by MongoDB ID
- `GET /api/books/isbn/:isbn` – Get a book by ISBN
- `POST /api/books` – Add a new book
- `PUT /api/books/:id` – Update a book
- `DELETE /api/books/:id` – Delete a book

### Reviews
- `POST /api/reviews/:bookId` – Add a review for a book
- `GET /api/reviews/:bookId` – Get reviews for a book

---

🧪 Running Tests

```bash
npm test
```

Tests are located in the `/tests` folder and use **Jest** and **Supertest** for coverage and assertions.

---

📄 License

This project is part of a university assignment and is for educational use.

---

🧑‍💻 Author

**Sasith Wickramasinghe**  
Email: *sasith.finland@gmail.com*

---

> Feel free to fork or submit pull requests to improve it further.
=======
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
>>>>>>> 7764bbd010437858a6365f842a36a4783ed0968c
