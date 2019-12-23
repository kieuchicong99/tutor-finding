import { Component, OnInit } from '@angular/core';
import { ClassService } from '../../../../../service/class.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-new-class',
  templateUrl: './new-class.component.html',
  styleUrls: ['./new-class.component.css']
})
export class NewClassComponent implements OnInit {

  constructor(public service: ClassService, public toastr: ToastrService) {
    this.new_class =  {
      id_phu_huynh: '',
      trang_thai:'',
      mo_ta: '',
      mon_hoc: '',
      hinh_thuc_day: '',
      yeu_cau_gioi_tinh: '',
      so_buoi_hoc_moi_tuan: '',
      so_gio_moi_buoi: '',
      gia_thue_moi_buoi: '',
      dia_chi: '',
    }
  }

  public new_class

  async submit() {
    await this.service.createClass(this.new_class).then(res => {
      console.log("res222:", res)
      if (res === true) {
        this.toastr.success('Tạo lớp thành công!');

      }
      if (res === false) {
        this.toastr.success('Tạo lớp thất bại!');

      }
    })

  }


  ngOnInit() {
  }

}
