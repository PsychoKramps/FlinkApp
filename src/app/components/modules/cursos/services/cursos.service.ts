import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { ResentCursos } from '../models/resent-cursos';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  constructor(private httpClient: HttpClient) { }

  getResentCursos(): Observable<ResentCursos[]> {
    let response = this.httpClient
    .get('https://localhost:7238/api/Curso')
      .pipe(
        map((x: any) => {
          let cursos: ResentCursos[] = [];
          for (let curso of x) {
            let recentCurso: ResentCursos = {
              codigo: curso.codigo,
              nombreCurso: curso.nombreCurso,
              urlCurso: curso.urlCurso,
              fecha: curso.fecha,
              duracion: curso.duracion,
              descripcion: curso.descripcion,
              tipoCurso: curso.tipoCurso,
              categoria: curso.categoria
            };
            cursos.push(recentCurso);
          };
          return cursos;
        })
      )
      return response;
  };
}
