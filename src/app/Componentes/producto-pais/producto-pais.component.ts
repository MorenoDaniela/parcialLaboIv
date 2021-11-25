import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { Pais } from 'src/app/Clases/pais';
import { Producto } from 'src/app/Clases/producto';
import { PaisesService } from 'src/app/Servicios/paises.service';

@Component({
  selector: 'app-producto-pais',
  templateUrl: './producto-pais.component.html',
  styleUrls: ['./producto-pais.component.css']
})
export class ProductoPaisComponent implements OnInit {
  @Input()
  productoAMostrar: Producto = new Producto();
  public pais:any;
  public unPais: any;
  constructor(public paisesService: PaisesService) 
  {
    
  }

  ngOnInit(): void {
   
  }

  ngOnChanges(changes: SimpleChanges): void {
  
    let pro = this.productoAMostrar;
    console.log(pro.codigo+" en aca");
    if (pro.pais != undefined){
      // setTimeout(() => this.cargarPais(), 2000);
      this.cargarPais();
    }
    
  }

  ngAfterViewInit(){
    
  }

  cargarPais()
  {
    console.log('onchange');
    this.pais = this.paisesService.getPaisByName(this.productoAMostrar.pais);
      this.pais.subscribe(
        (data:any) => {
          const otroPais = data[0];
          // console.log(otroPais);
          
          this.unPais = new Pais();
          this.unPais.foto = otroPais.flags.png;
          this.unPais.nombre= otroPais.name.common;
          console.log(this.unPais);
          }
       
        
      );
  }
}
