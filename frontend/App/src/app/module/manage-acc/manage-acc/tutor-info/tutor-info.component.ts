import { Component, OnInit } from '@angular/core';
import { TutorService } from '../../../../service/user.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-tutor-info',
  templateUrl: './tutor-info.component.html',
  styleUrls: ['./tutor-info.component.css']
})
export class TeacherInfoComponent implements OnInit {

  constructor(public service: TutorService, private toastr: ToastrService) {
    //khoi tao cho profile tranh loi khi view hien ra truoc khi api lay duoc du lieu
    this.profile=  {
      id_gia_su:0,
      ho_ten: '',
      mat_khau:'',
      phone:'',
      email:'',
      ngay_sinh:'',
      gioi_tinh:'',
      gioi_thieu:'',
      hinh_dai_dien_url:'',
      dia_chi:'',
      khu_vuc_day:'',
      hoc_phi_gs:'',
      hinh_thuc_day:'',
      kinh_nghiem:'',
      buoi_day:'',
      hoc_truong:'',
      chuyen_nganh:'',
      nam_tot_nghiep:'',
      cv_hien_tai:'',
      thanh_tich:'',
      mon_hoc:'',
      thong_tin_them:'',
    }


  }

  public profile
  submit(){
    this.service.updateProfile(this.profile).then(res=>{
      console.log("res222:",res)
      if(res===true){
          let a =this.toastr.success("Cập nhật thành công!")
          console.log(a)
      }
      if(res===false){
        this.toastr.success("Cập nhật thất bại!")

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

  async ngOnInit() {
    await this.getProfile()

  }

}
