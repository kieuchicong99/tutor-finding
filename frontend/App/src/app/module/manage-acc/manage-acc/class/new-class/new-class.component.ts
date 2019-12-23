import { Component, OnInit } from '@angular/core';
import { ClassService } from '../../../../../service/class.service';
import { ToastrService } from 'ngx-toastr';
import { StudentService } from '../../../../../service/student.service';

@Component({
  selector: 'app-new-class',
  templateUrl: './new-class.component.html',
  styleUrls: ['./new-class.component.css']
})
export class NewClassComponent implements OnInit {

  constructor(public service: ClassService, public toastr: ToastrService, public contact: StudentService) { 
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

    this.new_class = {
      id_phu_huynh:0,
      trang_thai: '',
      mo_ta: '',
      mon_hoc: '',
      hinh_thuc_day: '',
      yeu_cau_gioi_tinh: '',
      so_buoi_hoc_moi_tuan: 0,
      so_gio_moi_buoi: 0,
      gia_thue_moi_buoi: 0,
      dia_chi: '',
    }
  }

  public new_class
  public profile
  submit() {
    this.service.createClass(this.new_class).then(res => {
      console.log("res222:", res)
      if (res === true) {
        this.toastr.success('Tạo lớp thành công!', 'ddd  ', {
          timeOut: 3000
        });

      }
      if (res === false) {
        this.toastr.success('Tạo lớp thất bại!', ' ddd  ', {
          timeOut: 3000
        });

      }
    })
  }

  async getProfile() {
    let user = JSON.parse(localStorage.getItem("user"))
    await this.contact.getProfile(user.id_phu_huynh).then(res => {
      this.profile = res
      console.log("12345:", this.profile)
    })

  }


  async ngOnInit() {
    await this.getProfile()

  }

}
