import { Module } from '@nestjs/common'; // Imports NestJS module decorator
import { BookController } from './book.controller';
import { BookService } from './book.service';

@Module({
  controllers: [BookController], // Specifies the controller(s) to be included in the module
  providers: [BookService], // Specifies the service(s) to be included in the module
})
export class BookModule {} // Defines and exports the BookModule class as a NestJS module
