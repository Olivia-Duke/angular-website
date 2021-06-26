import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {HomeComponent} from './home.component';
import {ToolsAndTechComponent} from './components/proficiencies/tools-and-tech.component';
import {BookComponent} from './components/book/book.component';
import {ServicesModule} from '../services/services.module';
import {GlobalComponentsModule} from '../global-components/global-components.module';
import {LocalResourceService} from '../services/local-resource-service';
import {HomeRoutingModule} from './home-routing.module';

@NgModule({
  declarations: [
    HomeComponent,
    BookComponent,
    ToolsAndTechComponent
  ],
  imports: [
    CommonModule,
    ServicesModule,
    GlobalComponentsModule,
    HomeRoutingModule
  ],
  exports: [
    HomeComponent
  ],
  providers: [
    LocalResourceService
  ]
})
export class HomeModule { }
