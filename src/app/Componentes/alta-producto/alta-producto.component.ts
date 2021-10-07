// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-alta-producto',
//   templateUrl: './alta-producto.component.html',
//   styleUrls: ['./alta-producto.component.css']
// })
// export class AltaProductoComponent implements OnInit {

//   constructor() { }

//   ngOnInit(): void {
//   }

// }


import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Pais } from 'src/app/Clases/pais';
import { Usuario } from 'src/app/Clases/usuario';
// import { EncuestaService } from 'src/app/Servicios/encuesta.service';
import { IngresarService } from 'src/app/Servicios/ingresar.service';
import { ProductoService } from 'src/app/Servicios/producto.service';
import { ToasterService } from 'src/app/Servicios/toaster.service';

@Component({
  selector: 'app-alta-producto',
  templateUrl: './alta-producto.component.html',
  styleUrls: ['./alta-producto.component.css']
})
export class AltaProductoComponent implements OnInit, OnChanges {
  Usuario: Usuario = new Usuario();
  formulario: FormGroup;
  @Input()
  paisAMostrar: Pais = new Pais;
  constructor(public authService: IngresarService, public fb: FormBuilder, public productoService: ProductoService, public toastr:ToasterService) 
  { 
    this.formulario=fb.group({
      codigo:["", Validators.required],
      descripcion:["", Validators.required],
      precio:["", [Validators.required, Validators.min(1), Validators.max(100)]],
      stock:["", Validators.required],//this.validarLargo, this.validarTelefono]
      pais:["", Validators.required],
      comestible:["", Validators.required],
    })
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.paisAMostrar.nombre!="")
    {
      this.cargarPais();
    }
    
  }

  cargarPais()
  {
    this.formulario.controls['pais'].setValue( this.paisAMostrar.nombre);
  }

  ngOnInit(): void {
    if (this.authService.getItemLocal()==null)
    {
      this.Usuario.estaLogueado=false;
    }else
    {
      this.Usuario  = this.authService.getItemLocal();
    }
  }

  // //código!: string;
  // descripción!: string;
  // precio!: string;
  // stock!: string;
  // pais!: string;
  // comestible: boolean = false;
  aceptar()
 {
  //  console.log(this.formulario);
   const codigo = this.formulario.controls['codigo'].value;
   const descripcion = this.formulario.controls['descripcion'].value;
   const precio = this.formulario.controls['precio'].value;
   const stock = this.formulario.controls['stock'].value;
   const pais = this.formulario.controls['pais'].value;
   const comestible = this.formulario.controls['comestible'].value;
  //  console.log("nombre "+nombre+" apellido "+apellido+" edad "+edad+" telefono "+telefono+ " juegos " +juegos+ " gusto "+gusto+ " opinion "+opinion);
   this.productoService.enviarRespuestas(this.Usuario.id,this.Usuario.email, codigo, descripcion, precio, stock, pais, comestible);
   this.toastr.showExito("Envio exitoso","Tus respuestas fueron enviadas con exito.",2000);
 } 

//  validarTelefono(control: AbstractControl)
//  {
//    const telefono = control.value;
//    const estaMal = parseInt(telefono);
//    console.log(estaMal);
//    if (!estaMal)
//    {
//      return {estaMal:true};
//    }
//    return null;
//  }

// validarLargo(control:AbstractControl)
// {
//   const telefono = control.value;
//   const maximoPermitido = telefono.length;
//   if (maximoPermitido>10)
//   {
//     return {maximo:true}
//   }
//   return null;
// }

}
