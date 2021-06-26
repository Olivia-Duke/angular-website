import {Component, Input, OnInit} from '@angular/core';
import {LocalResourceService} from '../../../services/local-resource-service';
import {Book} from '../../models/book';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  resourceLocation = '/assets/text-content/currently-reading.json';
  books: Book[];

  constructor(
    private resourceService: LocalResourceService
  ) { }

  ngOnInit() {
    this.resourceService.getJsonDocument(this.resourceLocation).then(result => {
      this.books = result;
    }).catch(err => {
      console.error(err);
    });
  }
}
