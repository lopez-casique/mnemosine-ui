import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {URL_SERVICES} from '../../config/config';
import {Collection} from '../../classes/collection';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CollectionsService {

  urlCollection = `${URL_SERVICES}/collections`;

  constructor(public http: HttpClient) {
  }

  listCollections() {
    return this.http.get(this.urlCollection)
      .pipe(
        map(
          (collections: any) => collections.data
        )
      );
  }

  createCollection(collection: Collection) {
    const body = collection;
    const headers = new HttpHeaders().append('Content-Type', 'application/json');
    return this.http.post(this.urlCollection, JSON.stringify(body), {headers});
  }

  updateCollection(collection: Collection, idCollection: number) {
    const body = collection;
    const headers = new HttpHeaders().append('Content-Type', 'application/json');
    return this.http.put(`${this.urlCollection}/${idCollection}`, JSON.stringify(body), {headers});
  }
}
