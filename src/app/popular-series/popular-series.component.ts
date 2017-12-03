import { Component, OnInit } from '@angular/core';
import { popularMovies } from '../modelos/popularmovies.modelo'
import { GetserverService } from '../servicios/getserver.service';

@Component({
  selector: 'app-popular-series',
  templateUrl: './popular-series.component.html',
  styleUrls: ['./popular-series.component.css']
})
export class PopularSeriesComponent implements OnInit {

  objeto = new popularMovies
  
  diccionario: Array<object> = []

  constructor(private getserverService: GetserverService) { 

    this.getserverService.getSeries().subscribe(series => {
      for ( const id$ in series) {
        const p = series[id$];
          if(p.info_TMDB.original_name.length  > 18){
            p.info_TMDB.nameLitel = p.info_TMDB.original_name.substring(0,18)
          }else{p.info_TMDB.nameLitel = p.info_TMDB.original_name}

        if(p.info_TMDB.overview.length > 80){
          p.info_TMDB.overviewLitel = p.info_TMDB.overview.substring(0,80)
        }else{ p.info_TMDB.overviewLitel = p.info_TMDB.overview  }

        this.diccionario.push(series[id$]);
        
        } 

        console.log(this.diccionario)

      }) 

  }

  ngOnInit() { }

}
