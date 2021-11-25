import { Component, Input, OnInit } from '@angular/core';
import { Producto } from 'src/app/Clases/producto';

@Component({
  selector: 'app-producto-detalle',
  templateUrl: './producto-detalle.component.html',
  styleUrls: ['./producto-detalle.component.css']
})
export class ProductoDetalleComponent implements OnInit {
  @Input()
  productoAMostrar: Producto = new Producto();
  constructor() { }

  ngOnInit(): void {
  }
 

}
