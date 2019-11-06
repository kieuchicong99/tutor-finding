import { Component, OnInit } from '@angular/core';
import { ClassService } from '../../../../../service/class.service';

@Component({
  selector: 'app-new-class',
  templateUrl: './new-class.component.html',
  styleUrls: ['./new-class.component.css']
})
export class NewClassComponent implements OnInit {

  constructor(public service: ClassService) { }

  public new_class = {
    demand_content: '',
    type_tutor: '',
    subject: '',
    sex_tutor: '',
    num_student: 1,
    method: '',
    time_for_one: '',
    schedule: '',
    cost: '',
    address: '',
    note: '',
    phone: '',
    email: ''

  }

  public type_tutors = [
    { key: "none", value: "--Không yêu cầu--" },
    { key: "sinh_vien", value: "Sinh viên" },
    { key: "hoc_sinh", value: "Học sinh" },
    { key: "giao_vien_c1", value: "Giáo viên cấp 1 " },
    { key: "giao_vien_c2", value: "Giáo viên cấp 2" },
    { key: "giao_vien_c3", value: "Giáo viên cấp 3" },
    { key: "giang_vien", value: "Giảng viên đại học" },
  ]

  createClass() {
    console.log(this.new_class)
    this.service.createClass(this.new_class).then(res => {
      console.log("res:", res);

    });
  }

  ngOnInit() {
  }

}
