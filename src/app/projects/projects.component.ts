import { TSMap } from 'typescript-map';
import { Component, OnInit } from '@angular/core';
import { Project } from '../_model/project.model';

import { ProjectService } from './_service/project.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html'
})
export class ProjectsComponent implements OnInit {

  private id_poject_inserted: number = -1;

  private project_aux: Project = { name: '' };

  private base64textString = '';

  projects: Project[] = [
    { id: 0, name: 'test', imageEncoded: null, imageDecoded: null }
  ];

  constructor(private _projectService: ProjectService) { }

  ngOnInit() {
    this._projectService.listData().subscribe(
      data => {
        this.projects = data;
      }
    );


  }

  handleFileSelect(evt) {
    const files = evt.target.files;
    const file = files[0];

    if (files && file) {
      const reader = new FileReader();

      reader.onload = this._handleReaderLoaded.bind(this);

      reader.readAsBinaryString(file);
    }
  }

  _handleReaderLoaded(readerEvt) {
    const binaryString = readerEvt.target.result;
    this.base64textString = btoa(binaryString);
    console.log(btoa(binaryString));
  }

  upload(): void {
    this.project_aux.imageEncoded = this.base64textString;
    // Subir imagen
    // this._projectService.
    this._projectService.insert(this.project_aux).subscribe(data => {

    });

    console.log('project_aux');


    console.log(this.project_aux);

    // clean obj.
    this.project_aux = { name: '', imageEncoded: null, imageDecoded: null };


    this.base64textString = '';
  }
}
