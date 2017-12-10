import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class GetserverService {

  presURL = 'http://localhost:3000/'

  constructor(private http: Http) {}

  getPelis() {
      return this.http.get(this.presURL).map(res => res.json());
  }

  getSeries() {
      return this.http.get(this.presURL + 'popular-series').map(res => res.json());
  }

  getPeliculaUnica(id) {
      return this.http.get(this.presURL + 'pelicula/' + id).map(res => res.json());
  }

  getSerieUnica(id) {
      return this.http.get(this.presURL + 'serie/' + id).map(res => res.json());
  }

  getPersonas() {
      return this.http.get(this.presURL + 'popular-people').map(res => res.json());
  }

  getPersonasPlus(pagina) {
    return this.http.get(this.presURL + 'popular-people/' + pagina ).map(res => res.json());
}

  getPaginacionPeli(id) {
      return this.http.get(this.presURL + 'pag-peli/' + id).map(res => res.json());
  }

  getPaginacionSeries(id) {
    return this.http.get(this.presURL + 'pag-seri/' + id).map(res => res.json());
  }
  
  getComentariosPelis(id) {
    return this.http.get(this.presURL + 'comentarios-pelis/' + id).map(res => res.json());
    
  } 

  postComentario(objeto){
    //console.log(objeto)
    this.http.post(this.presURL + 'post-comentarios-pelis/' + objeto.id, { objeto })
        .subscribe(
          res => {console.log(res);},
          err => {console.log("Error occured");}
        );

  }

}
