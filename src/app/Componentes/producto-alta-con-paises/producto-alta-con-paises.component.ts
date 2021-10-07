import { Component, OnInit } from '@angular/core';
import { Pais } from 'src/app/Clases/pais';
import { Usuario } from 'src/app/Clases/usuario';
import { IngresarService } from 'src/app/Servicios/ingresar.service';

@Component({
  selector: 'app-producto-alta-con-paises',
  templateUrl: './producto-alta-con-paises.component.html',
  styleUrls: ['./producto-alta-con-paises.component.css']
})
export class ProductoAltaConPaisesComponent implements OnInit {
  Usuario: Usuario = new Usuario();
  constructor(public authService: IngresarService) { }

  ngOnInit(): void {
    if (this.authService.getItemLocal()==null)
    {
      this.Usuario.estaLogueado=false;
    }else
    {
      this.Usuario  = this.authService.getItemLocal();
    }
  }

  public paisSeleccionado: Pais = new Pais;

  pasoPaisADetalle(event:any)
  {
    this.paisSeleccionado=event;
  }

}
