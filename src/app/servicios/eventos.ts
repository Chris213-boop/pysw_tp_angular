import { Injectable } from '@angular/core';
import { Evento } from '../models/evento';

@Injectable({
  providedIn: 'root',
})
export class Eventos {
  eventos: Evento[] = [
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
  obtenerEventos(): Evento[]{
    return this.eventos;
  }
}
