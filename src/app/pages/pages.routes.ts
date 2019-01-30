import {RouterModule, Routes} from '@angular/router';
import {PagesComponent} from './pages.component';
import {HomeComponent} from './home/home.component';
import {ConsultaComponent} from './consulta/consulta.component';
import {CatalogoComponent} from './catalogo/catalogo.component';
import {PrestamosComponent} from './prestamos/prestamos.component';
import {InvestigacionComponent} from './investigacion/investigacion.component';
import {RestauracionComponent} from './restauracion/restauracion.component';
import {AdministracionComponent} from './administracion/administracion.component';
import {ResultadoBusquedaComponent} from './consulta/resultado-busqueda/resultado-busqueda.component';
import {BusquedaConsultaComponent} from './consulta/busqueda-consulta/busqueda-consulta.component';
import {DetalleConsultaComponent} from './consulta/detalle-consulta/detalle-consulta.component';
import {WelcomeComponent} from './home/welcome/welcome.component';
import {ReportesComponent} from './administracion/reportes/reportes.component';
import {UsuariosComponent} from './administracion/usuarios/usuarios.component';
import {HistoricosComponent} from './administracion/historicos/historicos.component';
import {OaiComponent} from './administracion/oai/oai.component';
import {VisorObjetosDigitalesComponent} from './administracion/visor-objetos-digitales/visor-objetos-digitales.component';
import {PreservacionDigitalComponent} from './administracion/preservacion-digital/preservacion-digital.component';
import {PersonasComponent} from './prestamos/personas/personas.component';
import {OrganizacionesComponent} from './prestamos/organizaciones/organizaciones.component';
import {ExposicionesComponent} from './prestamos/exposiciones/exposiciones.component';
import {MovimientosComponent} from './prestamos/movimientos/movimientos.component';
import {ResultadoBusquedaInvestigacionComponent} from './investigacion/resultado-busqueda-investigacion/resultado-busqueda-investigacion.component';
import {BusquedaInvestigacionComponent} from './investigacion/busqueda-investigacion/busqueda-investigacion.component';
import {EditInfoInvestigacionComponent} from './investigacion/edit-info-investigacion/edit-info-investigacion.component';
import {ConjuntosColeccionesComponent} from './administracion/conjuntos-colecciones/conjuntos-colecciones.component';
import {AdminConjuntosComponent} from './administracion/conjuntos-colecciones/admin-conjuntos/admin-conjuntos.component';
import {AdminColeccionesComponent} from './administracion/conjuntos-colecciones/admin-colecciones/admin-colecciones.component';

