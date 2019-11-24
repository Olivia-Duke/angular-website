import {Component} from '@angular/core';
import homecontent from '../../../../../assets/text-content/home.content.json';

@Component({
  selector: 'app-bio',
  templateUrl: './bio.component.html',
  styleUrls: ['./bio.component.css']
})
export class BioComponent {
  bio = homecontent.bio;
}
