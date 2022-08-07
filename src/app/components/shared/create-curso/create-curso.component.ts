import { Component, OnInit } from '@angular/core';
import { ScriptsJsService } from 'src/app/components/services/scripts-js.service';

@Component({
  selector: 'app-create-curso',
  templateUrl: './create-curso.component.html',
  styleUrls: ['./create-curso.component.css']
})
export class CreateCursoComponent implements OnInit {

  constructor( private _cargarScript:ScriptsJsService) {
    _cargarScript.scripts(['isotope', 'owl-carousel', 'wow', 'tabs', 'popup', 'custom']);
  }

  ngOnInit(): void {
  }

}
