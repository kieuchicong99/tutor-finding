import { SignIn } from '../model/SignIn.model';
import { Injectable } from '@angular/core';
import { CommonService } from './parttern.service';

@Injectable()
export class SignInService extends CommonService {

  signIn(user: SignIn ) {
    return this.http
      .post('/api/signin', JSON.stringify(user), { headers: this.headers })
      .toPromise()
      .then(res => {
        return res.json()
      })
      .catch();

  }

}
