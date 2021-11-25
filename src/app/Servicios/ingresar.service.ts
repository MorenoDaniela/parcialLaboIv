import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
// import { AngularFireAuth } from "@angular/fire/auth";
// import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';

import { NavbarComponent } from '../Componentes/navbar/navbar.component';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import * as firebase from 'firebase/compat';
// import * as firebase from 'firebase';
// import { Usuario } from '../Clases/usuario';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { Usuario } from '../Clases/usuario';
import { ToasterService } from './toaster.service';

@Injectable({
  providedIn: 'root'
})
export class IngresarService{

  private usuarios:string = '/usuarios';
  public Usuario: Usuario = new Usuario();

  public User : any;
  UsuariosRef: AngularFirestoreCollection<any>;

  constructor(
      public afAuth: AngularFireAuth,
      public router: Router, // Inject Firebase auth service
      public db:AngularFirestore,
      public toastr: ToasterService
  ) {
      this.UsuariosRef = db.collection(this.usuarios);
  }


  //Auth with emailAndPassword
  loginWithEmailAndPassword(email:string,pass:string, tipoUsuario:string){
      this.afAuth.signInWithEmailAndPassword(email,pass)
          .then((result)=>{    
             
              this.Usuario.id = result.user!.uid;
              this.Usuario.email = email;
              this.Usuario.fecha= new Date().toLocaleString();
              this.Usuario.estaLogueado=true;
              this.Usuario.tipo= tipoUsuario;
             this.setItemLocal();          
              this.UsuariosRef.add(
                {email:email,
                  fechaLogueo:new Date().toLocaleString(),
                  id:result.user!.uid});
                  NavbarComponent.updateUserStatus.next(true);
              // this.Usuario.estaLogueado=true;
              this.toastr.showExito("Logueo exitoso.","Te logueaste", 3000)
              this.router.navigate(['producto/altaProducto']);
          })
          .catch((res)=>{
            console.log(res);
            this.Usuario.estaLogueado=false;
            // this.Usuario.estaLogueado=false;
            this.toastr.showError("No se pudo loguear", "Error", 3000)
              this.router.navigate(['bienvenido']);
          });
  }

  registroWithEmailAndPassword(email:string,pass:string, tipoUsuario:string){
      this.afAuth.createUserWithEmailAndPassword(email,pass)
      .then((result)=>{
          this.toastr.showExito("Cuenta creada Exitosamente.","Registro exitoso", 3000)
          this.loginWithEmailAndPassword(email,pass,tipoUsuario);
      })
      .catch((res)=>{
        console.log(res);
        if (res.code == "auth/email-already-in-use"){
          this.Usuario.estaLogueado=false;
          this.toastr.showError("Usuario ya registrado", "Error", 3000)
          this.router.navigate(['bienvenido']);
        }else{
          this.Usuario.estaLogueado=false;
          this.toastr.showError("No se pudo crear su cuenta", "Error", 3000)
          this.router.navigate(['bienvenido']);
        }

      });

  }

  logout(){
    this.afAuth.signOut().then(()=>{
      this.Usuario.estaLogueado=false;
      this.Usuario.email="";
      this.Usuario.password="";
      this.Usuario.fecha="";
      // this.router.navigate(['ingreso/login']);
    });
    localStorage.removeItem('usuarioApp');
    this.router.navigate(['bienvenido']);

  }


  estaLogueado()
  {
   this.afAuth.onAuthStateChanged(user=> {
      if (user){
        this.User = user;
      }else
      {
        this.User=null;
      }
    });
    return this.User;
  }

  setItemLocal()
  {
    localStorage.setItem('usuarioApp',JSON.stringify(this.Usuario));
  }

  getItemLocal()
  {
    var user = localStorage.getItem('usuarioApp');
    if (user!=null)
    {
      return JSON.parse(user);
    }else{
      return null;
    }

    
  }

}
