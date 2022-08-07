import { Component, OnInit } from '@angular/core';
import { ScriptsJsService } from 'src/app/services/scripts-js.service';

@Component({
  selector: 'app-explored',
  templateUrl: './explored.component.html',
  styleUrls: ['./explored.component.css']
})
export class ExploredComponent implements OnInit {

  constructor( private _cargarScript:ScriptsJsService) {
    _cargarScript.scripts(['isotope', 'owl-carousel', 'wow', 'tabs', 'popup', 'custom']);
  }

  ngOnInit(): void {
  }

}
