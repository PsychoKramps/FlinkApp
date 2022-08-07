import { Component, OnInit } from '@angular/core';
import { ScriptsJsService } from 'src/app/services/scripts-js.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  constructor( private _cargarScript:ScriptsJsService) {
    _cargarScript.scripts(['isotope', 'owl-carousel', 'wow', 'tabs', 'popup', 'custom']);
  }

  ngOnInit(): void {
  }

}
