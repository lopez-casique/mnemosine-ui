import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import * as moment from 'moment';

@Component({
  selector: 'app-add-edit-pieza-catalogo',
  templateUrl: './add-edit-pieza-catalogo.component.html',
  styleUrls: ['./add-edit-pieza-catalogo.component.scss']
})
export class AddEditPiezaCatalogoComponent implements OnInit {
  dateNow = moment().format('YYYY-MM-DD');

  constructor(public dialogRef: MatDialogRef<AddEditPiezaCatalogoComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }


}
