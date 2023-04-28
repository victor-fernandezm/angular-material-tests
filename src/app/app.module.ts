import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { SidenavComponent } from './sidenav/sidenav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { AppRoutingModule } from './app-routing.module';
import { InicioComponent } from './inicio/inicio.component';
import { BuscarComponent } from './buscar/buscar.component';
import { RegistrarComponent } from './registrar/registrar.component';
import { RegistrareComponent } from './registrare/registrare.component';
import { RegistrarwComponent } from './registrarw/registrarw.component';
import { EspecialidadesComponent } from './especialidades/especialidades.component';
import { MedicosComponent } from './medicos/medicos.component';
import { ExamenesComponent } from './examenes/examenes.component';
import { PacientesComponent } from './pacientes/pacientes.component';
import { ReportesComponent } from './reportes/reportes.component'; 

@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    InicioComponent,
    BuscarComponent,
    RegistrarComponent,
    RegistrareComponent,
    RegistrarwComponent,
    EspecialidadesComponent,
    MedicosComponent,
    ExamenesComponent,
    PacientesComponent,
    ReportesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
