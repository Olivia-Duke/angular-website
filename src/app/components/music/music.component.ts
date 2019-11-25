import {Component} from '@angular/core';
import {ContentHeading} from '../../models/ContentHeading';
import musicContent from '../../../assets/text-content/music.content.json';

@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.css']
})
export class MusicComponent {
  contentHeading: ContentHeading = musicContent;
}
