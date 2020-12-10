import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Cancha } from './cancha-list/cancha';

@Injectable({
  providedIn: 'root'
})
export class CanchaCarrritoService {
	
	/* variable a observar en privada */
	private _cartList: Cancha[] = [];

	/* subscribimos a Behavior la varible que queremos observar */
	cartList: BehaviorSubject<Cancha[]> = new BehaviorSubject(this._cartList);

	constructor() { }

	agregarCancha(cancha: Cancha) {

		/* quiero saber si ya lo tenga agregada */
		let item: Cancha = this._cartList.find((v1) => v1.nro == cancha.nro);
	    if(!item) {
	     /* si no tengo la cancha en el carrito lo agrego */
	      this._cartList.push(cancha);
	    }else{
	      item.turnos += cancha.turnos;
	    }

		/* emito mi clave privada para notificar los cambios - notifico que hubo un cambio */
		this.cartList.next(this._cartList);
	}
}
