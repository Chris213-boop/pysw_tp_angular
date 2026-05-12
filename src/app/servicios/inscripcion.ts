import { Injectable } from '@angular/core';
import { Inscripcion } from '../models/inscripcion';

@Injectable({
  providedIn: 'root',
})
export class InscripcionService {

  inscripciones: Array<Inscripcion>;

  constructor() {
    this.inscripciones = Array<Inscripcion>();
    this.inscripciones.push(new Inscripcion('123456789', 1000, "Estudiante", '2024-06-01', 'estudiante@example.com', 'Ingles V'));
    this.inscripciones.push(new Inscripcion('987654321', 1500, "Egresado", '2024-06-02', 'egresado@example.com', 'Redes I'));
    this.inscripciones.push(new Inscripcion('456789123', 2000, "Particular", '2024-06-03', 'particular@example.com', 'Programacion I'));
    this.inscripciones.push(new Inscripcion('789123456', 1200, "Estudiante", '2024-06-04', 'patito@example.com', 'Base de Datos I'));
    this.inscripciones.push(new Inscripcion('321654987', 1800, "Egresado", '2024-06-05', 'chiquito@example.com', 'Sistemas Operativos'));
    this.inscripciones.push(new Inscripcion('654987321', 2200, "Particular", '2024-06-06', 'peladito@example.com', 'Diseño Web'));
  }

  agregarInscripcion(inscripcion: Inscripcion) {
    this.inscripciones.push(inscripcion);
  }

  getInscripciones(): Inscripcion[] {
    return this.inscripciones;
  }
}
