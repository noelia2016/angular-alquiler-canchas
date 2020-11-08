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
    },

    {
      "nro": 2,
      "tipo": "cesped",
      "cant_jugadores": 11,
      "precio": 350,
      "turnos_disponibles": 1,
    },

    {
      "nro": 3,
      "tipo": "sintetico",
      "cant_jugadores": 7,
      "precio": 150,
      "turnos_disponibles": 2,
    }, 

    {
      "nro": 4,
      "tipo": "cesped",
      "cant_jugadores": 8,
      "precio": 250,
      "turnos_disponibles": 5,
    },

    {
      "nro": 5,
      "tipo": "sintetico",
      "cant_jugadores": 5,
      "precio": 180,
      "turnos_disponibles": 0,
    },

  ]

  constructor() { }

  ngOnInit(): void {
  }

}
