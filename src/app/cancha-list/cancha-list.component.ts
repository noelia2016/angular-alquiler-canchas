import { Component, OnInit } from '@angular/core';
import { Cancha } from './cancha';

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

  constructor() { }

  ngOnInit(): void {
    
  }

  downTurnos(cancha: Cancha): void {
    if (cancha.turnos > 0)
      cancha.turnos--;
  }

  upTurnos(cancha: Cancha): void {
    if (cancha.turnos < cancha.turnos_disponibles)
      cancha.turnos++;
  }

}
