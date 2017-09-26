import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectsComponent } from './projects.component';
import { ProjectService } from './_service/project.service';
import { RestClientService } from '../_service/rest-client.service';

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    FormsModule
  ],
  declarations: [ProjectsComponent],
  exports: [ProjectsComponent],
  providers: [ProjectService, RestClientService]
})
export class ProjectsModule { }
