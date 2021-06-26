import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ServicesModule} from '../services/services.module';
import {GlobalComponentsModule} from '../global-components/global-components.module';
import {LocalResourceService} from '../services/local-resource-service';
import {MusicComponent} from './music.component';

@NgModule({
  declarations: [
    MusicComponent
  ],
  imports: [
    CommonModule,
    ServicesModule,
    GlobalComponentsModule
  ],
  exports: [
    MusicComponent
  ],
  providers: [
    LocalResourceService
  ]
})
export class MusicModule { }
