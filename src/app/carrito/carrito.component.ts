import { Component, OnInit } from '@angular/core';
import { Cancha } from '../cancha-list/cancha';
import { CanchaCarrritoService } from '../cancha-carrrito.service';
import { BehaviorSubject, Observable } from 'rxjs';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.scss']
})
export class CarritoComponent implements OnInit {

  cartList$: Observable<Cancha[]>;

  constructor(private carro: CanchaCarrritoService) {
  	/* me subscribo */
  	carro.cartList.subscribe = ( c => this.cartList$ = c );
  }

  ngOnInit(): void {
  }

}
