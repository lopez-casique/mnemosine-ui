import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-add-edit-subcolecciones',
  templateUrl: './add-edit-subcolecciones.component.html',
  styleUrls: ['./add-edit-subcolecciones.component.scss']
})
export class AddEditSubcoleccionesComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AddEditSubcoleccionesComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
