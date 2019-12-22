import { StudentProfile } from "../model/Student.model";
import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

@Injectable()
export class StudentService{
  public headers = new Headers({ 'Content-Type': 'application/json' });
  constructor(public http: Http) {

  }
  getProfile(id_phu_huynh):Promise<StudentProfile>{
    return this.http
      .get("/api/student/"+ id_phu_huynh, { headers: this.headers })
      .toPromise()
      .then(res => {
        console.log("test res:",res.json().data)
        localStorage.setItem("profile",JSON.stringify(res.json().data))
        return res.json().data;

      })
      .catch();

  }
  updateProfile(profile):Promise<boolean>{
    return this.http
      .post("/api/updatestudent/", JSON.stringify(profile), { headers: this.headers })
      .toPromise()
      .then(res => {
    
        return res.json().success;

      })
      .catch();

  }
}
