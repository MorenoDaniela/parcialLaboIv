import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ABMContainerComponent } from '../Componentes/abmcontainer/abmcontainer.component';
import { RegistroEmpleadoComponent } from '../Componentes/registro-empleado/registro-empleado.component';

const routes: Routes = [
  {path: "ABMCONTAINER", component:ABMContainerComponent},
  {path: 'registroEmpleado',component:RegistroEmpleadoComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministradoresRoutingModule { }
