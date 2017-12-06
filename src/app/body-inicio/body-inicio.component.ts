import { Component, OnInit } from '@angular/core';
import { GetserverService } from '../servicios/getserver.service';
import { Routes, RouterModule, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-body-inicio',
  templateUrl: './body-inicio.component.html',
  styleUrls: ['./body-inicio.component.css']
})
export class BodyInicioComponent implements OnInit {

  diccionario: Array<object> = []
  conteo: number = 0
  nextPagePelis = 0
  previusPagePeli = 0


  constructor(private getserverService: GetserverService, private route: ActivatedRoute) {
    
        if (this.route.snapshot.paramMap.get('id') == null) {
            this.conteo = 0
        } else {
            this.conteo = parseInt(this.route.snapshot.paramMap.get('id'))
        }
    
    }
    
    ngOnInit() {
    
        this.botonPaginacion(this.conteo)
        this.incioShowPelis(this.conteo)
    
    }
    
    previusPage() {
        this.conteo -= 1
        this.botonPaginacion(this.conteo)
        this.incioShowPelis(this.conteo)
    }
    
    nextPage() {
        this.conteo += 1
        this.botonPaginacion(this.conteo)
        this.incioShowPelis(this.conteo)
    }
    
    incioShowPelis(conteo) {
    
        this.diccionario = []
        this.getserverService.getPaginacionPeli(this.conteo).subscribe(pelis => {
            for (const id$ in pelis) {
                const p = pelis[id$];
                if (p.info_TMDB.original_title.length > 18) {
                    p.info_TMDB.titleLitel = p.info_TMDB.original_title.substring(0, 18) + '...'
                } else {
                    p.info_TMDB.titleLitel = p.info_TMDB.original_title
                }
    
                if (p.info_TMDB.overview.length > 80) {
                    p.info_TMDB.overviewLitel = p.info_TMDB.overview.substring(0, 80)
                } else {
                    p.info_TMDB.overviewLitel = p.info_TMDB.overview
                }
    
                this.diccionario.push(pelis[id$]);
    
            }
        })
    }
    
    botonPaginacion(id) {
    
        this.nextPagePelis = id + 1
        this.previusPagePeli = 0
    
        if (id > 1) {
            this.previusPagePeli = id - 1
        }
    
    }
    
    }