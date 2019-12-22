import { Component, OnInit } from '@angular/core';
import { StudentService } from '../../../../service/student.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-student-profile',
  templateUrl: './student-profile.component.html',
  styleUrls: ['./student-profile.component.css']
})
export class StudentProfileComponent implements OnInit {

  constructor(public service: StudentService,public toastr: ToastrService) {
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
    await this.service.getProfile(user.id_phu_huynh).then(res=>{
      this.profile = res
      console.log("12345:",this.profile)
    })

  }

  ngOnInit() {
  }

}
