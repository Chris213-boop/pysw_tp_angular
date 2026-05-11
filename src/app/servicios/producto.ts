import { Injectable } from '@angular/core';
import { Producto } from '../models/producto';

@Injectable({
  providedIn: 'root',
})
export class ProductoService {

  productos: Array<Producto>;

  constructor() {
    this.productos = Array<Producto>();
    this.productos.push(new Producto(1, 'Notebook Asus 13L', '16gb Ram Ddr4,Disco 500GB, RTX 4060ti, 15 pulgadas', 1499.99, 'https://pronotebooks.com.ar/wp-content/uploads/2025/01/vivobook-1.webp', true));
    this.productos.push(new Producto(2, 'Monitor LG 14', '240hz, 1920x1080, HDR10, RGB, Panel IPS, G-SYNC', 450.75, 'https://compucordoba.com.ar/img/Public/1078/49166-producto-monitor-lg-gamer.jpg', true));
    this.productos.push(new Producto(3, 'Teclado Mecánico', 'Switch Cherry MX Red, retroiluminación RGB, ', 120.50, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSK-k3okHLV9R30R97WA9KgO8FQu1dj9JM1ww&s', true));
    this.productos.push(new Producto(4, 'Mouse Logitech G502', 'Sensor óptico de alta precisión, iluminación RGB personalizable, 6 botones programables', 80.00, 'https://mexx-img-2019.s3.amazonaws.com/Mouse-Gamer-Logitech-G502-Lightspeed-Gaming_38348_1.jpeg', true));
    this.productos.push(new Producto(5, 'AURICULAR GAMER LOGITECH G733 BLACK RGB', 'Cancelación activa de ruido, sonido envolvente 7.1, batería de larga duración', 150.00, 'https://mexx-img-2019.s3.amazonaws.com/Auricular-Gamer-Logitech-G733-Lightspeed-Rgb-Inalambrico-Negro_40245_1.jpeg', true));
    this.productos.push(new Producto(6, 'Parlantes Gamer Razer Kraken X', 'Sonido envolvente 7.1, cancelación activa de ruido, batería de larga duración', 200.00, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPmyeWkl-vaV10cL-uATabasQg5rzZd8Mbcg&s', true));
    this.productos.push(new Producto(7, 'Webcam Logitech C920', '1080p Full HD, micrófono integrado, compatibilidad con Zoom y Teams', 99.99, 'https://http2.mlstatic.com/D_NQ_NP_798568-MLA91963266617_092025-O.webp', true));
    this.productos.push(new Producto(8, 'Disco Duro Externo Seagate', '2TB, USB 3.0, diseño compacto y resistente', 89.99, 'https://http2.mlstatic.com/D_NQ_NP_713495-MLA99506779240_112025-O.webp', true));
  }

  addProducto() {
    // Lógica para agregar un producto
  }

  deleteProducto() {
    // Lógica para eliminar un producto
  }

  getProductos() {
    // Lógica para obtener la lista de productos
    return this.productos;
  }
}
