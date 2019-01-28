import { Injectable } from '@angular/core';
import {URL_SERVICES} from '../../config/config';
import {HttpClient} from '@angular/common/http';
import {Community} from '../../classes/community';

@Injectable({
  providedIn: 'root'
})
export class CommunitiesService {

  urlCommunities = `${URL_SERVICES}/communities`;

  constructor(public http: HttpClient) {
  }

  listCommunitie() {
    return this.http.get(this.urlCommunities);
  }

  createCommunity(community: Community) {
    const body = {
      data: 'Aqui va la data'
    };
    return this.http.post(this.urlCommunities, body);
  }

  updateCommunity(community: Community) {
    const body = {
      data: 'Aqui va la data'
    };
    return this.http.put(this.urlCommunities, body);
  }
}
