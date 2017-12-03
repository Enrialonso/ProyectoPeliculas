import { Component, OnInit } from '@angular/core';
import { popularMovies } from '../modelos/popularmovies.modelo'
import { GetserverService } from '../servicios/getserver.service';

@Component({
  selector: 'app-body-inicio',
  templateUrl: './body-inicio.component.html',
  styleUrls: ['./body-inicio.component.css']
})
export class BodyInicioComponent implements OnInit {

  objeto = new popularMovies

  diccionario: Array<object> = []

  constructor(private getserverService: GetserverService) {

    this.getserverService.getPelis().subscribe(pelis => {
      for ( const id$ in pelis) {
        const p = pelis[id$];
          if(p.info_TMDB.original_title.length  > 18){
            p.info_TMDB.titleLitel = p.info_TMDB.original_title.substring(0,18)
          }else{p.info_TMDB.titleLitel = p.info_TMDB.original_title}

        if(p.info_TMDB.overview.length > 80){
          p.info_TMDB.overviewLitel = p.info_TMDB.overview.substring(0,80)
        }else{ p.info_TMDB.overviewLitel = p.info_TMDB.overview  }

        this.diccionario.push(pelis[id$]);
        
        } 

      })
   }

  ngOnInit() { }

}

