import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PruebaService {


  constructor(private httpClient: HttpClient) { }
  //importar el HTTPClient
  getPrueba(): Observable<any> {
    let response = this.httpClient.get('https://localhost:7238/api/Usuario');
    return response;
  }
}
