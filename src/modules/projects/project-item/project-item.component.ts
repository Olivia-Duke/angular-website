import {Component, Input} from '@angular/core';
import {Project, SimpleDate} from '../project';

@Component({
  selector: 'app-project-item',
  templateUrl: './project-item.component.html',
  styleUrls: ['./project-item.component.css']
})
export class ProjectItemComponent {
  @Input() project: Project;
  hidden = true;

  getDataTarget(): string {
    return `#${this.project.slug}-content`;
  }

  getControls(): string {
    return `${this.project.slug}-content`;
  }

  clicked(): void {
    this.hidden = !this.hidden;
  }

  topButtonText(): string {
    return this.hidden ? 'Show me more' : 'Hide';
  }

  getDate(): string {
    const dateStart = this.getDateStart();
    const dateEnd = this.getDateEnd();
    if (dateStart === dateEnd) {
      return dateStart;
    } else {
      return `${dateStart} - ${dateEnd}`;
    }
  }

  getDateStart(): string {
    return this.getDateString(this.project.dateStart);
  }

  getDateEnd(): string {
    return this.project.isCurrent ? 'Present' : this.getDateString(this.project.dateEnd);
  }

  getDateString(date: SimpleDate): string {
    let stringDate: string;
    if (date.year) {
      stringDate = `${date.year}`;
      const dateMonth = this.getDateMonth(date);
      if (dateMonth) {
        stringDate = `${stringDate}, ${dateMonth}`;
      }
    }

    return stringDate;
  }

  getDateMonth(date: SimpleDate): string {
    switch (date.month) {
      case 1:
        return 'January';
      case 2:
        return 'February';
      case 3:
        return 'March';
      case 4:
        return 'April';
      case 5:
        return 'May';
      case 6:
        return 'June';
      case 7:
        return 'July';
      case 8:
        return 'August';
      case 9:
        return 'September';
      case 10:
        return 'October';
      case 11:
        return 'November';
      case 12:
        return 'December';
      default:
        return null;
    }
  }

  getRelatedTechnologies(): string {
    return this.project.notableTechnologies ? this.project.notableTechnologies.join(', ') : '';
  }
}
