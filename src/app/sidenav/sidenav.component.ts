import { Component } from '@angular/core';
import { SidenavService } from '../sidenav.service';
import { SidenavRoute } from '../model/routes';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent {

  routes: SidenavRoute[] = [];

  constructor(private sidenavService: SidenavService) {
    sidenavService.routesObservable.subscribe(arr => {
      this.routes = arr;
    })
  }

}
