import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-add-edit-coleccion',
  templateUrl: './add-edit-coleccion.component.html',
  styleUrls: ['./add-edit-coleccion.component.scss']
})
export class AddEditColeccionComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AddEditColeccionComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
