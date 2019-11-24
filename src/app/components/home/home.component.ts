import {Component} from '@angular/core';
import bookData from '../../../assets/text-content/currently-reading.json';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  books: any = bookData;
}
