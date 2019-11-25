import {Component} from '@angular/core';
import bookData from '../../../assets/text-content/currently-reading.json';
import homeContentHeading from '../../../assets/text-content/home.content.json';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  books: any = bookData;
  contentHeading: any = homeContentHeading;
}
