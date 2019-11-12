import { SignIn } from '../model/SignIn.model';
import { Injectable } from '@angular/core';
import { CommonService } from './parttern.service';

@Injectable()
export class DefaultService extends CommonService {

  getDefaultListTutor() {
    return this.http
      .get('/api/default/tutor-list', { headers: this.headers })
      .toPromise()
      .then(res => {
        return res.json()
      })
      .catch();

  }
  getProfileTutor(id:number){
    return this.http
      .get('/api/default/tutor-profile', { headers: this.headers })
      .toPromise()
      .then(res => {
        return res.json()
      })
      .catch();

  }

}
