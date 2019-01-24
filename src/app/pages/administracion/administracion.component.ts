import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-administracion',
  templateUrl: './administracion.component.html',
  styleUrls: ['./administracion.component.scss']
})
export class AdministracionComponent implements OnInit {

  routeLinks: any[];
  activeLinkIndex = -1;
  constructor(private router: Router) {
    this.routeLinks = [
      {
        label: 'Conjuntos y colecciones',
        link: 'conjuntos-colecciones',
        index: 0
      },
      {
        label: 'Reportes',
        link: './reportes',
        index: 1
      },
      {
        label: 'Usuarios',
        link: './usuarios',
        index: 2
      },
      {
        label: 'Historicos',
        link: './historicos',
        index: 3
      },
      {
        label: 'OAI',
        link: './oai',
        index: 4
      },
      {
        label: 'Visor de objetos digitales',
        link: './visor',
        index: 5
      },
      {
        label: 'Preservación digital',
        link: './preservacion-digital',
        index: 6
      }
    ];
  }

  ngOnInit(): void {
    this.router.events.subscribe((res) => {
      this.activeLinkIndex = this.routeLinks.indexOf(this.routeLinks.find(tab => tab.link === '.' + this.router.url));
    });
  }

}
