import { Component, OnInit } from '@angular/core';
import { Usuario } from '../models/usuario';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  usuario : Usuario [] = []
  constructor(private loginService:LoginService) { }

  ngOnInit(): void {
    this.getUsuario()
  }
  getUsuario(){
    this.loginService.getUsuario().subscribe(data => {
      this.usuario = data;
    });


  }
  onSubmit(usuario: Usuario): void{
    console.log(usuario);
    //Consumir el API de creacion
    this.loginService.postUsuario(usuario).subscribe(data=>{

      this.getUsuario();

     });
   }
}
