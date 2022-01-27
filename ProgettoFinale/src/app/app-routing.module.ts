import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarddettagliComponent } from './carddettagli/carddettagli.component';
import { ClientTableComponent } from './client-table/client-table.component';

import { InputComponent } from './input/input.component';




const routes: Routes = [
  { path: 'clienti', component: ClientTableComponent },
  { path: 'clienti/:id', component: CarddettagliComponent },
  { path: 'form', component: InputComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
