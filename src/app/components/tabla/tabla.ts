import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Inscripcion, InscripcionService } from '../../servicios/inscripcion';

@Component({
  selector: 'app-tabla',
  imports: [CommonModule],
  templateUrl: './tabla.html',
  styleUrl: './tabla.css',
})
export class TablaComponent implements OnInit {

  inscripciones: Inscripcion[] = [];
  resumen = { estudiantes: 0, egresados: 0, particulares: 0, total: 0 };

  constructor(
    private inscripcionService: InscripcionService,
    private router: Router
  ) { }

  ngOnInit() {
    this.inscripcionService.getInscripciones().subscribe(inscripciones => {
      this.inscripciones = inscripciones;
      this.resumen = this.inscripcionService.getResumen();
    });
  }

  eliminar(index: number) {
    this.inscripcionService.eliminarInscripcion(index);
  }

  editar(
    inscripcion: Inscripcion,
    index: number
  ): void {

    this.inscripcionService
      .setInscripcionEditando(

        inscripcion,

        index

      );


    this.router.navigate([
      '/inscripcionForm'
    ]);

  }

  irFormulario() {
    this.router.navigate(['/inscripcionForm']);
  }

}
