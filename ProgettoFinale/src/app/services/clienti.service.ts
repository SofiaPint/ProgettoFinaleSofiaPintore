import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Cliente } from '../classes/cliente';
import { Clienti } from '../interfaces/clienti';

@Injectable({
  providedIn: 'root'
})
export class ClientiService {

clientlist : Cliente[] =  []

tenantID = 'fe_0621';
bearerToken = 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImlhdCI6MTY0MzA0MTEyNywiZXhwIjoxNjQzOTA1MTI3fQ.EnRko7X8vIdacphkTU9exg1CGC3ha3buCLpUQGPa2IL9nkxaV6utFYM-6gCXsOUi6oVQjfLduh4CUYYDqay4hw'
headers = new HttpHeaders();

  constructor(private http: HttpClient) {
    this.headers = this. headers
    .set("Authorization", this.bearerToken)
    .set("X-TENANT-ID", this.tenantID)
   }

   getAllClienti() {
     return this.http.get<Clienti>(environment.clienti, {headers : this.headers})
   }

 

 getClientiById(id: number) {
  return this.http.get<Cliente>(environment.cliente + id, {headers : this.headers})
 }

 addCliente(cliente: Cliente) {
   return this.http.post<Cliente>(environment.add, cliente, {headers : this.headers});
 }
}


