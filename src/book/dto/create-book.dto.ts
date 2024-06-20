import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateBookDto {
  @IsNotEmpty() // Ensures that the 'title' property is not empty
  @IsString() // Ensures that the 'title' property is a string
  title: string; // Represents the title of the book

  @IsNotEmpty() // Ensures that the 'author' property is not empty
  @IsString() // Ensures that the 'author' property is a string
  author: string; // Represents the author of the book

  @IsOptional() // Specifies that the 'isbn' property is optional (can be omitted)
  @IsString() // Ensures that the 'isbn' property is a string if provided
  isbn?: string; // Represents the ISBN (International Standard Book Number) of the book (optional)
}
