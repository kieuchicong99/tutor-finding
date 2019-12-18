import { SignIn } from '../model/SignIn.model';
import { Injectable } from '@angular/core';
import { CommonService } from './parttern.service';

@Injectable()
export class SignInService extends CommonService {

  signIn(role,user: SignIn ) {
    if(role===1){
      return this.http
      .post('/signin/', JSON.stringify(user), { headers: this.headers })
      .toPromise()
      .then(res => {
        localStorage.setItem("user",JSON.stringify(res.json().data))
        return res.json()
      })
      .catch();
    }

    if(role===2){
      return this.http
      .post('/signinstudent/', JSON.stringify(user), { headers: this.headers })
      .toPromise()
      .then(res => {
        localStorage.setItem("user",JSON.stringify(res.json().data))
        return res.json()
      })
      .catch();
    }

  }

}
