import { Injectable } from '@angular/core';
import { CommonService } from './parttern.service';
import { SignUp } from '../model/SignUp.model';

@Injectable()
export class SignUpService extends CommonService {

  signUp(user:SignUp){
    return this.http
      .post('/api/signup', JSON.stringify(user), { headers: this.headers })
      .toPromise()
      .then(res => {
        return res.json().data
      })
      .catch();

  }
}
