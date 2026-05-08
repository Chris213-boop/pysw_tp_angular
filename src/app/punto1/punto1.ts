import { Component } from '@angular/core';

@Component({
  selector: 'app-punto1',
  imports: [],
  templateUrl: './punto1.html',
  styleUrl: './punto1.css',
})
export class Punto1 {
  eventos =[
    {
      nombre: "Taller de trompeta",
      descripcion: "Taller para aprender y mejorar la respiracion y tecnica con la trompeta",
      img: "img/trompeta.jpg"
    },
    {
      nombre: "Taller de guitarra",
      descripcion: "Taller para aprender y mejorar acorde, ritmos y tecnicas para tocar canciones",
      img: "img/guitarra.jpg"
    },
    {
      nombre: "Taller de piano",
      descripcion: "Taller para desarrollar coordinacion y lectura musical",
      img: "img/piano.jpg"
    },
    {
      nombre: "Taller de zampoña",
      descripcion: "Taller para aprender a tocar melodias tradicionales y conocer la musica andina",
      img: "img/zampoña.jpg"
    }
  ];
  indice = 0;

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
