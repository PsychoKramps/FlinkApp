import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/shared/home/home.component';
import { ScriptsJsService } from './components/services/scripts-js.service';
import { ExploredComponent } from './components/shared/explored/explored.component';
import { PerfilComponent } from './components/shared/perfil/perfil.component';
import { CreateCursoComponent } from './components/shared/create-curso/create-curso.component';
import { HeaderRoutingComponent } from './components/shared/header-routing/header-routing.component';
import { FormsModule } from '@angular/forms';
import { ViewVideoComponent } from './components/shared/view-video/view-video.component';
import { LoginComponent } from './components/modules/usuario/login/login.component';
import { RegisterComponent } from './components/modules/usuario/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ExploredComponent,
    PerfilComponent,
    CreateCursoComponent,
    HeaderRoutingComponent,
    LoginComponent,
    RegisterComponent,
    ViewVideoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    ScriptsJsService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
