import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ABMContainerComponent } from '../Componentes/abmcontainer/abmcontainer.component';
import { AltaProductoComponent } from '../Componentes/alta-producto/alta-producto.component';
import { PaisesComponent } from '../Componentes/paises/paises.component';
import { ProductoAltaConPaisesComponent } from '../Componentes/producto-alta-con-paises/producto-alta-con-paises.component';
import { ProductoDetailsComponent } from '../Componentes/producto-details/producto-details.component';

const routes: Routes = [
  {path:"altaProducto",component:ProductoAltaConPaisesComponent}
, {path: "productoDetalle", component:ProductoDetailsComponent},

// {path: 'paises', component:PaisesComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductoRoutingModule { }
