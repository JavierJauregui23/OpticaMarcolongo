import { Component } from '@angular/core';
import {LenteSol } from './LenteSol';
import { FormsModule } from '@angular/forms';
import { InputComponent } from '../input/input.component';
import { ComprasService } from '../compras.service';
import { ComprasComponent } from '../compras/compras.component';
import { LentesDataService } from '../lentes-data.service';


@Component({
  selector: 'app-lentesdesol',
  standalone: true,
  imports: [
    FormsModule,
    InputComponent,
    ComprasComponent,
    
  ],

  templateUrl: './lentesdesol.component.html',
  styleUrl: './lentesdesol.component.scss',
  
})


export class LentesdesolComponent {
  [x: string]: any;

  lentessol : LenteSol [] = []




constructor (
  private compras: ComprasService,
  private lentesDataService: LentesDataService){

}

ngOnInit(): void {
  this.lentesDataService.getAll()
  .subscribe(lentessol => this.lentessol = lentessol);
}

agregarCompra(lente: LenteSol) : void{
  this.compras.agregarCompra(lente);
  lente.stock-= lente.cantidad;
  lente.cantidad=0;

}
}