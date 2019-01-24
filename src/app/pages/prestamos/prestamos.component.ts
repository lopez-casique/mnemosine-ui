import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-prestamos',
  templateUrl: './prestamos.component.html',
  styleUrls: ['./prestamos.component.scss']
})
export class PrestamosComponent implements OnInit {

  routeLinks: any[];
  activeLinkIndex = -1;
  constructor(private router: Router) {
    this.routeLinks = [
      {
        label: 'Organizaciones',
        link: './organizaciones',
        index: 0
      },
      // {
      //   label: 'Personas',
      //   link: './personas',
      //   index: 1
      // },
      {
        label: 'Exposiciones',
        link: './exposiciones',
        index: 1
      },
      {
        label: 'Movimientos',
        link: './movimientos',
        index: 2
      },
    ];
  }

  ngOnInit(): void {
    this.router.events.subscribe((res) => {
      this.activeLinkIndex = this.routeLinks.indexOf(this.routeLinks.find(tab => tab.link === '.' + this.router.url));
    });
  }

}
