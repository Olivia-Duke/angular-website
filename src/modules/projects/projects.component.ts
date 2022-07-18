import {Component, OnInit} from '@angular/core';
import {Project} from './project';
import {LocalResourceService} from '../services/local-resource-service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  personalProjectsLocation = '/assets/text-content/personal-projects.json';
  workProjectsLocation = '/assets/text-content/work-projects.json';
  personalProjects: Project[];
  workProjects: Project[];

  constructor(
    private resourceService: LocalResourceService
  ) {}

  async ngOnInit() {
    this.personalProjects = await this.loadProjectsFromLocation(this.personalProjectsLocation);
    this.workProjects = await this.loadProjectsFromLocation(this.workProjectsLocation);
  }

  async loadProjectsFromLocation(projectLocation: string): Promise<Project[]> {
    return this.resourceService.getJsonDocument(projectLocation);
  }
}
