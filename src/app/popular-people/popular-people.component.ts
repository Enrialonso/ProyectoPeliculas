import { Component, OnInit } from '@angular/core';
import { popularMovies } from '../modelos/popularmovies.modelo'
import { GetserverService } from '../servicios/getserver.service'

@Component({
  selector: 'app-popular-people',
  templateUrl: './popular-people.component.html',
  styleUrls: ['./popular-people.component.css']
})
export class PopularPeopleComponent implements OnInit {

  objeto = new popularMovies
  
  diccionario: Array<object> = []

  constructor(private getserverService: GetserverService) { 

    this.getserverService.getPersonas().subscribe(personas => {
      for ( const id$ in personas) {
        const p = personas[id$];
        this.diccionario.push(personas[id$]);
        
        } 
        console.log(this.diccionario)
      })

  }

  ngOnInit() {
  }

}
