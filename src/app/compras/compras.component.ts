import { Component,OnInit } from '@angular/core';
import { ComprasService } from '../compras.service';
import { LenteSol } from '../lentesdesol/LenteSol';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-compras',
  standalone: true,
  imports: [AsyncPipe, CommonModule],
  templateUrl: './compras.component.html',
  styleUrl: './compras.component.scss'
})
export class ComprasComponent {


  comprasList$: Observable<LenteSol[]> | undefined;

  constructor(private compras: ComprasService) {
    this.comprasList$ =
    compras.comprasList.asObservable();
  }

  ngOnInit(): void {
    this.comprasList$ = this.compras.comprasList;
  }
}
