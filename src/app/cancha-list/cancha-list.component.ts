import { Component, OnInit } from '@angular/core';
import { Cancha } from './cancha';
import { CanchaCarrritoService } from '../cancha-carrrito.service';

@Component({
  selector: 'app-cancha-list',
  templateUrl: './cancha-list.component.html',
  styleUrls: ['./cancha-list.component.scss']
})
export class CanchaListComponent implements OnInit {

  canchas: Cancha [] = [

    {
      "nro": 1,
    	"tipo": "sintetico",
    	"cant_jugadores": 5,
    	"precio": 50,
    	"turnos_disponibles": 5,
      "turnos": 0,
    },

    {
      "nro": 2,
      "tipo": "cesped",
      "cant_jugadores": 11,
      "precio": 350,
      "turnos_disponibles": 1,
      "turnos": 0,
    },

    {
      "nro": 3,
      "tipo": "sintetico",
      "cant_jugadores": 7,
      "precio": 150,
      "turnos_disponibles": 2,
      "turnos": 0,
    }, 

    {
      "nro": 4,
      "tipo": "cesped",
      "cant_jugadores": 8,
      "precio": 250,
      "turnos_disponibles": 5,
      "turnos": 0,
    },

    {
      "nro": 5,
      "tipo": "sintetico",
      "cant_jugadores": 5,
      "precio": 180,
      "turnos_disponibles": 0,
      "turnos": 0,
    },

    {
      "nro": 6,
      "tipo": "sintetico",
      "cant_jugadores": 5,
      "precio": 180,
      "turnos_disponibles": 7,
      "turnos": 0,
    },


  ]

  constructor(private carro: CanchaCarrritoService ) { 
  }

  ngOnInit(): void {
  }

  
  agregarAlCarrito(cancha): void {
    /* lo agrega al carrito */
    this.carro.agregarCancha(cancha);
    /* lo descuenta del stock disponible */
    cancha.turnos_disponibles -= cancha.turnos;
    /* pone en 0 la cantidad solicitada para la nueva compra */
    cancha.turnos = 0;
  }

  maxReached (m: string){
    alert(m);
  }
}
