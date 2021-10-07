import { Component, OnInit } from '@angular/core';
import { Pais } from 'src/app/Clases/pais';

@Component({
  selector: 'app-producto-alta-con-paises',
  templateUrl: './producto-alta-con-paises.component.html',
  styleUrls: ['./producto-alta-con-paises.component.css']
})
export class ProductoAltaConPaisesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public paisSeleccionado: Pais = new Pais;

  pasoPaisADetalle(event:any)
  {
    this.paisSeleccionado=event;
  }

}
