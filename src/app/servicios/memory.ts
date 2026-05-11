import { Injectable } from '@angular/core';
import { Carta } from '../models/carta';

@Injectable({
  providedIn: 'root',
})
export class MemoryService {
  cartas: Array<Carta>;

  constructor() {
    this.cartas = Array<Carta>();
    this.cartas.push(new Carta("1", "https://comodibujar.club/wp-content/uploads/2019/04/leon-kawaii-300x300.jpg"));
    this.cartas.push(new Carta("2", "https://cdn.pixabay.com/photo/2022/03/09/14/11/cat-7057971_640.png"));
    this.cartas.push(new Carta("3", "https://img.freepik.com/fotos-premium/jirafa-dibujos-animados-nariz-marron-manchas-marrones-ai-generativo_974533-17181.jpg"));
    this.cartas.push(new Carta("4", "https://i.pinimg.com/474x/f0/0a/7f/f00a7f2e50e62e58e3630d6ca04ab5b7.jpg"));
    this.cartas.push(new Carta("5", "https://i.pinimg.com/474x/84/5c/8a/845c8a860e3c970e4dd472186018ef07.jpg"));
    this.cartas.push(new Carta("6", "https://thumbs.dreamstime.com/b/adorable-foca-beb%C3%A9-de-dibujos-animados-359649415.jpg"));
  }

  crearTablero(){

    const parejas = Array<Carta>();

    for(const carta of this.cartas){

      parejas.push(
        new Carta(carta.id, carta.imagen)
      );

      parejas.push(
        new Carta(carta.id, carta.imagen)
      );

    }

    parejas.sort(
      () => Math.random() - 0.5
    );

    return parejas;

  }


}
