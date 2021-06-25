import {Component, OnInit} from '@angular/core';
import {LocalResourceService} from '../../service/local-resource-service';
import {ContentHeading} from '../../models/content-heading';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  resourceLocation = '/assets/text-content/home.content.json';

  contentHeading: ContentHeading;

  constructor(
    private resourceService: LocalResourceService
  ) {}

  ngOnInit() {
    this.resourceService.getJsonDocument(this.resourceLocation).then(result => {
      this.contentHeading = result;
    }).catch(err => {
      console.error(err);
    });
  }
}
