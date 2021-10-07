import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BienvenidoComponent } from './Componentes/bienvenido/bienvenido.component';

const routes: Routes = [
  {path: 'bienvenido', component:BienvenidoComponent},
  // {path:'busqueda', component:BusquedaComponent},
  // {path: 'peliculas', loadChildren:()=>import('./peliculas/peliculas.module').then(m => PeliculasModule)},
  // {path: 'actor', loadChildren:()=>import('./actor/actor.module').then(m => ActorModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
