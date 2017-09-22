import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, Response, RequestOptions, Headers, RequestMethod } from '@angular/http';



@Injectable()
export class RestClientService {

    constructor(private _http: Http) { }

    public listData(url: string): Observable<Response> {
        return this._http.get(url);
    }
}
