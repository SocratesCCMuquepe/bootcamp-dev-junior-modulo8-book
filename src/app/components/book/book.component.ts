import { Component, EventEmitter, Input, Output} from '@angular/core';
import { Book } from '../../Book'


@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent {

  @Input()
  book: Book = {} as Book;

  @Output()
  saveEmitter = new EventEmitter()

  save(){
    console.log("Saving");
    this.saveEmitter.emit();
  }

}
