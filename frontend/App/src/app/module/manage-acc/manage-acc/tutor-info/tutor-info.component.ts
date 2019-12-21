import { Component, OnInit } from '@angular/core';
import { TutorService } from '../../../../service/user.service';

@Component({
  selector: 'app-tutor-info',
  templateUrl: './tutor-info.component.html',
  styleUrls: ['./tutor-info.component.css']
})
export class TeacherInfoComponent implements OnInit {

  constructor(public service: TutorService) { }

  public profile
  async submit(){
    await this.service.updateProfile(this.profile)
  }

  async getProfile(){
    let user = JSON.parse(localStorage.getItem("user"))
    await this.service.getProfile(user.id_gia_su).then(res=>{
      this.profile = res
      console.log("12345:",this.profile)
    })

  }

  ngOnInit() {
    this.getProfile()
    console.log(this.profile)
  }

}
