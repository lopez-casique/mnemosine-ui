import { Component, OnInit } from '@angular/core';
import {SetsService} from '../../../services/sets/sets.service';
import {CollectionsService} from '../../../services/collections/collections.service';
import {FormControl, FormGroup} from '@angular/forms';
import {forkJoin} from 'rxjs';

@Component({
  selector: 'app-busqueda-consulta',
  templateUrl: './busqueda-consulta.component.html',
  styleUrls: ['./busqueda-consulta.component.scss']
})
export class BusquedaConsultaComponent implements OnInit {
  form: FormGroup;
  sets = [];
  collections = [];

  constructor(public _setService: SetsService,
              public _collectionService: CollectionsService) { }

  ngOnInit() {
    this.initFormGroup();
    const setRequest = this._setService.listSets();
    const collectionRequest = this._collectionService.listCollections();
    forkJoin(setRequest, collectionRequest)
      .subscribe(
        res => {
          this.sets = res[0];
          this.collections = res[1];
          console.log(res);
        }
      );
  }

  initFormGroup() {
    this.form = new FormGroup({
      'idSet': new FormControl(1),
      'origin_number': new FormControl(null),
      'inventory_number': new FormControl(null),
      'catalog_number': new FormControl(null),
      'idCollection': new FormControl(null),
    });
  }

}
