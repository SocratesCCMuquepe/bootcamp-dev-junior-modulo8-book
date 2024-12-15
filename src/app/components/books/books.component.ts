import { Component } from '@angular/core';
import { Book } from '../../Book';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent {

  newBook: Book = {} as Book;
  isUpdate = false;
  idCount : number = 5;

  books: Book[] = [
    {
      id: 1,
      title: "Angular Para Iniciantes",
      author: "Gualter Santos Sebastião",
      price: 580.00
    },
    {
      id: 2,
      title: "Java e SpringBoot",
      author: "Glauco",
      price: 3980.00
    },
    {
      id: 3,
      title: "Data Cience",
      author: "Miguel Malungo Malongui",
      price: 80.00
    },
    {
      id: 4,
      title: "SpringBoot para Iniciantes",
      author: "Ernesto Sambongo",
      price: 80.00
    }
  ];

  saveBook() {
    if (!this.isUpdate) {
      this.newBook.id = this.idCount;
      this.idCount++;
      this.books.push(this.newBook);
    }

    this.newBook = {} as Book;
    this.isUpdate = false;
  }

  updateBook(selectedBook: Book) {
    this.newBook = selectedBook;
    this.isUpdate = true;
  }

  removeBook(selectedBook: Book) {
    this.books = this.books.filter(b => b !== selectedBook);
  }

}
