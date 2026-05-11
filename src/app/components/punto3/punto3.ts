import { ChangeDetectorRef, Component } from '@angular/core';
import { Carta } from '../../models/carta';
import {MemoryService} from '../../servicios/memory';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-punto3',
  imports: [CommonModule],
  templateUrl: './punto3.html',
  styleUrl: './punto3.css',
})
export class Punto3Component {

  cartas: Carta[] = [];
  intentos: number = 10;
  juegoIniciado: boolean = false;
  cartasSeleccionadas: Carta[] = [];
  puedeIntentar: boolean = false;


  constructor(private memoryService: MemoryService,
              private cd: ChangeDetectorRef,
  ) {
  }

  iniciarJuego(){
    this.cartas = this.memoryService.crearTablero();
    this.juegoIniciado = true;
    this.intentos = 10;
    this.cartasSeleccionadas = [];
    this.puedeIntentar = false;
  }

  reiniciarJuego(){
    this.cartas = [];
    this.juegoIniciado = false;
    this.intentos = 10;
    this.cartasSeleccionadas = [];
    this.puedeIntentar = false;
  }

  intentar(){
    this.puedeIntentar = true;
  }

  seleccionarCarta(carta: Carta){

    if(!this.puedeIntentar){
      return;
    }

    if(!carta.volteada){

      carta.volteada = true;

      this.cartasSeleccionadas.push(carta);

      if(this.cartasSeleccionadas.length === 2){
        this.puedeIntentar = false;
        this.compararCartas();
      }
    }
  }

compararCartas(){

  const [carta1, carta2] = this.cartasSeleccionadas;

  if(carta1.id === carta2.id){

    carta1.encontrada = true;
    carta2.encontrada = true;

    setTimeout(() => {
      this.cartasSeleccionadas = [];
      this.cd.detectChanges();
      this.verificarFinJuego();
    }, 500);
    this.puedeIntentar = false;

  } 
  else {

    this.intentos--;

    setTimeout(() => {

      carta1.volteada = false;
      carta2.volteada = false;

      this.cartasSeleccionadas = [];
      this.puedeIntentar = false;

      this.cd.detectChanges();

      this.verificarFinJuego();

    }, 1000);

  }

}

verificarFinJuego(){

  const todasEncontradas = this.cartas.every(
    carta => carta.encontrada
  );

  if(todasEncontradas){

    alert('¡Ganaste!');
    setTimeout(() => {
    this.reiniciarJuego();
  }, 0);

  } else if(this.intentos <= 0){

    alert('¡Perdiste!');
    setTimeout(() => {
    this.reiniciarJuego();
  }, 0);

  }

}

}
