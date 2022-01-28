
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Cliente } from '../classes/cliente';
import { IndirizzoSedeLegale } from '../classes/indirizzo-sede-legale';
import { IndirizzoSedeOperativa } from '../classes/indirizzo-sede-operativa';

import { ClientiService } from '../services/clienti.service';

@Component({
  selector: 'app-carddettagli',
  templateUrl: './carddettagli.component.html',
  styleUrls: ['./carddettagli.component.css']
})
export class CarddettagliComponent implements OnInit {

  cliente : Cliente = new Cliente()
indirizzo : IndirizzoSedeLegale = new IndirizzoSedeLegale()
index : IndirizzoSedeOperativa = new IndirizzoSedeOperativa()

  constructor(
    private route: ActivatedRoute,
    private clientiservice: ClientiService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => 
      this.clientiservice.getClientiById(params['id']).subscribe(cliente => this.cliente = cliente)
    )}

}
