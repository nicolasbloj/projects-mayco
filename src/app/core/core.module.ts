import { ProjectsComponent } from './projects/projects.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShellComponent } from './shell/shell.component';
import { MainContentComponent } from './shell/main-content/main-content.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ShellComponent, MainContentComponent, ProjectsComponent]
})
export class CoreModule { }
