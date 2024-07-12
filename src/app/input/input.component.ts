import { Component, Input, Output } from '@angular/core';
import { LentesdesolComponent } from '../lentesdesol/lentesdesol.component';
import { FormsModule } from '@angular/forms';
import { EventEmitter } from '@angular/core';


@Component({
  selector: 'app-input',
  standalone: true,
  imports: [LentesdesolComponent, FormsModule, FormsModule],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss'
})
export class InputComponent {

constructor () {}


  @Input()
  cantidad: number =0;


  @Input()
  max: number=0;

@Output()
cantidadChange: EventEmitter<number>= new EventEmitter<number>();

@Output()
maxReached: EventEmitter<number>= new EventEmitter<number>();

  aumentarCant(): void {
    if(this.cantidad < this.max){
    this.cantidad++;
    this.cantidadChange.emit (this.cantidad);
    }
    else {
      this.maxReached.emit (this.max);
    }
   
   }

   disminuirCant(): void {
    if(this.cantidad > 0)
    this.cantidad--;
    this.cantidadChange.emit (this.cantidad);
    
   }

   
  }
  

