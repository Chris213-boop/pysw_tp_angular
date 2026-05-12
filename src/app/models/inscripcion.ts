export interface Inscripcion {
  dni: string;
  precio: number | null;
  categoriaAlumno: number | null;
  fechaInscripcion: string;
  email: string;
  curso: string;
  total?: number;
}
