import { Component, OnInit } from '@angular/core';
import { Routes, RouterModule, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-paginacion-pelis',
  templateUrl: './paginacion-pelis.component.html',
  styleUrls: ['./paginacion-pelis.component.css']
})

export class PaginacionPelisComponent implements OnInit {

  nextPagePelis = 0
  previusPagePeli = 0
  idPage: number

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {

    if(this.route.snapshot.paramMap.get('id') == null){
      console.log('esto es: ' + this.route.snapshot.paramMap.get('id'))
      this.nextPagePelis = 1
      this.previusPagePeli = 0
    }else{
      this.idPage = parseInt(this.route.snapshot.paramMap.get('id'))
      this.nextPagePelis = this.idPage + 1
      this.previusPagePeli = 0

        if(this.idPage > 1){
          this.previusPagePeli = this.idPage - 1
        }

    }

  }

}
