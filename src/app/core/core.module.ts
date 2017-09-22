import { ProjectsModule } from '../projects/projects.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShellComponent } from './shell/shell.component';
import { MainContentComponent } from './shell/main-content/main-content.component';

@NgModule({
  imports: [
    CommonModule,
    ProjectsModule
  ],
  declarations: [ShellComponent, MainContentComponent]
})
export class CoreModule { }
