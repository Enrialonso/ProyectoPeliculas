import { Component, OnInit } from '@angular/core';
import { Routes, RouterModule, ActivatedRoute } from '@angular/router';
import { popularMovies } from '../modelos/popularmovies.modelo'

@Component({
  selector: 'app-show-pelicula',
  templateUrl: './show-pelicula.component.html',
  styleUrls: ['./show-pelicula.component.css']
})
export class ShowPeliculaComponent implements OnInit {

  public id: number;

  objeto = new popularMovies

  infoPelicula: object

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.id = parseInt(this.route.snapshot.paramMap.get('id'));

    for(let peli of this.objeto.Movie){
      if (peli ['id'] === this.id){
        this.infoPelicula = peli
      }
    }

    console.log(this.infoPelicula)

  }

}
