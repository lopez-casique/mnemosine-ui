import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-info-investigacion',
  templateUrl: './edit-info-investigacion.component.html',
  styleUrls: ['./edit-info-investigacion.component.scss']
})
export class EditInfoInvestigacionComponent implements OnInit {
  images = [1, 2, 3].map(() => `https://picsum.photos/900/500?random&t=${Math.random()}`);

  constructor() { }

  ngOnInit() {
  }

}
