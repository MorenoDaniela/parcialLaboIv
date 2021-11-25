
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Container } from 'src/app/Clases/container';
import { ContainerService } from 'src/app/Servicios/container.service';
import { IngresarService } from 'src/app/Servicios/ingresar.service';
import { ProductoService } from 'src/app/Servicios/producto.service';
import { ToasterService } from 'src/app/Servicios/toaster.service';

@Component({
  selector: 'app-alta-container',
  templateUrl: './alta-container.component.html',
  styleUrls: ['./alta-container.component.css']
})
export class AltaContainerComponent implements OnInit {
  @Output() eventoContainerSeleccionado : EventEmitter<Container> = new EventEmitter<Container>();
  formulario: FormGroup;
  constructor(public authService: IngresarService, public fb: FormBuilder, public containerService: ContainerService, public toastr:ToasterService)
  { 
    this.formulario=fb.group({
      codigo:["", Validators.required],
      marca:["", Validators.required],
      capacidad:["", [Validators.required, Validators.min(1), Validators.max(100)]],
    })
  }

  ngOnInit(): void {
  }

  aceptar()
  {
    const codigo = this.formulario.controls['codigo'].value;
    const marca = this.formulario.controls['marca'].value;
    const capacidad = this.formulario.controls['capacidad'].value;
    let newContainer : Container = new Container();
    newContainer.id="";
    newContainer.codigo=codigo;
    newContainer.capacidad=capacidad;
    newContainer.marca=marca;
    this.emitirContainer(newContainer);
    this.containerService.enviarRespuestas("",codigo,marca,capacidad);
    this.toastr.showExito("Envio exitoso","Tus respuestas fueron enviadas con exito.",2000);
    this.vaciar();
  }

  vaciar(){
    this.formulario.controls['codigo'].setValue("");
    this.formulario.controls['marca'].setValue("");
    this.formulario.controls['capacidad'].setValue(0);
  }

  emitirContainer(container:Container)
  {
     this.eventoContainerSeleccionado.emit(container);
  }
 

}
