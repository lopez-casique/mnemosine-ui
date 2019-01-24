import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PagesComponent} from './pages.component';
import {HomeComponent} from './home/home.component';
import {RouterModule} from '@angular/router';
import {AppRoutingModule} from '../app-routing.module';
import {PAGES_ROUTES} from './pages.routes';
import {MaterialModule} from '../material/material.module';
import {ComponentsModule} from '../components/components.module';
import {ConsultaComponent} from './consulta/consulta.component';
import {CatalogoComponent} from './catalogo/catalogo.component';
import {PrestamosComponent} from './prestamos/prestamos.component';
import {InvestigacionComponent} from './investigacion/investigacion.component';
import {RestauracionComponent} from './restauracion/restauracion.component';
import {AdministracionComponent} from './administracion/administracion.component';
import {ResultadoBusquedaComponent} from './consulta/resultado-busqueda/resultado-busqueda.component';
import {BusquedaConsultaComponent} from './consulta/busqueda-consulta/busqueda-consulta.component';
import {NgbCarousel, NgbCarouselModule, NgbPaginationModule} from '@ng-bootstrap/ng-bootstrap';
import {NgxPaginationModule} from 'ngx-pagination';
import {DetalleConsultaComponent} from './consulta/detalle-consulta/detalle-consulta.component';
import {AddEditPiezaCatalogoComponent} from './catalogo/add-edit-pieza-catalogo/add-edit-pieza-catalogo.component';
import {AlertDeletePiezaComponent} from './catalogo/alert-delete-pieza/alert-delete-pieza.component';
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
import {AddEditConjuntoComponent} from './administracion/conjuntos-colecciones/admin-conjuntos/add-edit-conjunto/add-edit-conjunto.component';
import {AddEditColeccionComponent} from './administracion/conjuntos-colecciones/admin-colecciones/add-edit-coleccion/add-edit-coleccion.component';
import { AdminSubcoleccionesComponent } from './administracion/conjuntos-colecciones/admin-subcolecciones/admin-subcolecciones.component';
import { AddEditSubcoleccionesComponent } from './administracion/conjuntos-colecciones/admin-subcolecciones/add-edit-subcolecciones/add-edit-subcolecciones.component';
import { AddEditOrganizacionComponent } from './prestamos/organizaciones/add-edit-organizacion/add-edit-organizacion.component';
import { AddEditPersonaComponent } from './prestamos/personas/add-edit-persona/add-edit-persona.component';
import { AddEditExposicionComponent } from './prestamos/exposiciones/add-edit-exposicion/add-edit-exposicion.component';

@NgModule({
  declarations: [
    PagesComponent,
    HomeComponent,
    ConsultaComponent,
    CatalogoComponent,
    PrestamosComponent,
    InvestigacionComponent,
    RestauracionComponent,
    AdministracionComponent,
    ResultadoBusquedaComponent,
    BusquedaConsultaComponent,
    DetalleConsultaComponent,
    AddEditPiezaCatalogoComponent,
    AlertDeletePiezaComponent,
    WelcomeComponent,
    ReportesComponent,
    UsuariosComponent,
    HistoricosComponent,
    OaiComponent,
    VisorObjetosDigitalesComponent,
    PreservacionDigitalComponent,
    PersonasComponent,
    OrganizacionesComponent,
    ExposicionesComponent,
    MovimientosComponent,
    BusquedaInvestigacionComponent,
    ResultadoBusquedaInvestigacionComponent,
    EditInfoInvestigacionComponent,
    ConjuntosColeccionesComponent,
    AdminConjuntosComponent,
    AdminColeccionesComponent,
    AddEditConjuntoComponent,
    AddEditColeccionComponent,
    AdminSubcoleccionesComponent,
    AddEditSubcoleccionesComponent,
    AddEditOrganizacionComponent,
    AddEditPersonaComponent,
    AddEditExposicionComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    AppRoutingModule,
    PAGES_ROUTES,
    MaterialModule,
    ComponentsModule,
    NgbCarouselModule,
    NgxPaginationModule
  ],
  entryComponents: [
    AddEditPiezaCatalogoComponent,
    AlertDeletePiezaComponent,
    AddEditConjuntoComponent,
    AddEditColeccionComponent,
    AdminSubcoleccionesComponent,
    AddEditSubcoleccionesComponent,
    AddEditOrganizacionComponent,
    AddEditPersonaComponent,
    AddEditExposicionComponent
  ]
})
export class PagesModule {
}
