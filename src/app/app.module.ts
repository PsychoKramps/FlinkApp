import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/shared/home/home.component';
import { ScriptsJsService } from './services/scripts-js.service';
import { ExploredComponent } from './components/shared/explored/explored.component';
import { PerfilComponent } from './components/shared/perfil/perfil.component';
import { CreateCursoComponent } from './components/shared/create-curso/create-curso.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ExploredComponent,
    PerfilComponent,
    CreateCursoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    ScriptsJsService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
