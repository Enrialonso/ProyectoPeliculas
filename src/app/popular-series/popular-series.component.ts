import { Component, OnInit } from '@angular/core';
import { popularMovies } from '../modelos/popularmovies.modelo'

@Component({
  selector: 'app-popular-series',
  templateUrl: './popular-series.component.html',
  styleUrls: ['./popular-series.component.css']
})
export class PopularSeriesComponent implements OnInit {

  objeto = new popularMovies
  
  diccionario: Array<object> = []

  constructor() { 

    for (let serie of this.objeto.Serie) {
      
            if(serie["original_name"].length >= 18){
              serie["original_nameLitle"] = serie["original_name"].substring(0,18) + '...'
            }else{
              serie["original_nameLitle"] = serie["original_name"]
            }
      
            serie["overviewLitle"] = serie["overview"].substring(0,80) + '...'
      
            this.diccionario.push(serie)
      
          }
      

  }

  ngOnInit() {
  }

}
