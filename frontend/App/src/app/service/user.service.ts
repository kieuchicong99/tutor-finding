import { Tutor, TutorProfile } from "../model/Tutor.model";
import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

@Injectable()
export class TutorService{
  public headers = new Headers({ 'Content-Type': 'application/json' });
  constructor(public http: Http) {

  }
  getProfile(id_gia_su):Promise<TutorProfile>{
    return this.http
      .get("/api/tutors/"+ id_gia_su, { headers: this.headers })
      .toPromise()
      .then(res => {
        console.log("test res:",res.json().data)
        localStorage.setItem("profile",JSON.stringify(res.json().data))
        return res.json().data;

      })
      .catch();

  }
  updateProfile(frofile: Tutor):Promise<TutorProfile>{
    return this.http
      .post("/api/updatetutor/", JSON.stringify(frofile), { headers: this.headers })
      .toPromise()
      .then(res => {
        localStorage.setItem("profile",JSON.stringify(res.json().data))
        return res.json().data;

      })
      .catch();

  }
}
