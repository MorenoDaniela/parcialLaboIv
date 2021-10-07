import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/Clases/usuario';
import { IngresarService } from 'src/app/Servicios/ingresar.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit {
  @Input() usuario!: Usuario;
  // usuario: Usuario = new Usuario();
  constructor(public authService: IngresarService, public router: Router)
   { }

  ngOnInit(): void {

  }

  logOut()
  {
    this.authService.logout();
    // localStorage.removeItem('usuarioApp');
  }

  alHome()
  {
    this.router.navigate(['bienvenido']);
  }


  altaProducto()
  {
    this.router.navigate(['producto/altaProducto']);
  }

}
