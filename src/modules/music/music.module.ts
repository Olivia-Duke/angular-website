import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ServicesModule} from '../services/services.module';
import {GlobalComponentsModule} from '../global-components/global-components.module';
import {LocalResourceService} from '../services/local-resource-service';
import {MusicComponent} from './music.component';
import {MusicRoutingModule} from './music-routing.module';

@NgModule({
  declarations: [
    MusicComponent
  ],
  imports: [
    CommonModule,
    ServicesModule,
    GlobalComponentsModule,
    MusicRoutingModule
  ],
  exports: [
    MusicComponent
  ],
  providers: [
    LocalResourceService
  ]
})
export class MusicModule { }
