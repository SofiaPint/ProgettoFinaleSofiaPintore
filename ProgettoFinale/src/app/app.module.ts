import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProvinceComponent } from './province/province.component';

import { HttpClientModule } from '@angular/common/http';

import { ClientTableComponent } from './client-table/client-table.component';
import { NavbarComponent } from './navbar/navbar.component';
import { InputComponent } from './input/input.component';
import { FormsModule } from '@angular/forms';
import { CarddettagliComponent } from './carddettagli/carddettagli.component';


@NgModule({
  declarations: [
    AppComponent,
    ProvinceComponent,

    ClientTableComponent,
     NavbarComponent,
     InputComponent,
     CarddettagliComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
