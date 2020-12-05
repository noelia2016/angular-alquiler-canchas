import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CanchaListComponent } from './cancha-list/cancha-list.component';

import { FormsModule } from '@angular/forms';
import { CanchaContactComponent } from './cancha-contact/cancha-contact.component';
import { ComplejoCanchasComponent } from './complejo-canchas/complejo-canchas.component';
import { CarritoComponent } from './carrito/carrito.component';
import { CanchaAboutComponent } from './cancha-about/cancha-about.component';
import { InputIntegerComponent } from './input-integer/input-integer.component';
import { CanchaCarrritoService } from './cancha-carrrito.service';

@NgModule({
  declarations: [
    AppComponent,
    CanchaListComponent,
    CanchaContactComponent,
    ComplejoCanchasComponent,
    CarritoComponent,
    CanchaAboutComponent,
    InputIntegerComponent,    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [CanchaCarrritoService],
  bootstrap: [AppComponent]
})
export class AppModule {
    
 }
