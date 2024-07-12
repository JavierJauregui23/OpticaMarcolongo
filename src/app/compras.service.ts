import { Injectable } from '@angular/core';
import { LenteSol } from './lentesdesol/LenteSol';
import { BehaviorSubject } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class ComprasService {


  private _comprasList : LenteSol [] = [];
  comprasList: BehaviorSubject<LenteSol []> = new BehaviorSubject<LenteSol[]> ([]);
 
    constructor() { }

  agregarCompra(lente: LenteSol) {
    let item: LenteSol | undefined = this._comprasList.find((v1) => v1.modelo === lente.modelo);
    if (!item) {
      this._comprasList.push({ ...lente });
    } else {
      item.cantidad += lente.cantidad;
    }
    this.comprasList.next(this._comprasList);
  }

}
 

