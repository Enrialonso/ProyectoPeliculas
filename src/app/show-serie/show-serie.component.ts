import { Component, OnInit } from '@angular/core';
import { Routes, RouterModule, ActivatedRoute } from '@angular/router';
import { popularMovies } from '../modelos/popularmovies.modelo'
import { GetserverService } from '../servicios/getserver.service';

@Component({
  selector: 'app-show-serie',
  templateUrl: './show-serie.component.html',
  styleUrls: ['./show-serie.component.css']
})
export class ShowSerieComponent implements OnInit {

  public id: number;
  
  objeto = new popularMovies
  
  infoSerie: object

  constructor(private route: ActivatedRoute, private getserverService: GetserverService) {

    this.id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.getserverService.getSerieUnica(this.id).subscribe(serie => {
        console.log(serie)
        this.infoSerie = serie;
    })

   }

  ngOnInit() {
    //this.id = parseInt(this.route.snapshot.paramMap.get('id'));
    
        //for(let seri of this.objeto.Serie){
         // if (seri ['id'] === this.id){
            //this.infoSerie = seri
         //}
        //}
    
        //console.log(this.infoSerie)
  }

}
