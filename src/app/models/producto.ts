export class Producto {
    id: number;
    nombre: string;
    descripcion: string;
    precio: number;
    img: string;
    activo: boolean;

    constructor(id: number, nombre: string, descripcion: string, precio: number, img: string, activo: boolean) {
        this.id = id;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.precio = precio;
        this.img = img;
        this.activo = activo;
    }
}
