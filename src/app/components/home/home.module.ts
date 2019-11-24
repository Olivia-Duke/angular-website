import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {HomeComponent} from './home.component';
import {BioComponent} from './content/bio/bio.component';
import {BookComponent} from './content/book/book.component';
import {ToolsAndTechComponent} from './content/proficiencies/tools-and-tech.component';

@NgModule({
  declarations: [
    HomeComponent,
    BioComponent,
    BookComponent,
    ToolsAndTechComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    BioComponent,
    HomeComponent,
  ],
  providers: []
})
export class HomeModule { }
