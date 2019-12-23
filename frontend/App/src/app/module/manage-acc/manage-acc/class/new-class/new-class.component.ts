import { Component, OnInit } from '@angular/core';
import { ClassService } from '../../../../../service/class.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-new-class',
  templateUrl: './new-class.component.html',
  styleUrls: ['./new-class.component.css']
})
export class NewClassComponent implements OnInit {

  constructor(public service: ClassService, public toastr: ToastrService) { }

  // public new_class = {
  //   demand_content: '',
  //   type_tutor: '',
  //   subject: '',
  //   sex_tutor: '',
  //   num_student: 1,
  //   method: '',
  //   time_for_one: '',
  //   schedule: '',
  //   cost: '',
  //   address: '',
  //   address_detail: '',
  //   description: '',
  //   phone: '',
  //   email: '',
  // }

  // public type_tutors = [
  //   { key: "none", value: "--Không yêu cầu--" },
  //   { key: "sinh_vien", value: "Sinh viên" },
  //   { key: "hoc_sinh", value: "Học sinh" },
  //   { key: "giao_vien_c1", value: "Giáo viên cấp 1 " },
  //   { key: "giao_vien_c2", value: "Giáo viên cấp 2" },
  //   { key: "giao_vien_c3", value: "Giáo viên cấp 3" },
  //   { key: "giang_vien", value: "Giảng viên đại học" },
  // ]

  // public subjects = [
  //   { key : "toan", value : "Toán"},
  //   { key : "ly", value : "Lý"},
  //   { key : "hoa", value : "Hóa"},
  //   { key : "van", value : "Văn"},
  //   { key : "sinh", value : "Sinh"},
  //   { key : "su", value : "Sử"},
  //   { key : "dia", value : "Địa"},
  //   { key : "tieng_anh", value : "Tiếng anh"},
  // ]

  // public addresses = [
  //   { key : "ha_noi", value : "Hà Nội"},
  //   { key : "ho_chi_minh", value : "Hồ Chí Minh"},
  // ]

  public new_class

  async submit() {
    await this.service.createClass(this.new_class).then(res => {
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


  ngOnInit() {
  }

}
