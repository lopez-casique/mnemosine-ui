import { Injectable } from '@angular/core';
import {URL_SERVICES} from '../../config/config';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppraisalService {

  urlAppraisal = `${URL_SERVICES}/appraisal`;

  constructor(public http: HttpClient) {
  }

  listAppraisalHistory() {
    return this.http.get(this.urlAppraisal);
  }

  createAppraisalHistory(appraisal) {
    const body = {
      data: 'Aqui va la data'
    };
    return this.http.post(this.urlAppraisal, body);
  }

  updateAppraisal(appraisal) {
    const body = {
      data: 'Aqui va la data'
    };
    return this.http.put(this.urlAppraisal, body);
  }
}
