import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BreadcrumbComponent} from './shared/breadcrumb/breadcrumb.component';
import {RouterModule} from '@angular/router';
import { ImageViewerComponent } from './image-viewer/image-viewer.component';
import {ImageViewerModule} from 'ng2-image-viewer';


@NgModule({
  declarations: [
    BreadcrumbComponent,
    ImageViewerComponent,
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    BreadcrumbComponent,
    // ImageViewerComponent
  ]
})
export class ComponentsModule { }
