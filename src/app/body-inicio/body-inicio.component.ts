import { Component, OnInit } from '@angular/core';
import { popularMovies } from '../modelos/popularmovies.modelo'

@Component({
  selector: 'app-body-inicio',
  templateUrl: './body-inicio.component.html',
  styleUrls: ['./body-inicio.component.css']
})
export class BodyInicioComponent implements OnInit {

  objeto = new popularMovies

  diccionario: Array<object> = []

  constructor() {
    
    for (let movie of this.objeto.Movie) {

      if(movie["title"].length >= 18){
        movie["titleLitle"] = movie["title"].substring(0,18) + '...'
      }else{
        movie["titleLitle"] = movie["title"]
      }

      movie["overviewLitle"] = movie["overview"].substring(0,80) + '...'

      this.diccionario.push(movie)

    }

   }

  ngOnInit() { }

}

