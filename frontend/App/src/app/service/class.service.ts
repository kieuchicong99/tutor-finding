import { Injectable } from '@angular/core';
import { CommonService } from './parttern.service';
import { SignUp } from '../model/SignUp.model';

@Injectable()
export class ClassService extends CommonService {

  createClass(new_class){
    return this.http
      .post('/api/student/create_class', JSON.stringify(new_class), { headers: this.headers })
      .toPromise()
      .then(res => {
        return res.json().data
      })
      .catch();

  }
}
