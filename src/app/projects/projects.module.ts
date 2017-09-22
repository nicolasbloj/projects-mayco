import { ProjectsComponent } from './projects.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ProjectsComponent],
  exports: [ProjectsComponent]
})
export class ProjectsModule { }
