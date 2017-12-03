import { Component, OnInit } from '@angular/core';
import { Routes, RouterModule, ActivatedRoute } from '@angular/router';
import { GetserverService } from '../servicios/getserver.service';

@Component({
  selector: 'app-show-pelicula',
  templateUrl: './show-pelicula.component.html',
  styleUrls: ['./show-pelicula.component.css']
})
export class ShowPeliculaComponent implements OnInit {

  public id: string;

  infoPelicula: object

  constructor(private route: ActivatedRoute, private getserverService: GetserverService) { 
    this.id = this.route.snapshot.paramMap.get('id');
    this.getserverService.getPeliculaUnica(this.id).subscribe(pelis => {
        console.log(pelis)
        this.infoPelicula = pelis;
    })

  }

  ngOnInit() { }

}
