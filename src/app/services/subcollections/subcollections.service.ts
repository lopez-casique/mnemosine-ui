import { Injectable } from '@angular/core';
import {URL_SERVICES} from '../../config/config';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {ObjectMuseum} from '../../classes/object';

@Injectable({
  providedIn: 'root'
})
export class SubcollectionsService {

  urlSubcollections = `${URL_SERVICES}/subcollections`;

  constructor(public http: HttpClient) {
  }

  listSubcollections() {
    return this.http.get(this.urlSubcollections);
  }

  createSubcollection(subcollection) {
    const body = subcollection;
    const headers = new HttpHeaders().append('Content-Type', 'application/json');
    return this.http.post(this.urlSubcollections, JSON.stringify(body), {headers});
  }

  updateSubcollection(subcollection, idObject) {
    const body = {
      data: 'Aqui va la data'
    };
    return this.http.put(this.urlSubcollections, body);
  }
}
