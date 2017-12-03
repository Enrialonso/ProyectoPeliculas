import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class GetserverService {

  presURL = 'http://localhost:3000/'

  constructor(private http: Http) { }

  getPelis() {
    return this.http.get( this.presURL )
    .map( res => res.json());
    }
  
  getSeries() {
    return this.http.get( this.presURL + 'popular-series' )
    .map( res => res.json());
    }

  getPeliculaUnica(id) {
    return this.http.get( this.presURL + 'pelicula/' + id )
    .map( res => res.json());
    }

}
