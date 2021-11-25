import { Component, OnInit, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Container } from 'src/app/Clases/container';
import { Producto } from 'src/app/Clases/producto';
import { ContainerService } from 'src/app/Servicios/container.service';
import { IngresarService } from 'src/app/Servicios/ingresar.service';
import { ProductoService } from 'src/app/Servicios/producto.service';
import { ToasterService } from 'src/app/Servicios/toaster.service';

@Component({
  selector: 'app-cargar-container',
  templateUrl: './cargar-container.component.html',
  styleUrls: ['./cargar-container.component.css']
})
export class CargarContainerComponent implements OnInit {
  public productoSeleccionado: Producto = new Producto();
  public containerSeleccionado: Container = new Container;
  formulario!: FormGroup;
  constructor(public authService: IngresarService, public fb: FormBuilder, public productoService: ProductoService, public toastr:ToasterService, public containerService: ContainerService)
   { 
    console.log(this.productoSeleccionado.stock);
    console.log(this.containerSeleccionado.capacidad);
    this.formulario=fb.group({
     
      cantidadAEnviar:["", [Validators.required]],
    })
    this.validar(this.formulario);
   }

  //  , Validators.min(parseInt(this.productoSeleccionado.stock)), Validators.max(parseInt(this.containerSeleccionado.capacidad))

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("on changes");
    // this.formulario.setValidators(Validators.min(parseInt(this.productoSeleccionado.stock)));
    this.validar(this.formulario);
  }


  validar(formulario: FormGroup) {
    console.log("en validar");
    let producto = this.productoSeleccionado;
    let container = this.containerSeleccionado;
    let cantidad = formulario.get('cantidadAEnviar');

    // formulario.get('container')?.valueChanges
    // .subscribe(elcontainer => {
      
    // });
    console.log(producto.codigo);
    if (producto.codigo!=undefined && container.codigo!=undefined)
      {
       cantidad?.setValidators(Validators.min(parseInt(this.productoSeleccionado.stock)));
       cantidad?.setValidators(Validators.max(parseInt(this.containerSeleccionado.capacidad)));
       cantidad?.setValidators(Validators.required);
      }
      // else{
      //   cantidad?.setValidators(Validators.min(1000));
      // }
      // if ()
      // {
       
      // }
      // else{
      //   cantidad?.setValidators(Validators.max(2000));
      // }
      cantidad?.updateValueAndValidity();
  }
  pasoProductoADetalle(event:any)
  {
    this.productoSeleccionado=event;
    this.validar(this.formulario);
  }

  pasoContainerADetalle(event:any)
  {
    this.containerSeleccionado=event;
    this.validar(this.formulario);
  }
  aceptar()
  {
   const cantidadAEnviar = this.formulario.controls['cantidadAEnviar'].value;
   let valorNuevoProducto = parseInt(this.productoSeleccionado.stock) - cantidadAEnviar;
  let valorNuevoContainer = parseInt(this.containerSeleccionado.capacidad) - cantidadAEnviar;
  this.productoService.UpdateCapacidad(this.productoSeleccionado.id,valorNuevoProducto);
  this.containerService.UpdateCapacidad(this.containerSeleccionado.id,valorNuevoContainer,this.productoSeleccionado.codigo,cantidadAEnviar,this.containerSeleccionado.arrayProducto);
  //  this.productoService.enviarRespuestas(this.Usuario.id,this.Usuario.email, codigo, descripcion, precio, stock, pais, comestible);
   this.toastr.showExito("Envio exitoso","Tus respuestas fueron enviadas con exito.",2000);
   this.formulario.controls['cantidadAEnviar'].setValue("");
   this.validar(this.formulario);
 } 

}
