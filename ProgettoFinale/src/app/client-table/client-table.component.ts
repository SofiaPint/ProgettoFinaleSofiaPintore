import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cliente } from '../classes/cliente';

import { ClientiService } from '../services/clienti.service';

@Component({
  selector: 'app-client-table',
  templateUrl: './client-table.component.html',
  styleUrls: ['./client-table.component.css']
})
export class ClientTableComponent implements OnInit {

cliente: Cliente[] = []

  constructor(private clientiservice: ClientiService,
    private router: Router) { }

  ngOnInit(): void {
    this.clientiservice.getAllClienti().subscribe(data =>
       this.cliente = data.content)
  }

  detail(id: number): void {
    this.router.navigate(['clienti', id])
  }
}
