import {Component, OnInit} from '@angular/core';
import {ContentHeading} from '../global-components/models/content-heading';
import {LocalResourceService} from '../services/local-resource-service';

@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.css']
})
export class MusicComponent implements OnInit {
  resourceLocation = '/assets/text-content/music.json';
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
