import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class GetserverService {

  presURL = 'http://localhost:3000/'

  constructor(private http: Http) { 

    

  }

  getPelis() {
    return this.http.get( this.presURL )
    .map( res => res.json());
    }

}
