import {Component} from '@angular/core';
import toolsAndTechData from '../../../../../assets/text-content/tools-and-tech.json';

@Component({
  selector: 'app-tools-and-tech',
  templateUrl: './tools-and-tech.component.html',
  styleUrls: ['./tools-and-tech.component.css']
})
export class ToolsAndTechComponent {
  toolsAndTech = toolsAndTechData;
}
