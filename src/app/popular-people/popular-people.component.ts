import { Component, OnInit } from '@angular/core';
import { GetserverService } from '../servicios/getserver.service'

@Component({
  selector: 'app-popular-people',
  templateUrl: './popular-people.component.html',
  styleUrls: ['./popular-people.component.css']
})
export class PopularPeopleComponent implements OnInit {

  diccionario: Array<object> = []

  pagina: number

  constructor(private getserverService: GetserverService) { 
      this.pagina = 0
  }

  ngOnInit() {

    this.getPersonas()

  }

  getPersonas(){

    this.getserverService.getPersonas().subscribe(personas => {
      for ( const id$ in personas) {
        const p = personas[id$];
        this.diccionario.push(personas[id$]);
        
        } 
        console.log(this.diccionario)
      })

  }

  onScroll () {
    console.log('scrolled!!')
    this.pagina += 1
    this.getserverService.getPersonasPlus(this.pagina).subscribe(personas => {
      for ( const id$ in personas) {
        const p = personas[id$];
        this.diccionario.push(personas[id$]);
        
        } 
        console.log(this.diccionario)
      })
  }

}
