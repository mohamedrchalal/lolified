import {Observable} from 'rxjs/Rx';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { Injectable } from '@angular/core';

@Injectable()

export class ChampService {
  private url= `http://localhost:3000/champions`;

  constructor(private http: Http) {}


  getChampData(): Observable<any> {
    return this.http.get(this.url)
           .map(res => res.json())
           .catch((error: any) => Observable.throw(error.json().error || 'Server error'));

  }

}
