import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CanchaListComponent } from './cancha-list/cancha-list.component';
import { CanchaAboutComponent } from './cancha-about/cancha-about.component';
import { CarritoComponent } from './carrito/carrito.component';
import { CanchaContactComponent } from './cancha-contact/cancha-contact.component';
import { ComplejoCanchasComponent } from './complejo-canchas/complejo-canchas.component';

const routes: Routes = [
	{ path: '',redirectTo: 'canchas', pathMatch: 'full' },
	{ path: 'canchas', component: ComplejoCanchasComponent },
 	{ path: 'about', component: CanchaAboutComponent },
 	{ path: 'contacto', component: CanchaContactComponent },
 	{ path: 'carrito', component: CarritoComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
