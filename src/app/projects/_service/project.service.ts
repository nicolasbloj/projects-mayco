import { TSMap } from 'typescript-map';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, Response, RequestOptions, Headers, RequestMethod } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

import { Project } from '../../_model/project.model';
import { RestClientService } from '../../_service/rest-client.service';

@Injectable()
export class ProjectService {

  // URL_BASE = 'http://localhost:8080';

  URL_BASE = 'https://mayco-backend.herokuapp.com';

  URL_RESUORCE_LIST = '/project/list';

  URL_RESOURCE_ADD = '/project/add';

  constructor(private _restClientServcice: RestClientService) { }

  public listData(): Observable<Project[]> {
    const obs: Observable<Response> = this._restClientServcice.listData(this.URL_BASE + this.URL_RESUORCE_LIST);
    obs.subscribe(rs => console.log(rs));

    return obs.map((res: Response) => <Project[]>res.json())
      .do(data => console.log('data' + JSON.stringify(data)));
  }


  insert(project: Project): Observable<Response> {
    return this._restClientServcice.insertOrUpdateData(
      project,
      this.URL_BASE, this.URL_RESOURCE_ADD
    );
  }




}
