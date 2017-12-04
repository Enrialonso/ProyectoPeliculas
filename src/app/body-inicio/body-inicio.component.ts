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

  id: number

  conteo: number

  nextPagePelis = 0
  previusPagePeli = 0
  idPage: number

  constructor(private getserverService: GetserverService,private route: ActivatedRoute) { }

  ngOnInit() { 

    this.botonPaginacion(this.id)
    this.incioShowPelis(this.id)
        
  }

  incioShowPelis(idPag){

    this.diccionario = []

    if(idPag == null){    
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
      //idPag = this.route.snapshot.paramMap.get('id');
      this.getserverService.getPaginacionPeli(parseInt(idPag)).subscribe(pelis => {
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

  botonPaginacion(id){

    if(id == null){
      this.nextPagePelis = 1
      this.previusPagePeli = 0
    }else{
      this.idPage = parseInt(id)
      this.nextPagePelis = this.idPage + 1
      this.previusPagePeli = 0

        if(this.idPage > 1){
          this.previusPagePeli = this.idPage - 1
        }

    }

  }

}

