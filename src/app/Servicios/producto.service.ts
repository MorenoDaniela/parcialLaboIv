// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class ProductoService {

//   constructor() { }
// }


import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  private productos:string = '/productos';
  ProductosRef: AngularFirestoreCollection<any>;
  constructor(public afAuth: AngularFireAuth, public router: Router, public db:AngularFirestore)
  {
    this.ProductosRef = db.collection(this.productos, ref => ref.orderBy('precio'));
  }
  // this.Usuario.id,this.Usuario.email, codigo, descripcion, precio, stock, pais, comestible
  enviarRespuestas(id: string, email:string, codigo:string, descripcion:string,precio:number,stock:string,pais:string,comestible:string){
    this.ProductosRef.add(
      { id:id,
        codigo:codigo,
        descripcion:descripcion,
        precio:precio,
        stock:stock, 
        pais:pais,
        comestible:comestible,
        fecha:new Date().toLocaleString()});
  }

  UpdateCapacidad(id:string, capacidad:number)
  {
    console.log(id +""+ capacidad);
    this.db.collection("productos").doc(id).update({stock:capacidad});
  }

}