import { IsOptional, IsString } from 'class-validator';

export class UpdateBookDto {
  @IsOptional() // Specifies that the 'title' property is optional (can be omitted)
  @IsString() // Ensures that the 'title' property is a string if provided
  title?: string; // Represents the updated title of the book

  @IsOptional() // Specifies that the 'author' property is optional (can be omitted)
  @IsString() // Ensures that the 'author' property is a string if provided
  author?: string; // Represents the updated author of the book

  @IsOptional() // Specifies that the 'isbn' property is optional (can be omitted)
  @IsString() // Ensures that the 'isbn' property is a string if provided
  isbn?: string; // Represents the updated ISBN (International Standard Book Number) of the book
}
