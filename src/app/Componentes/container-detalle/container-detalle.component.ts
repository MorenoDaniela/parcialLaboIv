import { Component, Input, OnInit } from '@angular/core';
import { Container } from 'src/app/Clases/container';

@Component({
  selector: 'app-container-detalle',
  templateUrl: './container-detalle.component.html',
  styleUrls: ['./container-detalle.component.css']
})
export class ContainerDetalleComponent implements OnInit {
  @Input()
  containerAMostrar: Container = new Container();
  constructor() { }

  ngOnInit(): void {
  }

}
