import { Component, OnInit } from '@angular/core';
import { TutorService } from '../../../../service/user.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-tutor-info',
  templateUrl: './tutor-info.component.html',
  styleUrls: ['./tutor-info.component.css']
})
export class TeacherInfoComponent implements OnInit {

  constructor(public service: TutorService,public toastr: ToastrService) {
    this.getProfile()
  }

  public profile
  async submit(){
    await this.service.updateProfile(this.profile).then(res=>{
      console.log("res222:",res)
      if(res===true){
        this.toastr.success('Cập nhật thành công!', 'ddd  ' ,{
          timeOut: 3000
        });

      }
      if(res===false){
        this.toastr.success('Cập nhật thất bại!', ' ddd  ' ,{
          timeOut: 3000
        });

      }
    })

  }

  async getProfile(){
    let user = JSON.parse(localStorage.getItem("user"))
    await this.service.getProfile(user.id_gia_su).then(res=>{
      this.profile = res
      console.log("12345:",this.profile)
    })

  }

  ngOnInit() {

  }

}
