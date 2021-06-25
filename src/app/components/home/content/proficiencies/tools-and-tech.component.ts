import {Component, OnInit} from '@angular/core';
import {LocalResourceService} from '../../../../service/local-resource-service';
import {Skills} from '../../../../models/skills';

@Component({
  selector: 'app-tools-and-tech',
  templateUrl: './tools-and-tech.component.html',
  styleUrls: ['./tools-and-tech.component.css']
})
export class ToolsAndTechComponent implements OnInit {
  resourceLocation = '/assets/text-content/home.content.json';

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
