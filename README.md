# Book Library Backend (API)

This is a simple RESTful API built with NestJS for managing a book library.

## Technology Choices

- NestJS: A progressive Node.js framework for building efficient, reliable, and scalable server-side applications.
- TypeScript: A statically typed superset of JavaScript that enhances code quality and maintainability.
- Class Validator: For validating request data.
- In-memory Database: For simplicity and demonstration purposes, using an in-memory array to store books.

## Features

- CRUD Operations: Create, Read, Update, and Delete books.
- Endpoints: API endpoints for managing books.
- Data Storage: In-memory storage (for demonstration purposes).

## Additional Features Implemented

- Custom Exception Handling: Provides user-friendly error messages when a book is not found or validation fails.
- In-memory Database: Simplifies development and testing by using an in-memory array to store books.

## Prerequisites

- Node.js (v16 or above)
- npm (v6 or above) or Yarn (v1.22 or above)

## Installation

### Clone the repository:

git clone [book-library-api](https://github.com/petertemboii/book-library-api.git)
cd book-library-api

### Install dependencies:

npm install
or
yarn install

## Running the Application

### Start the development server:

npm run start:dev
or
yarn start:dev

The server will start at http://localhost:3001 by default.

## API Endpoints

### Get All Books

GET /books

Retrieve all books from the library.

### Add a New Book

POST /books

Add a new book to the library.

### Request Body:

{
  "title": "Book Title",
  "author": "Book Author",
  "isbn": "ISBN Number (optional)"
}

### Update a Book

PUT /books/:id

Update an existing book in the library

### Request Body:

{
  "title": "Updated Title",
  "author": "Updated Author",
  "isbn": "Updated ISBN (optional)"
}

### Delete a Book

DELETE /books/:id

Delete a book from the library by its ID.

## Contributing

Contributions are welcome! Feel free to open issues or pull requests.

## License

This project is licensed under the MIT License - see the LICENSE file for details.