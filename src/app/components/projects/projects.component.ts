import {Component, OnInit} from '@angular/core';
import {Project} from '../../models/project';
import {LocalResourceService} from '../../service/local-resource-service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  resourceLocation = '/assets/text-content/projects.json';
  projects: Project[];

  constructor(
    private resourceService: LocalResourceService
  ) {}

  ngOnInit() {
    this.resourceService.getJsonDocument(this.resourceLocation).then(result => {
      this.projects = result;
    }).catch(err => {
      console.error(err);
    });
  }

}
