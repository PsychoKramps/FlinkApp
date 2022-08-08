import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateCursoComponent } from './components/shared/create-curso/create-curso.component';
import { ExploredComponent } from './components/shared/explored/explored.component';
import { HomeComponent } from './components/shared/home/home.component';
import { PerfilComponent } from './components/shared/perfil/perfil.component';

const routes: Routes = [
  {
    path:'home',
    component: HomeComponent
  },
  {
    path:'cursos',
    component: ExploredComponent
  },
  {
    path:"perfil",
    component: PerfilComponent
  },
  {
    path:"crearCurso",
    component: CreateCursoComponent
  },
  {
    path:'**',
    redirectTo: '/home', 
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
