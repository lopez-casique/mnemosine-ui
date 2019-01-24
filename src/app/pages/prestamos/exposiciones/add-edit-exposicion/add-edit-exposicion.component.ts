import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-add-edit-exposicion',
  templateUrl: './add-edit-exposicion.component.html',
  styleUrls: ['./add-edit-exposicion.component.scss']
})
export class AddEditExposicionComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AddEditExposicionComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
