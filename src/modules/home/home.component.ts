import {Component, OnInit} from '@angular/core';
import {LocalResourceService} from '../services/local-resource-service';
import {ContentHeading} from '../global-components/models/content-heading';
import {componentEnterTrigger} from '../../app/animations/global-animations';

@Component({
  selector: 'app-home-root',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [componentEnterTrigger]
})
export class HomeComponent implements OnInit {
  resourceLocation = '/assets/text-content/home.json';

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
