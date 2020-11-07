import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cancha-list',
  templateUrl: './cancha-list.component.html',
  styleUrls: ['./cancha-list.component.scss']
})
export class CanchaListComponent implements OnInit {

  cancha = {
    "nro": 1,
	"tipo": "sintetico",
	"cant_jugadores": 5,
	"precio": 50,
	"turnos_disponibles": 5
  }

  constructor() { }

  ngOnInit(): void {
  }

}
