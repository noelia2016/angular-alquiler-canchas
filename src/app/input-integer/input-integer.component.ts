import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { Cancha } from '../cancha-list/Cancha';

@Component({
  selector: 'app-input-integer',
  templateUrl: './input-integer.component.html',
  styleUrls: ['./input-integer.component.scss']
})
export class InputIntegerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

@Input()
  	quantity: number;

@Input()
  	max: number;

@Output()
  	quantityChange: EventEmitter<number> = new EventEmitter<number>();

@Output()
	maxReached: EventEmitter<string> = new EventEmitter<string>();

  downQuantity(): void {
    if (this.quantity > 0){
      this.quantity--;
    }
  }

  upQuantity(): void {
    if (this.quantity < this.max){
      this.quantity++;
      this.quantityChange.emit(this.quantity);
    }else{
       this.maxReached.emit("Se alcanzo el maximo");
    }
  }

  /*changeQuantity(event): void {
    console.log(event.key);
    this.quantityChange.emit();
  }*/ 

}
