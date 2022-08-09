import { Component, OnInit } from '@angular/core';
import { ScriptsJsService } from 'src/app/components/services/scripts-js.service';
import { ResentCursos } from '../../modules/cursos/models/resent-cursos';
import { CursosService } from '../../modules/cursos/services/cursos.service';

@Component({
  selector: 'app-create-curso',
  templateUrl: './create-curso.component.html',
  styleUrls: ['./create-curso.component.css']
})
export class CreateCursoComponent implements OnInit {

  crearCurso: ResentCursos[] = [];
  listaTipo: string[] = ['TI', 'Idiomas', 'Arte', 'Diseño'];
  listaCategoria: string[] = ['Programación', 'Ingles', 'Musica', 'Diseño grafico'];

  constructor( private _cargarScript:ScriptsJsService, private cursosServices: CursosService) {
    _cargarScript.scripts(['isotope', 'owl-carousel', 'tabs', 'popup', 'custom']);
  }

  ngOnInit(): void {
  }

  getCursos(){
    this.cursosServices.getResentCursos().subscribe(data => {
      this.crearCurso = data;
    });
  }

  onSubmit(curso: ResentCursos): void{
    console.log(curso);
    //Consumir el API de creacion
    this.cursosServices.createCurso(curso).subscribe(data=>{

      this.getCursos();

    });
  }

}
