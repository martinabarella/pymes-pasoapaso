import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from '@angular/router';
import {APP_BASE_HREF} from '@angular/common';  

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ArticulosFamiliasComponent } from './articulos-familias/articulos-familias.component';
import { MockArticulosFamiliasService } from './mock-articulos-familias.service';
import { ArticulosFamiliasService } from './articulos-familias.service';
import { MenuComponent } from './menu/menu.component';
import { InicioComponent } from './inicio/inicio.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpClientModule, 
   RouterModule.forRoot([
      { path: '', redirectTo: '/inicio', pathMatch: 'full' },
      { path: 'inicio', component: InicioComponent },
      { path: 'articulosfamilias', component: ArticulosFamiliasComponent }
    ]) ],
  declarations: [ AppComponent, HelloComponent, ArticulosFamiliasComponent, MenuComponent, InicioComponent ],
  bootstrap:    [ AppComponent ],
  providers: [MockArticulosFamiliasService, ArticulosFamiliasService,  { provide: APP_BASE_HREF, useValue: "/" }]
})
export class AppModule { }
