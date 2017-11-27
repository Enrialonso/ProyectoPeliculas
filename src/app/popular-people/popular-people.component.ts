import { Component, OnInit } from '@angular/core';
import { popularMovies } from '../modelos/popularmovies.modelo'

@Component({
  selector: 'app-popular-people',
  templateUrl: './popular-people.component.html',
  styleUrls: ['./popular-people.component.css']
})
export class PopularPeopleComponent implements OnInit {

  objeto = new popularMovies
  
  diccionario: Array<object> = []

  constructor() { 

    for (let persona of this.objeto.Persona) {
            
            persona['fristOverview'] = persona['known_for'][0]['overview'].substring(0,150) + '...'
            this.diccionario.push(persona)
      
          }

  }

  ngOnInit() {
  }

}
