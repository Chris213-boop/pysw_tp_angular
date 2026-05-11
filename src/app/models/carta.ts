export class Carta {
    id: string;
    imagen: string;
    volteada: boolean;
    encontrada: boolean;

    constructor(id: string, imagen: string) {
        this.id = id;
        this.imagen = imagen;
        this.volteada = false;
        this.encontrada = false;
    }
}
