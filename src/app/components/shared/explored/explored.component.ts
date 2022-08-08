import { Component, OnInit } from '@angular/core';
import { ScriptsJsService } from 'src/app/components/services/scripts-js.service';
import { ResentCursos } from '../../modules/cursos/models/resent-cursos';
import { CursosService } from '../../modules/cursos/services/cursos.service';

@Component({
  selector: 'app-explored',
  templateUrl: './explored.component.html',
  styleUrls: ['./explored.component.css']
})
export class ExploredComponent implements OnInit {

  recentCursos: ResentCursos[] = [];

  constructor( private _cargarScript:ScriptsJsService, private cursosServices: CursosService) {
    _cargarScript.scripts(['isotope', 'owl-carousel', 'wow', 'tabs', 'popup', 'custom']);

    this.cursosServices.getResentCursos()
    .subscribe(cursos => {
      this.recentCursos = cursos;
    })
  }

  ngOnInit(): void {
  }

}
