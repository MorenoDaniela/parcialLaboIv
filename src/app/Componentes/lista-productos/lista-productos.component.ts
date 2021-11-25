import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Producto } from 'src/app/Clases/producto';
import { ProductoService } from 'src/app/Servicios/producto.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-lista-productos',
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.css']
})
export class ListaProductosComponent implements OnInit {
  public listadoProductos:any=[];
  public listaProductos: any=[];
  @Output() eventoProductoSeleccionado : EventEmitter<Producto> = new EventEmitter<Producto>();
  constructor(public productoService: ProductoService) { }

  ngOnInit(): void {
    this.listadoProductos = this.productoService.db.collection('productos', ref => ref.orderBy('fecha'));
    this.listarProductos();
  }

  listarProductos()
  {
    this.listaProductos = new Array<Producto>();
   this.listadoProductos.snapshotChanges().pipe(
     map( (data: any) => {
       
       data.map((producto: any) =>{
        var productoNuevo: Producto = new Producto();
        productoNuevo.codigo = producto.payload.doc.data().codigo;
        productoNuevo.comestible = producto.payload.doc.data().comestible;
        productoNuevo.descripcion= producto.payload.doc.data().descripcion;
        productoNuevo.pais= producto.payload.doc.data().pais;
        productoNuevo.precio = producto.payload.doc.data().precio;
        productoNuevo.stock = producto.payload.doc.data().stock;
        productoNuevo.fecha = producto.payload.doc.data().fecha;
        console.log(productoNuevo);
          this.listaProductos.push(productoNuevo);       
       })
     })
   ).subscribe((datos: any) => {
   });
  }

  emitirProducto(producto:Producto)
  {
     this.eventoProductoSeleccionado.emit(producto);
  }
 
}
