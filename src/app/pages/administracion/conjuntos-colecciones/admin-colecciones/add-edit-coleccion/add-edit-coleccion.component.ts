import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {FormControl, FormGroup} from '@angular/forms';
import {SetsService} from '../../../../../services/sets/sets.service';
import swal from 'sweetalert';
import {CollectionsService} from '../../../../../services/collections/collections.service';

@Component({
  selector: 'app-add-edit-coleccion',
  templateUrl: './add-edit-coleccion.component.html',
  styleUrls: ['./add-edit-coleccion.component.scss']
})
export class AddEditColeccionComponent implements OnInit {
  form: FormGroup;
  sets = [];

  constructor(public dialogRef: MatDialogRef<AddEditColeccionComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any,
              public _setService: SetsService,
              public _collectionService: CollectionsService) { }

  ngOnInit() {
    console.log('DATA QUE VIENE DE ADMIN COLLECTIONES', this.data);
    this._setService.listSets()
      .subscribe(
        sets => {
          console.log(sets);
          this.sets = sets;
        }
      );
    this.data.type === 'new' ? this.initFormGroup() : this.initFormGroup(this.data.info);
  }

  initFormGroup(info?) {
    this.form = new FormGroup({
      'name': new FormControl(info ? info.name : ''),
      'idSet': new FormControl(info ? +info.idSet : ''),
      'description': new FormControl(info ? info.description : '')
    });
  }

  save() {
    const collection = this.form.value;
    console.log(collection);
    collection.idSet = +collection.idSet;
    if (this.data.type === 'new') {
      this._collectionService.createCollection(collection)
        .subscribe(
          res => {
            swal('Registro exitoso...', 'Conjunto guardado con exito', 'success');
            console.log(res);
            this.dialogRef.close(1);
          },
          (error1: Response | any) => {
            if (error1.status === 0) {
              swal('Algo ha salido mal', 'No se obtuvo respuesta del servidor', 'error');
              this.dialogRef.close(0);
            } else {
              swal('Algo ha salido mal', 'Ocurrio un error al guardar', 'error');
              console.error(error1);
              this.dialogRef.close(0);
            }
          }
        );
    } else if (this.data.type === 'edit') {
      const idCollection = this.data.info.idCollection;
      this._collectionService.updateCollection(collection, idCollection)
        .subscribe(
          (res: any) => {
            if (!res.error) {
              swal('Actualización exitosa...', 'Conjunto actualizado con exito', 'success');
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
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
