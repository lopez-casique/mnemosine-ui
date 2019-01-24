import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-add-edit-conjunto',
  templateUrl: './add-edit-conjunto.component.html',
  styleUrls: ['./add-edit-conjunto.component.scss']
})
export class AddEditConjuntoComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AddEditConjuntoComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
