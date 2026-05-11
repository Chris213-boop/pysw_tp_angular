export class Inscripcion {
    dni: string;
    precio: number | null;
    categoriaAlumno: string;
    fechaInscripcion: string;
    email: string;
    curso: string;
    total?: number;

    constructor(dni: string, precio: number | null, categoriaAlumno: string, fechaInscripcion: string, email: string, curso: string) {
        this.dni = dni;
        this.precio = precio;
        this.categoriaAlumno = categoriaAlumno;
        this.fechaInscripcion = fechaInscripcion;
        this.email = email;
        this.curso = curso;
    }

}
