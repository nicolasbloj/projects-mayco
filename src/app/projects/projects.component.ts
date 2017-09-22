import { Component, OnInit } from '@angular/core';
import { Project } from '../_model/project.model';

import { ProjectService } from './_service/project.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html'
})
export class ProjectsComponent implements OnInit {

  URL = 'http://localhost:8080/project/list';

  projects: Project[] = [
    { id: 0, name: 'test', image: null }
  ];

  constructor(private _projectService: ProjectService) { }

  ngOnInit() {
    this._projectService.listData(this.URL).subscribe(
      data => {
        this.projects = data;
      }
    );


  }

}
