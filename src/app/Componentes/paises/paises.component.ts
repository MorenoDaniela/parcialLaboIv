// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-paises',
//   templateUrl: './paises.component.html',
//   styleUrls: ['./paises.component.css']
// })
// export class PaisesComponent implements OnInit {

//   constructor() { }

//   ngOnInit(): void {
//   }

// }


import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Pais } from 'src/app/Clases/pais';
import { PaisesService } from 'src/app/Servicios/paises.service';



@Component({
  selector: 'app-paises',
  templateUrl: './paises.component.html',
  styleUrls: ['./paises.component.css']
})
export class PaisesComponent implements OnInit {

  public arrayPaises :Array<any> = [];
  public paisSeleccionado:Pais= new Pais();
  @Output()  eventoPaisSeleccionado : EventEmitter<Pais> = new EventEmitter<Pais>();
  constructor(public paisesService: PaisesService) { }

  ngOnInit(): void {
    this.cargarPaises();
  }

  cargarPaises()
  {
    this.arrayPaises=[];
    this.paisesService.getPaises().subscribe(
      (data:any) => {
        for (let index = 0; index < data.length; index++) {
          const unPais = data[index];
          let nombre = unPais.name.common;
          let foto = unPais.flags.png;
          let paisNuevo: Pais = {
            nombre:nombre,
            foto:foto
          }
          this.arrayPaises.push(paisNuevo);
        }
       this.arrayPaises= this.arrayPaises.slice(0,5);
      }
    );

  }

  emitirPais(pais:Pais)
 {
    this.eventoPaisSeleccionado.emit(pais);
 }
}
