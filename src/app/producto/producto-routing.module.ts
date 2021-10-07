import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AltaProductoComponent } from '../Componentes/alta-producto/alta-producto.component';
import { PaisesComponent } from '../Componentes/paises/paises.component';
import { ProductoAltaConPaisesComponent } from '../Componentes/producto-alta-con-paises/producto-alta-con-paises.component';

const routes: Routes = [
  {path:"altaProducto",component:ProductoAltaConPaisesComponent}
//, {path: 'alta', component:AltaProductoComponent},
// {path: 'paises', component:PaisesComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductoRoutingModule { }
