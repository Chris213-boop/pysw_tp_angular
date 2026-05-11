import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Producto } from '../../models/producto';
import { ProductoService } from '../../servicios/producto';

@Component({
  selector: 'app-punto2',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './punto2.html',
  styleUrl: './punto2.css',
})
export class Punto2Component implements OnInit {

  productos: Array<Producto>;
  carrito: any[] = [];

  constructor(private productoService:ProductoService) {
    this.productos = Array<Producto>();
    this.productos = this.productoService.getProductos();
  }

  ngOnInit(): void {
    this.productos = this.productoService.getProductos().filter(p => p.activo);
  }

  agregarAlCarrito(producto: Producto) {
    const itemEnCarrito = this.carrito.find(item => item.id === producto.id); 
    
    if (itemEnCarrito) {
      itemEnCarrito.cantidad++;
    } else {
      this.carrito.push({ ...producto, cantidad: 1 });
    }
  }

  aumentarCantidad(item: any) {
    item.cantidad++;
  }

  disminuirCantidad(item: any) {
    if (item.cantidad > 1) {
      item.cantidad--;
    } else {
      this.carrito = this.carrito.filter(i => i.id !== item.id);
    }
  }

  get totalAbonar(): number {
    let total = 0;
    for (let item of this.carrito) {
      total += (item.precio * item.cantidad);
    }
    return total;
  }

  
  
}
