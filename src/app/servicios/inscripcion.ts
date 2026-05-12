import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export class Inscripcion {
  dni: string;
  precio: number | null;
  categoriaAlumno: string;
  fechaInscripcion: string;
  email: string;
  curso: string;
  total?: number;

  constructor(
    dni: string,
    precio: number | null,
    categoriaAlumno: string,
    fechaInscripcion: string,
    email: string,
    curso: string,
    total?: number
  ) {
    this.dni = dni;
    this.precio = precio;
    this.categoriaAlumno = categoriaAlumno;
    this.fechaInscripcion = fechaInscripcion;
    this.email = email;
    this.curso = curso;
    this.total = total;
  }
}

@Injectable({
  providedIn: 'root',
})
export class InscripcionService {

  private inscripciones: Inscripcion[] = [];
  private inscripcionesSubject = new BehaviorSubject<Inscripcion[]>(this.inscripciones);

  private inscripcionEditando:
    Inscripcion | null = null;

  private indiceEditando:
    number = -1;

  constructor() {
    this.inscripciones = [
      new Inscripcion('123456789', 1000, '1', '2024-06-01', 'estudiante@example.com', 'Ingles V', 650),
      new Inscripcion('987654321', 1500, '2', '2024-06-02', 'egresado@example.com', 'Redes I', 750),
      new Inscripcion('456789123', 2000, '3', '2024-06-03', 'particular@example.com', 'Programacion I', 2000),
      new Inscripcion('789123456', 1200, '1', '2024-06-04', 'patito@example.com', 'Base de Datos I', 780),
      new Inscripcion('321654987', 1800, '2', '2024-06-05', 'chiquito@example.com', 'Sistemas Operativos', 900),
      new Inscripcion('654987321', 2200, '3', '2024-06-06', 'peladito@example.com', 'Diseño Web', 2200),
    ];
    this.inscripcionesSubject.next(this.inscripciones);
  }

  getInscripciones() {
    return this.inscripcionesSubject.asObservable();
  }

  agregarInscripcion(inscripcion: Inscripcion) {
    this.inscripciones.push(inscripcion);
    this.inscripcionesSubject.next(this.inscripciones);
  }

  eliminarInscripcion(index: number) {
    this.inscripciones.splice(index, 1);
    this.inscripcionesSubject.next(this.inscripciones);
  }

  actualizarInscripcion(index: number, inscripcion: Inscripcion) {
    this.inscripciones[index] = inscripcion;
    this.inscripcionesSubject.next(this.inscripciones);
  }

  getResumen() {
    const estudiantes = this.inscripciones.filter(i => i.categoriaAlumno === '1').length;
    const egresados = this.inscripciones.filter(i => i.categoriaAlumno === '2').length;
    const particulares = this.inscripciones.filter(i => i.categoriaAlumno === '3').length;
    const total = this.inscripciones.length;
    return { estudiantes, egresados, particulares, total };
  }

  setInscripcionEditando(
    inscripcion: Inscripcion,
    index: number
  ): void {

    this.inscripcionEditando = {
      ...inscripcion
    };

    this.indiceEditando = index;

  }

  getInscripcionEditando() {

    return {

      inscripcion:
        this.inscripcionEditando,

      index:
        this.indiceEditando

    };

  }

  limpiarEdicion(): void {

    this.inscripcionEditando =
      null;

    this.indiceEditando =
      -1;

  }
}
