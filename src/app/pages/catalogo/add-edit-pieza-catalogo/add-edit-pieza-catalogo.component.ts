import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import * as moment from 'moment';
import {SetsService} from '../../../services/sets/sets.service';
import {CollectionsService} from '../../../services/collections/collections.service';
import {ObjectsService} from '../../../services/objects/objects.service';
import {forkJoin} from 'rxjs';
import {FormControl, FormGroup} from '@angular/forms';
import swal from 'sweetalert';

@Component({
  selector: 'app-add-edit-pieza-catalogo',
  templateUrl: './add-edit-pieza-catalogo.component.html',
  styleUrls: ['./add-edit-pieza-catalogo.component.scss']
})
export class AddEditPiezaCatalogoComponent implements OnInit {
  form: FormGroup;
  sets = [];
  collections = [];
  dateNow = moment().format('YYYY-MM-DD');

  constructor(public dialogRef: MatDialogRef<AddEditPiezaCatalogoComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any,
              public _setService: SetsService,
              public _collectionService: CollectionsService,
              public _objectService: ObjectsService) { }

  ngOnInit() {
    console.log(this.data);
    this.data.type === 'new' ? this.initFormGroup() : this.initFormGroup(this.data.info);
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

  initFormGroup(info?) {
    this.form = new FormGroup({
      'idSet': new FormControl(1),
      'origin_number': new FormControl(info ? info.origin_number : null),
      'inventory_number': new FormControl(null),
      'catalog_number': new FormControl(info ? info.catalog_number : null),
      'appraisal': new FormControl(info ? info.appraisal : null),
      'origin_description': new FormControl(info ? info.origin_description : null),
      'date_of_entry': new FormControl(info ? moment(info.date_of_entry).format('YYYY-MM-DD') : this.dateNow),
      'collection_idCollection': new FormControl(info ? info.collection_idCollection : null),
      'subCollection_idSubCollection': new FormControl(null),
      'type': new FormControl(1),
      'location': new FormControl(1),
    });
  }

  save() {
    const object = this.form.value;
    object.appraisal = +object.appraisal;
    console.log(object);
    if (this.data.type === 'new') {
      this._objectService.createObject(object)
        .subscribe(
          res => {
            swal('Registro exitoso...', 'Objeto guardado con exito', 'success');
            console.log(res);
            this.dialogRef.close(1);
          },
          (error1: Response | any) => {
            console.error(error1);
            if (error1.status === 0) {
              swal('Algo ha salido mal', 'No se obtuvo respuesta del servidor', 'error');
              this.dialogRef.close(0);
            } else {
              swal('Algo ha salido mal', 'Ocurrio un error al guardar', 'error');
              this.dialogRef.close(0);
            }
          }
        );
    } else if (this.data.type === 'edit') {
      const idObject = this.data.info.idObject;
      this._objectService.updateObject(object, idObject)
        .subscribe(
          (res: any) => {
            if (!res.error) {
              swal('Actualización exitosa...', 'Objeto actualizado con exito', 'success');
              this.dialogRef.close(1);
            }
          },
          (error1: Response | any) => {
            console.error(error1);
            if (error1.status === 0) {
              swal('Algo ha salido mal', 'No se obtuvo respuesta del servidor', 'error');
              this.dialogRef.close(0);
            } else if (error1.status === 422) {
              swal('Algo ha salido mal', `${error1.error.error}`, 'error');
            } else {
              swal('Algo ha salido mal', 'Ocurrio un error al actualizar', 'error');
              this.dialogRef.close(0);
            }
          }
        );
    }



    // this._objectService.createObject(object)
    //   .subscribe(
    //     res => {
    //       console.log(res);
    //     }
    //   );
  }

  onNoClick(): void {
    this.dialogRef.close();
  }


}
