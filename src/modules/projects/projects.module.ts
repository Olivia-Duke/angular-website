import {NgModule} from '@angular/core';
import {ProjectsComponent} from './projects.component';
import {ProjectItemComponent} from './project-item/project-item.component';
import {ServicesModule} from '../services/services.module';
import {CommonModule} from '@angular/common';
import {LocalResourceService} from '../services/local-resource-service';
import {GlobalComponentsModule} from '../global-components/global-components.module';
import {ProjectsRoutingModule} from './projects-routing.module';

@NgModule({
  declarations: [
    ProjectsComponent,
    ProjectItemComponent
  ],
  imports: [
    CommonModule,
    ServicesModule,
    GlobalComponentsModule,
    ProjectsRoutingModule
  ],
  exports: [
    ProjectsComponent
  ],
  providers: [
    LocalResourceService
  ]
})
export class ProjectsModule { }
