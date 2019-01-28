import {Injectable} from '@angular/core';
import {URL_SERVICES} from '../../config/config';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {ObjectMuseum} from '../../classes/object';

@Injectable({
  providedIn: 'root'
})
export class ObjectsService {

  urlObjects = `${URL_SERVICES}/objects`;

  constructor(public http: HttpClient) {
  }

  listObjects() {
    return this.http.get(this.urlObjects);
  }

  createObject(object: ObjectMuseum) {
    const body = object;
    const headers = new HttpHeaders().append('Content-Type', 'application/json');
    return this.http.post(this.urlObjects, JSON.stringify(body), {headers});
  }

  updateObject(object: ObjectMuseum, idObject) {
    const body = {
      data: 'Aqui va la data'
    };
    return this.http.put(this.urlObjects, body);
  }
}
