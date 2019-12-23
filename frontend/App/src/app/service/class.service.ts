import { Injectable } from '@angular/core';
import { CommonService } from './parttern.service';
import { SignUp } from '../model/SignUp.model';
import { NewClass } from "../model/NewClass.model";

@Injectable()
export class ClassService extends CommonService {

  createClass(new_class : NewClass):Promise<boolean>{
    return this.http
      .post("/api/class", JSON.stringify(new_class), { headers: this.headers })
      .toPromise()
      .then(res => {
    
        return res.json().success;

      })
      .catch();

  }
}
