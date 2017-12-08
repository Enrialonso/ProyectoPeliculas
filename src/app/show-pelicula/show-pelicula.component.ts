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

  infoPelicula: object = {

    "id_TMDB" : "",
    "imdb_id" : "",
    "info_TMDB" : {
      "poster_path" : "",
      "revenue" : "",
      "overview" : "",
      "id" : "",
      "genres" : [
        {"name" : ""},
        {"name" : ""}],
      "title" : "",
      "tagline" : "",
      "vote_count" : "",
      "homepage" : "",
      "belongs_to_collection" : {
        "poster_path" : "",
        "backdrop_path" : "",
        "name" : "",
        "id" : "137697"
      },
      "original_language" : "",
      "status" : "",
      "release_date" : "",
      "original_title" : "",
      "budget" : "",
      "runtime" : ""
    },
    "original_title" : "",
    "popularity" : 0,
    "tipo" : "",
    "tipo_contenido" : "",
    "title" : "",
  }

  constructor(private route: ActivatedRoute, private getserverService: GetserverService) {
    this.infoPelicula = {} 
    this.id = this.route.snapshot.paramMap.get('id');
    this.getserverService.getPeliculaUnica(this.id).subscribe(pelis => {
        this.infoPelicula = pelis;
    })

  }

  ngOnInit() { }

}
