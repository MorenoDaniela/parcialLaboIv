import { Component, Input, OnInit } from '@angular/core';
import { Container } from 'src/app/Clases/container';
import { ContainerService } from 'src/app/Servicios/container.service';

@Component({
  selector: 'app-modificacion-container',
  templateUrl: './modificacion-container.component.html',
  styleUrls: ['./modificacion-container.component.css']
})
export class ModificacionContainerComponent implements OnInit {
  @Input()
  containerAMostrar: Container = new Container;
  public marcaNueva!: string;
  public capacidadNueva!:string;
  constructor(public ContainerService: ContainerService) { }

  ngOnInit(): void {
  }

  modificar(){
    this.ContainerService.Update(this.containerAMostrar.id,this.marcaNueva,this.capacidadNueva);
   this.marcaNueva="";
   this.capacidadNueva="";
  }

}
