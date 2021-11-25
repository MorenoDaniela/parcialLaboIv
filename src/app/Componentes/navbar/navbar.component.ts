import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs/internal/Subject';
import { Usuario } from 'src/app/Clases/usuario';
import { IngresarService } from 'src/app/Servicios/ingresar.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit {
  // @Input() usuario!: Usuario;
  isLogued!:boolean;
  isAdmin:boolean=false;
  isEmpleado:boolean=false;
  email!:string;
  public static updateUserStatus: Subject<boolean> = new Subject();
  // usuario: Usuario = new Usuario();
  constructor(public ingresarService: IngresarService, public router: Router)
   {
    console.log("CONSTR NAV");
    NavbarComponent.updateUserStatus.subscribe(res => {
      this.cambiar();
    })
    }

    ngOnInit(): void {
      console.log("oninit NAV");
     this.cambiar()
    }
    ngOnChanges(changes: SimpleChanges): void {
      console.log("CHANGES NAV");
      NavbarComponent.updateUserStatus.subscribe(res => {
        this.cambiar();
      })
    }  

  logOut()
  {
    this.ingresarService.logout();
    this.salirOtraVez();
    // localStorage.removeItem('usuarioApp');
  }

  salirOtraVez(){
    NavbarComponent.updateUserStatus.subscribe(res => {
      this.cambiar();
    })
    this.isLogued=false;
    this.ingresarService.logout();
  }
  alHome()
  {
    this.router.navigate(['bienvenido']);
  }
  cargarContainer(){
    this.router.navigate(['producto/cargaContainer']);
  }

  altaProducto()
  {
    this.router.navigate(['producto/altaProducto']);
  }
  DetalleProducto()
  {
    this.router.navigate(['producto/productoDetalle']);
  }

  ABMCONTAINER()
  {
    this.router.navigate(['administradores/ABMCONTAINER']);
  }

  registroEmpleado(){
    console.log("registro empleado");
    this.router.navigate(['administradores/registroEmpleado']);
  }

cambiar()
{
  let usuario = this.ingresarService.getItemLocal();
  console.log(usuario);
  if(usuario!=null)
  {
    if(usuario.tipo == "Administrador") {
      this.isAdmin = true;
      this.isEmpleado=false;
      this.isLogued=true;
      
    }

    if(usuario.tipo=="Empleado")
      {
        this.isEmpleado=true;
        this.isAdmin=false;
        this.isLogued=true;
      }
      this.email = usuario.email;
  }else
  {
    this.isLogued=false;
    this.isEmpleado=false;
    this.isAdmin=false;
    this.email="";
  }
}

}
