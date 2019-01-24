import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-conjuntos-colecciones',
  templateUrl: './conjuntos-colecciones.component.html',
  styleUrls: ['./conjuntos-colecciones.component.scss']
})
export class ConjuntosColeccionesComponent implements OnInit {
  routeLinks: any[];
  activeLinkIndex = -1;
  constructor(private router: Router) {
    this.routeLinks = [
      {
        label: 'Administrar conjuntos',
        link: 'admin-conjuntos',
        index: 0
      },
      {
        label: 'Administrar colecciones',
        link: 'admin-colecciones',
        index: 1
      }
    ];
  }

  ngOnInit(): void {
    this.router.events.subscribe((res) => {
      this.activeLinkIndex = this.routeLinks.indexOf(this.routeLinks.find(tab => tab.link === '.' + this.router.url));
    });
  }

}
