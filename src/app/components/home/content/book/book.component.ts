import {Component} from '@angular/core';
import bookData from '../../../../../assets/text-content/currently-reading.json';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent {
  books = bookData;
}
