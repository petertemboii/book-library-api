import {
  Body, // Imports decorators for handling request body
  Controller, // Imports NestJS controller decorator
  Delete, // Imports HTTP DELETE method decorator
  Get, // Imports HTTP GET method decorator
  Param, // Imports parameter decorator for route parameters
  Post, // Imports HTTP POST method decorator
  Put, // Imports HTTP PUT method decorator
} from '@nestjs/common';
import { BookService } from './book.service'; // Imports BookService for handling business logic
import { Book } from './schemas/book.schema'; // Imports Book schema/model
import { CreateBookDto } from './dto/create-book.dto'; // Imports DTO for creating a book
import { UpdateBookDto } from './dto/update-book.dto'; // Imports DTO for updating a book

@Controller('books') // Defines controller route prefix '/books'
export class BookController {
  constructor(private readonly booksService: BookService) {} // Injects BookService dependency into the controller

  @Get() // HTTP GET method handler for retrieving all books
  getAllBooks(): Book[] | string {
    return this.booksService.getAllBooks(); // Calls service method to fetch all books
  }

  @Get(':id') // HTTP GET method handler for retrieving a book by ID
  getBookById(@Param('id') id: string): Book {
    return this.booksService.getBookById(+id); // Calls service method to fetch a book by ID
  }

  @Post() // HTTP POST method handler for adding a new book
  addBook(@Body() createBookDto: CreateBookDto): Book {
    const { title, author, isbn } = createBookDto; // Destructures properties from DTO
    return this.booksService.addBook(title, author, isbn); // Calls service method to add a new book
  }

  @Put(':id') // HTTP PUT method handler for updating an existing book
  updateBook(
    @Param('id') id: string, // Retrieves book ID from route parameter
    @Body() updateBookDto: UpdateBookDto, // Retrieves updated book data from request body
  ): Book {
    const { title, author, isbn } = updateBookDto; // Destructures properties from DTO
    return this.booksService.updateBook(+id, title, author, isbn); // Calls service method to update a book
  }

  @Delete(':id') // HTTP DELETE method handler for deleting a book
  deleteBook(@Param('id') id: string): void {
    return this.booksService.deleteBook(+id); // Calls service method to delete a book by ID
  }
}
