import {Component, OnInit} from '@angular/core';
import {LocalResourceService} from '../../../services/local-resource-service';
import {Skills} from '../../models/skills';
import {componentEnterTrigger} from '../../../../app/animations/global-animations';

@Component({
  selector: 'app-tools-and-tech',
  templateUrl: './tools-and-tech.component.html',
  styleUrls: ['./tools-and-tech.component.css'],
  animations: [componentEnterTrigger]
})
export class ToolsAndTechComponent implements OnInit {
  resourceLocation = '/assets/text-content/tools-and-tech.json';

  toolsAndTech: Skills;

  constructor(
    private resourceService: LocalResourceService
  ) {}

  ngOnInit() {
    this.resourceService.getJsonDocument(this.resourceLocation).then(result => {
      this.toolsAndTech = result;
    }).catch(err => {
      console.error(err);
    });
  }
}
