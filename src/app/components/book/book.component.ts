import { Component } from '@angular/core';
import { Book } from '../../Book'

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent {

  abook = {
    id: 1,
    title: "Book Title",
    author: "Book Author",
    price: 580.00
  };

}
