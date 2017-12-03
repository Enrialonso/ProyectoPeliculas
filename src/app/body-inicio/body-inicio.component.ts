import { Component, OnInit } from '@angular/core';
import { popularMovies } from '../modelos/popularmovies.modelo'
import { GetserverService } from '../servicios/getserver.service';
import { Routes, RouterModule, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-body-inicio',
  templateUrl: './body-inicio.component.html',
  styleUrls: ['./body-inicio.component.css']
})
export class BodyInicioComponent implements OnInit {

  objeto = new popularMovies

  diccionario: Array<object> = []

  id: string

  constructor(private getserverService: GetserverService,private route: ActivatedRoute) { }

  ngOnInit() {

    if(this.route.snapshot.paramMap.get('id') == null){    
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

     }else{
      this.id = this.route.snapshot.paramMap.get('id');
      this.getserverService.getPagPeli(parseInt(this.id)).subscribe(pelis => {
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

   }

}

