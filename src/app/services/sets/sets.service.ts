import { Injectable } from '@angular/core';
import {URL_SERVICES} from '../../config/config';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SetsService {

  urlSets = `${URL_SERVICES}/sets`;

  constructor(public http: HttpClient) {
  }

  listSets() {
    return this.http.get(this.urlSets)
      .pipe(
        map((res: any) => res.data)
      );
  }

  getSet(id) {
    return this.http.get(`${this.urlSets}/${id}`)
      .pipe(
        map((res: any) => res.data)
      );
  }

  createSets(set) {
    const body = set;
    const headers = new HttpHeaders().append('Content-Type', 'application/json');
    return this.http.post(this.urlSets, JSON.stringify(body), {headers});
  }

  updateSet(set, idSet) {
    const body = set;
    const headers = new HttpHeaders().append('Content-Type', 'application/json');
    return this.http.put(`${this.urlSets}/${idSet}`, JSON.stringify(body), {headers});
  }
}
