import {Component, Input} from '@angular/core';
import {Project} from '../../home/models/project';

@Component({
  selector: 'app-project-item',
  templateUrl: './project-item.component.html',
  styleUrls: ['./project-item.component.css']
})
export class ProjectItemComponent {
  @Input() project: Project;
  hidden = true;

  getDataTarget() {
    return `#${this.project.slug}-content`;
  }

  getControls() {
    return `${this.project.slug}-content`;
  }

  clicked() {
    this.hidden = !this.hidden;
  }

  topButtonText() {
    return this.hidden ? 'Show me more' : 'Hide';
  }
}
