import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ContainerService {
  public UID!: string;
  private containers:string = '/containers';
  ContainersRef: AngularFirestoreCollection<any>;
  constructor(public afAuth: AngularFireAuth, public router: Router, public db:AngularFirestore)
  {
    this.ContainersRef = db.collection(this.containers, ref => ref.orderBy('codigo'));
  }

  async enviarRespuestas(ID:string,codigo:string, marca:string,capacidad:number){
    const { id } = await this.ContainersRef.add(
      { id:ID,
        codigo:codigo,
        marca:marca,
        capacidad:capacidad});

        this.UpdateID(id);
        this.UID=id;
  }
  
  getContainers() {
    return this.db.collection("containers").snapshotChanges();
  }

  Update(id:string, marca:string, capacidad:string)
  {
    console.log(id +""+ marca);
    this.db.collection("containers").doc(id).update({marca:marca, capacidad:capacidad});
  }

  UpdateID(id:string)
  {
    console.log(id +"_");
    this.db.collection("containers").doc(id).update({id:id});
  }

  Delete(id:string){
    this.db.collection("containers").doc(id).delete();
  }
}