const pagesRoutes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      {
        path: 'inicio',
        component: HomeComponent,
        data: {
          title: 'Inicio'
        },
        children: [
          {
            path: 'consulta', component: ConsultaComponent,
            data: {
              title: 'Consulta',
              subtitle: '/ Busqueda',
              icon: 'list'
            },
            children: [
              {
                path: 'busqueda', component: BusquedaConsultaComponent,
                data: {
                  title: 'Consulta', subtitle: '/ Busqueda',
                  icon: 'list'
                }
              },
              {
                path: 'resultado', component: ResultadoBusquedaComponent,
                data: {
                  title: 'Consulta', subtitle: '/ Resultado busqueda',
                  icon: 'list'
                }
              },
              {
                path: 'detalle', component: DetalleConsultaComponent,
                data: {
                  title: 'Consulta', subtitle: '/ Detalle pieza',
                  icon: 'list'
                }
              },
              {path: '', redirectTo: 'busqueda', pathMatch: 'full'}
            ]
          },
          {path: 'catalogo', component: CatalogoComponent, data: {title: 'Catálogo', subtitle: '/ Busqueda', icon: 'library_add'}},
          {
            path: 'prestamos', component: PrestamosComponent, data: {title: 'Prestamos', subtitle: '', icon: 'departure_board'},
            children: [
              {
                path: 'personas', component: PersonasComponent,
                data: {title: 'Prestamos', subtitle: '/ Personas', icon: 'departure_board'}
              },
              {
                path: 'organizaciones', component: OrganizacionesComponent, data: {
                  title: 'Prestamos', subtitle: '/ departure_board',
                  icon: 'departure_board'
                }
              },
              {
                path: 'exposiciones',
                component: ExposicionesComponent,
                data: {title: 'Prestamos', subtitle: '/ Exposiciones', icon: 'departure_board'}
              },
              {
                path: 'movimientos',
                component: MovimientosComponent,
                data: {title: 'Prestamos', subtitle: '/ Movimientos',  icon: 'departure_board'}
              },
              {path: '**', redirectTo: 'organizaciones', pathMatch: 'full'}
            ]
          },
          {
            path: 'investigacion', component: InvestigacionComponent, data: {title: 'Investigación', subtitle: ''},
            children: [
              {
                path: 'busqueda', component: BusquedaInvestigacionComponent,
                data: {
                  title: 'Investigación', subtitle: '/ Busqueda',
                  icon: 'search'
                }
              },
              {
                path: 'resultado', component: ResultadoBusquedaInvestigacionComponent,
                data: {
                  title: 'Investigación', subtitle: '/ Resultado busqueda',
                  icon: 'search'
                }
              },
              {
                path: 'editar', component: EditInfoInvestigacionComponent,
                data: {
                  title: 'Investigación', subtitle: '/ Editar información',
                  icon: 'search'
                }
              },
              {path: '', redirectTo: 'busqueda', pathMatch: 'full'}
            ]
          },
          {path: 'restauracion', component: RestauracionComponent, data: {title: 'Restauración', subtitle: '', icon: 'autorenew'}},
          {
            path: 'administracion', component: AdministracionComponent, data: {title: 'Administración', subtitle: ''},
            children: [
              {
                path: 'conjuntos-colecciones',
                component: ConjuntosColeccionesComponent,
                data: {title: 'Administración', subtitle: '/ Conjuntos y colecciones'},
                children: [
                  {
                    path: 'admin-conjuntos',
                    component: AdminConjuntosComponent,
                    data: {title: 'Administración', subtitle: '/ Conjuntos y colecciones / Administrar conjuntos', icon: 'settings'}
                  },
                  {
                    path: 'admin-colecciones',
                    component: AdminColeccionesComponent,
                    data: {title: 'Administración', subtitle: '/ Conjuntos y colecciones / Administrar colecciones', icon: 'settings'}
                  },
                  {path: '**', redirectTo: 'admin-conjuntos', pathMatch: 'full'}
                ]
              },
              {path: 'reportes', component: ReportesComponent, data: {title: 'Administración', subtitle: '/ Reportes', icon: 'settings'}},
              {path: 'usuarios', component: UsuariosComponent, data: {title: 'Administración', subtitle: '/ Usuarios', icon: 'settings'}},
              {path: 'historicos', component: HistoricosComponent, data: {title: 'Administración', subtitle: '/ Historicos', icon: 'settings'}},
              {path: 'oai', component: OaiComponent, data: {title: 'Administración', subtitle: '/ OAI', icon: 'settings'}},
              {
                path: 'visor',
                component: VisorObjetosDigitalesComponent,
                data: {title: 'Administración', subtitle: '/ Visor de objetos digitales',
                icon: 'settings'}
              },
              {
                path: 'preservacion-digital', component: PreservacionDigitalComponent,
                data: {title: 'Administración', subtitle: '/ Preservación digital', icon: 'settings'}
              },
              {path: '**', redirectTo: 'conjuntos-colecciones', pathMatch: 'full'}
            ]
          },
          {path: 'bienvenida', component: WelcomeComponent, data: {title: 'Inicio', subtitle: ''}},
          {path: '', redirectTo: '/inicio/bienvenida', pathMatch: 'full'}
        ]
      },
      {path: '', redirectTo: '/inicio/bienvenida', pathMatch: 'full'}
    ]
  }
];

export const PAGES_ROUTES = RouterModule.forChild(pagesRoutes);
