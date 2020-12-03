import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CanchaListComponent } from './cancha-list/cancha-list.component';
import { CanchaAboutComponent } from './cancha-about/cancha-about.component';
import { CarritoComponent } from './carrito/carrito.component';
import { CanchaContactComponent } from './cancha-contact/cancha-contact.component';


const routes: Routes = [
	{ path: '',redirectTo: 'canchas',pathMatch: 'full' },
	{ path: 'canchas', component: CanchaListComponent },
 	{ path: 'about', component: CanchaAboutComponent },
 	{ path: 'carrito', component: CarritoComponent },
 	{ path: 'contacto', component: CanchaContactComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
