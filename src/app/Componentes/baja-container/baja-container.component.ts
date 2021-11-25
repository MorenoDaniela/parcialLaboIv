import { Component, Input, OnInit } from '@angular/core';
import { Container } from 'src/app/Clases/container';
import { ContainerService } from 'src/app/Servicios/container.service';

@Component({
  selector: 'app-baja-container',
  templateUrl: './baja-container.component.html',
  styleUrls: ['./baja-container.component.css']
})
export class BajaContainerComponent implements OnInit {
  @Input()
  containerAMostrar: Container = new Container;
  constructor(public containerService:ContainerService) { }

  ngOnInit(): void {
  }

  eliminar(){
    this.containerService.Delete(this.containerAMostrar.id);
    this.containerAMostrar.capacidad="";
    this.containerAMostrar.codigo="";
    this.containerAMostrar.id="";
    this.containerAMostrar.marca="";
  }
}
