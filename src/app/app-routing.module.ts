import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { BuscarComponent } from './buscar/buscar.component';
import { EspecialidadesComponent } from './especialidades/especialidades.component';
import { ExamenesComponent } from './examenes/examenes.component';
import { MedicosComponent } from './medicos/medicos.component';
import { PacientesComponent } from './pacientes/pacientes.component';
import { RegistrarComponent } from './registrar/registrar.component';
import { RegistrareComponent } from './registrare/registrare.component';
import { RegistrarwComponent } from './registrarw/registrarw.component';
import { ReportesComponent } from './reportes/reportes.component';

const routes: Routes = [
  {path: '', component: InicioComponent},
  {path: 'buscar', component: BuscarComponent},
  {path: 'registrar', component: RegistrarComponent},
  {path: 'registrare', component: RegistrareComponent},
  {path: 'registrarw', component: RegistrarwComponent},
  {path: 'especialidades', component: EspecialidadesComponent},
  {path: 'medicos', component: MedicosComponent},
  {path: 'examenes', component: ExamenesComponent},
  {path: 'pacientes', component: PacientesComponent},
  {path: 'reportes', component: ReportesComponent},
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
