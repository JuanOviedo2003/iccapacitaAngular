import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IniciosesionComponent } from './iniciosesion/iniciosesion.component';
import { RegistrousuarioComponent } from './registrousuario/registrousuario.component';
import { CursosmatriculadosComponent } from './cursosmatriculados/cursosmatriculados.component';
import { ExamenesdelcursoComponent } from './examenesdelcurso/examenesdelcurso.component';
import { PresentarexamenComponent } from './presentarexamen/presentarexamen.component';

@NgModule({
  declarations: [
    AppComponent,
    IniciosesionComponent,
    RegistrousuarioComponent,
    CursosmatriculadosComponent,
    ExamenesdelcursoComponent,
    PresentarexamenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
