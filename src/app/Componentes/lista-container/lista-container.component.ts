import { Component, EventEmitter, OnInit, Output, SimpleChanges } from '@angular/core';
import { map } from 'rxjs/operators';
import { Container } from 'src/app/Clases/container';
import { Producto } from 'src/app/Clases/producto';
import { ContainerService } from 'src/app/Servicios/container.service';
import { ProductoService } from 'src/app/Servicios/producto.service';

@Component({
  selector: 'app-lista-container',
  templateUrl: './lista-container.component.html',
  styleUrls: ['./lista-container.component.css']
})
export class ListaContainerComponent implements OnInit {
  public containerSeleccionado: Container = new Container;
  public listadoContainers:any=[];
  public listaContainers: any=[];
  @Output() eventoContainerSeleccionado : EventEmitter<Container> = new EventEmitter<Container>();
  constructor(public productoService: ProductoService, public containerService: ContainerService) 
  { 
    console.log("constructor");
  }

  ngOnInit(): void {
    console.log("oninit");
    this.listadoContainers = this.containerService.db.collection('containers', ref => ref.orderBy('codigo'));
    this.listarContainers();
    // this.Containers();
  }
  ngOnDestroy() {
    
}

  ngOnChanges(changes: SimpleChanges): void {
    console.log("onchanges");
   


  //  this.Containers();
  // this.listadoContainers = this.containerService.db.collection('containers', ref => ref.orderBy('codigo'));
  // this.listarContainers();
  // setTimeout(() => this.listadoContainers.unsubscribe(), 1000);
  }

  // Containers()
  // {
  //   console.log("en containers"+this.listaContainers);
  //   let arrayContainers :any= [];
  //   let listadoContainers  = this.containerService.getContainers().subscribe((containers: any) => {
  //     for (let index = 0; index < containers.length; index++) {
  //       let container: Container = containers[index].payload.doc.data();
  //       arrayContainers.push(container);
  //     }
  //     this.listaContainers = arrayContainers;
  //     listadoContainers.unsubscribe();
  //   })
  // }
  listarContainers()
  {
    this.listadoContainers = this.containerService.db.collection('containers', ref => ref.orderBy('codigo'));
   this.listadoContainers.snapshotChanges().pipe(
     map( (data: any) => {
      this.listaContainers = new Array<Container>();
       data.map((producto: any) =>{
        var containerNuevo: Container = new Container();
        containerNuevo.codigo = producto.payload.doc.data().codigo;
        containerNuevo.marca = producto.payload.doc.data().marca;
        containerNuevo.capacidad= producto.payload.doc.data().capacidad;
        containerNuevo.id= producto.payload.doc.id;
        
        console.log(containerNuevo);
          this.listaContainers.push(containerNuevo);       
       })
     })
   ).subscribe();
   console.log("listar"+this.listaContainers);
  //  setTimeout(() => listadoContainers.unsubscribe(), 1000);
  }


  emitirContainer(container:Container)
  {
     this.eventoContainerSeleccionado.emit(container);
  }


  pasoContainerADetalle(event:any)
  {
    this.containerSeleccionado=event;
  }
}
