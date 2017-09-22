import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, Response, RequestOptions, Headers, RequestMethod } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

import { Project } from '../../_model/project.model';
import { RestClientService } from '../../_service/rest-client.service';

@Injectable()
export class ProjectService {

  constructor(private _restClientServcice: RestClientService) { }

  public listData(url: string): Observable<Project[]> {
    const obs: Observable<Response> = this._restClientServcice.listData(url);
    obs.subscribe(rs => console.log(rs));

    return obs.map((res: Response) => <Project[]>res.json())
      .do(data => console.log('data' + JSON.stringify(data)));
  }


  /*
    private INSERT_UPDATE = 1;
    private UPDATE = 2;
    private DELETE = 3;
    
    public insertOrUpdateData
      (aObject: any, url_base: string, url_resource: string): Observable<Response> {
      return this.insertOrUpdateOrDelete(aObject, url_base, url_resource, this.INSERT_UPDATE);
    }
  
    public deleteData
      (aObject: any, url_base: string, url_resource: string): Observable<Response> {
      return this.insertOrUpdateOrDelete(aObject, url_base, url_resource, this.DELETE);
    }
  
    private insertOrUpdateOrDelete
      (aObject: any, url_base: string, url_resource: string, operation: number): Observable<Response> {
  
      const url: string = url_base + url_resource;
      const body = JSON.stringify(aObject);
      const headers0: Headers = new Headers({ 'Content-Type': 'application/json' });
      const options = new RequestOptions({ headers: headers0 });
  
      switch (operation) {
  
        case this.INSERT_UPDATE:
          console.log('INSERT-UPDATE');
          return this._http.put(`${url}/`, body, options); // PUT
  
        case this.DELETE:
          console.log('DELETE');
          return this._http.delete(`${url}/${aObject.getId}`, options);
      }
  
    }
  
    */
}
