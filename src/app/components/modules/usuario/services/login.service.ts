import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Token } from '../models/token';
import { TokenResponse } from '../models/token-response';
import { Usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  token : Token ={
    userName:'fraiden',
    password:'12345'
  }

  header = new HttpHeaders();
  constructor(private httpClient: HttpClient) { }
  //importar el HTTPClient

  TraerToken(auth:Token): Observable<TokenResponse>{
    let response = this.httpClient.post<TokenResponse>(`https://localhost:7194/api/Token`,auth);
    return response;
  }
  getUsuario(): Observable<any> {
    let response = this.httpClient.get('https://localhost:7238/api/Usuario');
    return response;
  }

  postUsuario(usuario:Usuario): Observable<any>{
    let response = this.httpClient.post('https://localhost:44357/api/Usuario', usuario);
    return response;
  }
}
