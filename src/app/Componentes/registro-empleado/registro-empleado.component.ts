import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/Clases/usuario';
import { IngresarService } from 'src/app/Servicios/ingresar.service';

@Component({
  selector: 'app-registro-empleado',
  templateUrl: './registro-empleado.component.html',
  styleUrls: ['./registro-empleado.component.css']
})
export class RegistroEmpleadoComponent implements OnInit {
  Usuario : Usuario= new Usuario();
  constructor(public ingresarService: IngresarService) { }

  ngOnInit(): void {
  }

  Registrar(){
    this.ingresarService.registroWithEmailAndPassword(this.Usuario.email,this.Usuario.password,"Empleado");
  }

}
