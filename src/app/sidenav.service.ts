import { Injectable } from '@angular/core';
import { SidenavRoute } from './model/routes';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SidenavService {

  private _routes: SidenavRoute[] = [
    new SidenavRoute("/", "Inicio", "home"),
    new SidenavRoute("/buscar", "Buscar", "search"),
    new SidenavRoute("/registrar", "Registrar", "person_add"),
    new SidenavRoute("/registrare", "Registrar E.", "note_add"),
    new SidenavRoute("/registrarw", "Registrar W.", "group_add"),
    new SidenavRoute("/especialidades", "Especialidades", "star"),
    new SidenavRoute("/medicos", "Médicos", "medical_services"),
    new SidenavRoute("/examenes", "Exámenes", "description"),
    new SidenavRoute("/pacientes", "Pacientes", "masks", "material-icons-outlined"),
    new SidenavRoute("/reportes", "Reportes", "report"),
  ];
  public get routes(): SidenavRoute[] {
    return this._routes;
  }
  public get routesObservable(): Observable<SidenavRoute[]> {
    return of(this._routes);
  }

  constructor() { }
}
