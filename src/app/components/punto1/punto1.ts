import { Component } from '@angular/core';
import { Evento } from '../../models/evento';
import{ Eventos } from '../../servicios/eventos'

@Component({
  selector: 'app-punto1',
  imports: [],
  templateUrl: './punto1.html',
  styleUrl: './punto1.css',
})
export class Punto1 {
  eventos: Evento[] = [];
  indice = 0;

  constructor(private eventosService: Eventos){
    this.eventos = this.eventosService.obtenerEventos();
  }

  siguiente(){
    if(this.indice < this.eventos.length -1){
      this.indice ++;
    }else{
      this.indice = 0;
    }
  }
  anterior(){
    if(this.indice > 0){
      this.indice --;
    }else{
      this.indice = this.eventos.length - 1;
    }
  }
}
