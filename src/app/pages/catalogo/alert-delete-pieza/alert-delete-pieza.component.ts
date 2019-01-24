import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-alert-delete-pieza',
  templateUrl: './alert-delete-pieza.component.html',
  styleUrls: ['./alert-delete-pieza.component.scss']
})
export class AlertDeletePiezaComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AlertDeletePiezaComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
