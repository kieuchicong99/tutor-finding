import { CommonService } from "./parttern.service";
import { SignUp } from "../model/SignUp.model";
import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

@Injectable()
export class SignUpService{
  public headers = new Headers({ 'Content-Type': 'application/json' });
  constructor(public http: Http) {

  }
  signUp(role,user: SignUp):Promise<SignUp>{
    if (role === 1) {
      return this.http
        .post("/api/tutor/", JSON.stringify(user), { headers: this.headers })
        .toPromise()
        .then(res => {
          localStorage.setItem("user",JSON.stringify(res.json().data))
          return res.json().data;

        })
        .catch();
    }
    if (role === 2) {
      return this.http
        .post("/api/student/", JSON.stringify(user), { headers: this.headers })
        .toPromise()
        .then(res => {
          localStorage.setItem("user",JSON.stringify(res.json().data))
          return res.json().data;
        })
        .catch();
    }
  }
}
