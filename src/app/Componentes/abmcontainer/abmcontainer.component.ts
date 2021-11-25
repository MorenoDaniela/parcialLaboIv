
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { map } from 'rxjs/operators';
import { Container } from 'src/app/Clases/container';
import { Producto } from 'src/app/Clases/producto';
import { ContainerService } from 'src/app/Servicios/container.service';
import { ProductoService } from 'src/app/Servicios/producto.service';

@Component({
  selector: 'app-abmcontainer',
  templateUrl: './abmcontainer.component.html',
  styleUrls: ['./abmcontainer.component.css']
})
export class ABMContainerComponent implements OnInit {
  public containerSeleccionado: Container = new Container;
  public listadoContainers:any=[];
  public listaContainers: any=[];
  @Output() eventoProductoSeleccionado : EventEmitter<Producto> = new EventEmitter<Producto>();
  constructor(public productoService: ProductoService, public containerService: ContainerService) { }

  ngOnInit(): void {
    // this.listadoContainers = this.productoService.db.collection('containers', ref => ref.orderBy('codigo'));
    // this.listarContainers();
  }


  // listarContainers()
  // {
  //   this.listaContainers = new Array<Container>();
  //  this.listadoContainers.snapshotChanges().pipe(
  //    map( (data: any) => {
       
  //      data.map((producto: any) =>{
  //       var containerNuevo: Container = new Container();
  //       containerNuevo.codigo = producto.payload.doc.data().codigo;
  //       containerNuevo.marca = producto.payload.doc.data().marca;
  //       containerNuevo.capacidad= producto.payload.doc.data().capacidad;
  //       containerNuevo.id= producto.payload.doc.id;
        
  //       console.log(containerNuevo);
  //         this.listaContainers.push(containerNuevo);       
  //      })
  //    })
  //  ).subscribe((datos: any) => {
  //  });
  // }
  // emitirProducto(producto:Producto)
  // {
  //    this.eventoProductoSeleccionado.emit(producto);
  // }

  pasoContainerADetalle(event:any)
  {
    this.containerSeleccionado=event;
  }

}
