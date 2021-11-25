import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';

import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { BienvenidoComponent } from './Componentes/bienvenido/bienvenido.component';
import { LoginComponent } from './Componentes/login/login.component';
import { AltaProductoComponent } from './Componentes/alta-producto/alta-producto.component';
import { PaisesComponent } from './Componentes/paises/paises.component';
import { ProductoAltaConPaisesComponent } from './Componentes/producto-alta-con-paises/producto-alta-con-paises.component';
import { NavbarComponent } from './Componentes/navbar/navbar.component';
import { ProductoDetailsComponent } from './Componentes/producto-details/producto-details.component';
import { ListaProductosComponent } from './Componentes/lista-productos/lista-productos.component';
import { ProductoDetalleComponent } from './Componentes/producto-detalle/producto-detalle.component';
import { ProductoPaisComponent } from './Componentes/producto-pais/producto-pais.component';
import { ABMContainerComponent } from './Componentes/abmcontainer/abmcontainer.component';
import { AltaContainerComponent } from './Componentes/alta-container/alta-container.component';
import { BajaContainerComponent } from './Componentes/baja-container/baja-container.component';
import { ModificacionContainerComponent } from './Componentes/modificacion-container/modificacion-container.component';
import { ListaContainerComponent } from './Componentes/lista-container/lista-container.component';
import { RegistroAdministradorComponent } from './Componentes/registro-administrador/registro-administrador.component';
import { RegistroEmpleadoComponent } from './Componentes/registro-empleado/registro-empleado.component';
import { CargarContainerComponent } from './Componentes/cargar-container/cargar-container.component';
import { ContainerDetalleComponent } from './Componentes/container-detalle/container-detalle.component';
@NgModule({
  declarations: [
    AppComponent,
    BienvenidoComponent,
    LoginComponent,
    AltaProductoComponent,
    PaisesComponent,
    ProductoAltaConPaisesComponent,
    NavbarComponent,
    ProductoDetailsComponent,
    ListaProductosComponent,
    ProductoDetalleComponent,
    ProductoPaisComponent,
    ABMContainerComponent,
    AltaContainerComponent,
    BajaContainerComponent,
    ModificacionContainerComponent,
    ListaContainerComponent,
    RegistroAdministradorComponent,
    RegistroEmpleadoComponent,
    CargarContainerComponent,
    ContainerDetalleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
