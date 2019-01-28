import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {SetsService} from '../../../../../services/sets/sets.service';
import {FormControl, FormGroup} from '@angular/forms';
import swal from 'sweetalert';


@Component({
  selector: 'app-add-edit-conjunto',
  templateUrl: './add-edit-conjunto.component.html',
  styleUrls: ['./add-edit-conjunto.component.scss']
})
export class AddEditConjuntoComponent implements OnInit {
  form: FormGroup;

  constructor(public dialogRef: MatDialogRef<AddEditConjuntoComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any,
              public _setService: SetsService) {
  }

  ngOnInit() {
    console.log(this.data);
    this.data.type === 'new' ? this.initFormGroup() : this.initFormGroup(this.data.info);
  }

  initFormGroup(info?) {
    this.form = new FormGroup({
      'title': new FormControl(info ? info.title : ''),
      'description': new FormControl(info ? info.description : ''),
      'idCommunity': new FormControl(1)
    });
  }

  save() {
    const set = this.form.value;
    console.log(set);
    if (this.data.type === 'new') {
      this._setService.createSets(set)
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
      const idSet = this.data.info.idSet;
      this._setService.updateSet(set, idSet)
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
