import { Component, OnInit } from '@angular/core';
import { ToasterService } from 'src/app/Servicios/toaster.service';

@Component({
  selector: 'app-bienvenido',
  templateUrl: './bienvenido.component.html',
  styleUrls: ['./bienvenido.component.css']
})
export class BienvenidoComponent implements OnInit {

  constructor(public toastr :ToasterService) { }

  ngOnInit(): void {
  }

  mostrarExito()
  {
    this.toastr.showExito("hola","titulo",300);
  }

  mostrarError()
  {
    this.toastr.showError("hola","titulo",300);
  }
}
