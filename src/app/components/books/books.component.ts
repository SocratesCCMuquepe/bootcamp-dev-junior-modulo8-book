import { Component } from '@angular/core';
import { Book } from '../../Book';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent {

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
    }
  ];
}
