# Book Library Api

This is a simple RESTful API built with NestJS for managing a book library.

## Features

- CRUD Operations: Create, Read, Update, and Delete books.
- Endpoints: API endpoints for managing books.
- Data Storage: In-memory storage (for demonstration purposes).

## Prerequisites

- Node.js (v16 or above)
- npm (v6 or above)

## Installation

### Clone the repository:

git clone [book-library-api](https://github.com/petertemboii/book-library-api.git)
cd book-library-api

### Install dependencies:

npm install

## Running the Application

### Start the development server:

npm run start:dev

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