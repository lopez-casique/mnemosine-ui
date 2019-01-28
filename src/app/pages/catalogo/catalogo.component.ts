import {Component, OnInit, ViewChild} from '@angular/core';
import {MatDialog, MatPaginator, MatTableDataSource} from '@angular/material';
import {AddEditPiezaCatalogoComponent} from './add-edit-pieza-catalogo/add-edit-pieza-catalogo.component';
import {AlertDeletePiezaComponent} from './alert-delete-pieza/alert-delete-pieza.component';
import {SetsService} from '../../services/sets/sets.service';
import {CollectionsService} from '../../services/collections/collections.service';
import {ObjectsService} from '../../services/objects/objects.service';
import {forkJoin} from 'rxjs';
import {FormControl, FormGroup} from '@angular/forms';
import {ObjectMuseum} from '../../classes/object';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.scss']
})
export class CatalogoComponent implements OnInit {
  form: FormGroup;
  sets = [];
  collections = [];

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol', 'option'];
  dataSource: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(public dialog: MatDialog,
              public _setService: SetsService,
              public _collectionService: CollectionsService,
              public _objectService: ObjectsService) {
  }

  ngOnInit() {
    this.initFormGroup();
    const setRequest = this._setService.listSets();
    const collectionRequest = this._collectionService.listCollections();
    forkJoin(setRequest, collectionRequest)
      .subscribe(
        res => {
          this.sets = res[0];
          this.collections = res[1];
          console.log(res);
        }
      );
    this.loadData();
  }

  loadData() {
    this._objectService.listObjects()
      .subscribe(
        (objects: Array<ObjectMuseum>) => {
          console.log(objects);
          this.dataSource = new MatTableDataSource<any>(objects);
          this.dataSource.paginator = this.paginator;
        }
      );
  }

  initFormGroup() {
    this.form = new FormGroup({
      'idSet': new FormControl(1),
      'origin_number': new FormControl(null),
      'inventory_number': new FormControl(null),
      'catalog_number': new FormControl(null),
      'idCollection': new FormControl(null),
    });
  }

  openModal(type, info?) {
    let dialogRef;
    if (type === 'new') {
      dialogRef = this.dialog.open(AddEditPiezaCatalogoComponent, {
        data: {
          type: 'new'
        }
      });
    } else {
      dialogRef = this.dialog.open(AddEditPiezaCatalogoComponent, {
        data: {
          type: 'edit',
          info: info
        }
      });
    }

    dialogRef.afterClosed().subscribe(result => {
      if (result === 1) {
        this.loadData();
      }
    });
  }

  deleteItem(info) {
    const dialogRef = this.dialog.open(AlertDeletePiezaComponent, {
      data: {
        info: {
          num_inventario: 12345,
          prefijo: 'la',
          tipo: 'pieza'
        }
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === 1) {
        this.loadData();
      }
    });
  }

}

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
  {position: 11, name: 'Sodium', weight: 22.9897, symbol: 'Na'},
  {position: 12, name: 'Magnesium', weight: 24.305, symbol: 'Mg'},
  {position: 13, name: 'Aluminum', weight: 26.9815, symbol: 'Al'},
  {position: 14, name: 'Silicon', weight: 28.0855, symbol: 'Si'},
  {position: 15, name: 'Phosphorus', weight: 30.9738, symbol: 'P'},
  {position: 16, name: 'Sulfur', weight: 32.065, symbol: 'S'},
  {position: 17, name: 'Chlorine', weight: 35.453, symbol: 'Cl'},
  {position: 18, name: 'Argon', weight: 39.948, symbol: 'Ar'},
  {position: 19, name: 'Potassium', weight: 39.0983, symbol: 'K'},
  {position: 20, name: 'Calcium', weight: 40.078, symbol: 'Ca'},
];


