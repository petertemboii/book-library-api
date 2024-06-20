import { Injectable, NotFoundException } from '@nestjs/common'; // Imports NestJS injectable decorator and exception handling
import { Book } from './schemas/book.schema';

@Injectable()
export class BookService {
  private books: Book[] = []; // Private array to store books
  private idCounter = 1; // Counter for generating book IDs

  getAllBooks(): Book[] | string {
    // Method to fetch all books or return an empty array
    return this.books;
  }

  getBookById(id: number): Book {
    // Method to fetch a book by its ID
    const book = this.books.find((book) => {
      return book.id === id;
    });

    if (!book) {
      // Throw NotFoundException if book is not found
      throw new NotFoundException('Book not found');
    }

    return book; // Return the found book
  }

  addBook(title: string, author: string, isbn?: string): Book {
    // Method to add a new book
    const newBook: Book = { id: this.idCounter++, title, author, isbn }; // Create a new book object
    this.books.push(newBook); // Push the new book into the array
    return newBook; // Return the newly added book
  }

  updateBook(id: number, title: string, author: string, isbn?: string): Book {
    // Method to update a book
    const bookIndex = this.books.findIndex((book) => {
      return book.id === id;
    });

    if (bookIndex === -1) {
      // Throw NotFoundException if book is not found
      throw new NotFoundException('Book not found');
    }

    const updatedBook = { ...this.books[bookIndex], title, author, isbn }; // Create updated book object
    this.books[bookIndex] = updatedBook; // Update book in the array
    return updatedBook; // Return the updated book
  }

  deleteBook(id: number): void {
    // Method to delete a book
    const bookIndex = this.books.findIndex((book) => {
      return book.id === id;
    });

    if (bookIndex === -1) {
      // Throw NotFoundException if book is not found
      throw new NotFoundException('Book not found');
    }

    this.books.splice(bookIndex, 1); // Remove book from the array
  }
}
