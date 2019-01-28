import {Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material';
import {AddEditPiezaCatalogoComponent} from '../../catalogo/add-edit-pieza-catalogo/add-edit-pieza-catalogo.component';
import {ImageViewerComponent} from '../../../components/image-viewer/image-viewer.component';
import {ImageViewerModule} from 'ng2-image-viewer';

@Component({
  selector: 'app-edit-info-investigacion',
  templateUrl: './edit-info-investigacion.component.html',
  styleUrls: ['./edit-info-investigacion.component.scss'],
  providers: [ImageViewerModule]
})
export class EditInfoInvestigacionComponent implements OnInit {
  images = [1, 2, 3].map(() => `https://picsum.photos/900/500?random&t=${Math.random()}`);

  constructor(public dialog: MatDialog) {
  }

  ngOnInit() {
  }

  openImgInFullWindow(img) {
    console.log('Click en la imagen', img);
    let dialogRef;
    dialogRef = this.dialog.open(ImageViewerComponent, {
      position: {
        top: '10px',
        right: '10px'
      },
      height: '98%',
      width: '100vw',
      panelClass: 'full-screen-modal',
      data: {
        img: this.images
      }
    });
  }

}
