import { Component, OnInit, ViewChild } from '@angular/core';
import { Routes, RouterModule, ActivatedRoute } from '@angular/router';
import { GetserverService } from '../servicios/getserver.service';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { NgForm } from '@angular/forms';
import { setInterval } from 'timers';

@Component({
  selector: 'app-comentarios-pelis',
  templateUrl: './comentarios-pelis.component.html',
  styleUrls: ['./comentarios-pelis.component.css']
})

export class ComentariosPelisComponent implements OnInit {

  comentariosPelis: object
  id: string

  constructor(private route: ActivatedRoute, private getserverService: GetserverService, private modalService: NgbModal) { 

    this.cargaComentarios()

   }

  ngOnInit() {this.cargaComentarios() }

  onSubmit(f: NgForm) {
    f.value.id = this.id
    f.value.coleccion = 'comentarios_pelis'
    console.log(f.value);
    this.getserverService.postComentario(f.value)
    setInterval(function(){}, 500);
    this.ngOnInit()
  }

  open(content) {this.modalService.open(content, {size: 'lg'})}

  cargaComentarios(){

    this.id = this.route.snapshot.paramMap.get('id');
    this.getserverService.getComentariosPelis(this.id).subscribe(comentariosPelis => {
    this.comentariosPelis = comentariosPelis;

    })

  }
}


