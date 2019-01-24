import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-add-edit-organizacion',
  templateUrl: './add-edit-organizacion.component.html',
  styleUrls: ['./add-edit-organizacion.component.scss']
})
export class AddEditOrganizacionComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AddEditOrganizacionComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
