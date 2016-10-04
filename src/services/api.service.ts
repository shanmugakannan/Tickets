import {Injectable} from '@angular/core';
import {Http, Headers, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';
import 'rxjs/add/observable/throw';

@Injectable()
export class ApiService{
    constructor(private http:Http){}

    headers:Headers = new Headers({ContentType:'application/json', Accept:'application/json'});
    api_url:string = 'http://sjn17-atodv-003:6050/api/';

    get(path:string) : Observable<any>{
        return this.http.get(`${this.api_url}${path}`,this.headers)
    }
}
