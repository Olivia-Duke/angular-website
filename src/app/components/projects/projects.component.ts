import {Component} from '@angular/core';
import projects from '../../../assets/text-content/projects.json';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  projects = projects;
}
