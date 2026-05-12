import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Inscripcion, InscripcionService } from '../../servicios/inscripcion';
import { Router } from '@angular/router';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-inscripcion-form',
  imports: [FormsModule, CommonModule],
  templateUrl: './inscripcion-form.html',
  styleUrl: './inscripcion-form.css',
})
export class InscripcionFormComponent implements OnInit {

  formularioEnviado = false;

  total = 0;

  modoEdicion = false;

  indiceEdicion = -1;

  inscripcion: Inscripcion = {
    dni: '',
    precio: null,
    categoriaAlumno: '',
    fechaInscripcion: '',
    email: '',
    curso: ''
  };

  constructor(private inscripcionService: InscripcionService, private router: Router) { }


  calcularTotal(): void {
    const precio = this.inscripcion.precio;
    const categoria = Number(this.inscripcion.categoriaAlumno);

    if (!precio || !categoria) {
      this.total = 0;
      return;
    }

    switch (categoria) {

      case 1:
        this.total = precio - (precio * 0.35);
        break;

      case 2:
        this.total = precio - (precio * 0.50);
        break;

      case 3:
        this.total = precio;
        break;

      default:
        this.total = 0;

    }

  }

  registrar(
    formulario: NgForm
  ): void {

    this.formularioEnviado =
      true;


    if (
      formulario.invalid
    ) {

      return;

    }


    const data = {

      ...this.inscripcion,

      total: this.total

    };


    if (
      this.modoEdicion
    ) {

      this.inscripcionService
        .actualizarInscripcion(

          this.indiceEdicion,

          data

        );


      this.inscripcionService
        .limpiarEdicion();

    }

    else {

      this.inscripcionService
        .agregarInscripcion(
          data
        );

    }


    this.router.navigate([
      '/tabla'
    ]);

  }

  ngOnInit(): void {

    const data =

      this.inscripcionService
        .getInscripcionEditando();


    if (
      data.inscripcion
    ) {

      this.inscripcion = {

        ...data.inscripcion

      };


      this.indiceEdicion =
        data.index;


      this.modoEdicion =
        true;


      this.calcularTotal();

    }

  }
}
