import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BienvenidoComponent } from './Componentes/bienvenido/bienvenido.component';
import { LoginComponent } from './Componentes/login/login.component';
import { ProductoModule } from './producto/producto.module';
import { CanActivateGuard } from './can-activate.guard';
import { RegistroEmpleadoComponent } from './Componentes/registro-empleado/registro-empleado.component';
import { ABMContainerComponent } from './Componentes/abmcontainer/abmcontainer.component';
import { AdministradoresModule } from './administradores/administradores.module';
import { PuedoVerAdminGuard } from './puedo-ver-admin.guard';

const routes: Routes = [
  {path: '', redirectTo:'bienvenido',pathMatch:'full'},
  {path: 'bienvenido', component:BienvenidoComponent},
  {path:'login', component:LoginComponent},
 
  {path: 'administradores', loadChildren:()=>import('./administradores/administradores.module').then(m => AdministradoresModule), canActivate:[PuedoVerAdminGuard]},
  // {path:'busqueda', component:BusquedaComponent},
  {path: 'producto', loadChildren:()=>import('./producto/producto.module').then(m => ProductoModule), canActivate:[CanActivateGuard]},
  // {path: 'actor', loadChildren:()=>import('./actor/actor.module').then(m => ActorModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
