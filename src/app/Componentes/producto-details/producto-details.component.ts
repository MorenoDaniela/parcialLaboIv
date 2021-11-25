import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/Clases/producto';

@Component({
  selector: 'app-producto-details',
  templateUrl: './producto-details.component.html',
  styleUrls: ['./producto-details.component.css']
})
export class ProductoDetailsComponent implements OnInit {
  public productoSeleccionado: Producto = new Producto();
  constructor() { }

  ngOnInit(): void {
  }

  pasoProductoADetalle(event:any)
  {
    this.productoSeleccionado=event;
  }
}
