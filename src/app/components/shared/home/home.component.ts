import { Component, OnInit } from '@angular/core';
import { ScriptsJsService } from 'src/app/services/scripts-js.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor( private _cargarScript:ScriptsJsService) {
    _cargarScript.scripts(['isotope', 'owl-carousel', 'wow', 'tabs', 'popup', 'custom']);
  }

  ngOnInit(): void {
  }

}
