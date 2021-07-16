import {Component, Input} from '@angular/core';
import {ContentHeading} from '../../models/content-heading';

@Component({
  selector: 'app-content-header',
  templateUrl: './content-header.component.html',
  styleUrls: ['./content-header.component.css']
})
export class ContentHeaderComponent {
  @Input() contentHeading: ContentHeading;
}
