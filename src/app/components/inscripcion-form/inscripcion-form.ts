import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Inscripcion } from '../../models/inscripcion';

@Component({
  selector: 'app-inscripcion-form',
  imports: [FormsModule, CommonModule],
  templateUrl: './inscripcion-form.html',
  styleUrl: './inscripcion-form.css',
})
export class InscripcionFormComponent {

  formularioEnviado = false;

  total = 0;

  listaInscripciones: Inscripcion[] = [];

  inscripcion: Inscripcion = {
    dni: '',
    precio: null,
    categoriaAlumno: '',
    fechaInscripcion: '',
    email: '',
    curso: ''
  };

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

  registrar(formulario: NgForm): void {

    this.formularioEnviado = true;

    if (formulario.invalid) {
      return;
    }

    const nuevaInscripcion: Inscripcion = {
      ...this.inscripcion,
      total: this.total
    };

    this.listaInscripciones.push(nuevaInscripcion);

    console.log("Inscripción registrada:", nuevaInscripcion);

    formulario.resetForm();

    this.total = 0;

    this.formularioEnviado = false;

  }

}
