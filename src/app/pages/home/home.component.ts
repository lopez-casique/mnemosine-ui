import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {MediaMatcher} from '@angular/cdk/layout';
import {NavigationEnd, Router} from '@angular/router';
import {every, filter} from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  mybool;

  mobileQuery: MediaQueryList;

  fillerNav = [
    {viewValue: 'Consulta', link: 'consulta', icon: 'list'},
    {viewValue: 'Catálogo', link: 'catalogo', icon: 'library_add'},
    {viewValue: 'Prestamos', link: 'prestamos', icon: 'departure_board'},
    {viewValue: 'Investigación', link: 'investigacion', icon: 'search'},
    {viewValue: 'Restauración', link: 'restauracion', icon: 'autorenew'},
    {viewValue: 'Administración', link: 'administracion', icon: 'settings'},
  ];

  fillerContent = Array.from({length: 50}, () =>
    `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
       labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
       laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
       voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
       cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`);

  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef,
              media: MediaMatcher,
              public router: Router) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnInit() {
    if(this.router.url === '/inicio/bienvenida'){
      this.mybool = false;
    }
    // console.log(this.router.url);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  goHome() {
    this.router.navigateByUrl('/inicio');
  }
}
