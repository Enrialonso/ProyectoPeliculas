import { Component, OnInit } from '@angular/core';
import { GetserverService } from '../servicios/getserver.service';
import { Routes, RouterModule, ActivatedRoute } from '@angular/router';;

@Component({
  selector: 'app-popular-series',
  templateUrl: './popular-series.component.html',
  styleUrls: ['./popular-series.component.css']
})
export class PopularSeriesComponent implements OnInit {

  diccionario: Array<object> = []

  conteo: number = 0
  nextPageSeries = 0
  previusPageSeries = 0

  constructor(private getserverService: GetserverService, private route: ActivatedRoute) {

    if (this.route.snapshot.paramMap.get('id') == null) {
      this.conteo = 0
    } else {
        this.conteo = parseInt(this.route.snapshot.paramMap.get('id'))
    }

  }

  ngOnInit() {
    
        this.botonPaginacion(this.conteo)
        this.incioShowSeries(this.conteo)
    
    }
    
    previusPage() {
        this.conteo -= 1
        this.botonPaginacion(this.conteo)
        this.incioShowSeries(this.conteo)
    }
    
    nextPage() {
        this.conteo += 1
        this.botonPaginacion(this.conteo)
        this.incioShowSeries(this.conteo)
    }

  incioShowSeries(conteo) {

      this.diccionario = []
      this.getserverService.getPaginacionSeries(this.conteo).subscribe(series => {
        for ( const id$ in series) {
          const p = series[id$];
            if(p.info_TMDB.original_name.length  > 18){
              p.info_TMDB.nameLitel = p.info_TMDB.original_name.substring(0,18) + '...'
            }else{p.info_TMDB.nameLitel = p.info_TMDB.original_name}

          if(p.info_TMDB.overview.length > 80){
            p.info_TMDB.overviewLitel = p.info_TMDB.overview.substring(0,80)
          }else{ p.info_TMDB.overviewLitel = p.info_TMDB.overview  }

          this.diccionario.push(series[id$]);
          
          } 

          console.log(this.diccionario)

        })

  }

  botonPaginacion(id) {
    
        this.nextPageSeries = id + 1
        this.previusPageSeries = this.nextPageSeries - 2
    
    }

}
