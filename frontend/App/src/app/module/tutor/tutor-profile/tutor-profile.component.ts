import { Component, OnInit, Input } from '@angular/core';
import { DefaultService } from '../../../service/default.service';

@Component({
  selector: 'app-tutor-profile',
  templateUrl: './tutor-profile.component.html',
  styleUrls: ['./tutor-profile.component.css']
})
export class TutorProfileComponent implements OnInit {

  constructor(public service : DefaultService) {}

  content = "Toi da co bang ABRSM Grade 8 Piano nhung toi chua co kinh nghiem di day co gi phu huynh va hoc sinh thong cam giup toi!!!!!"
  content1 = "Chua cap nhat"

  public profile_tutor={
    name:"Tran Hoang Phuong",
    subject:"Tieng Anh",
    dob:"07/02/1997",
    gender: "Nu",
    view: "4",
    update: "29/07/2019",
    type: "Sinh vien",
    marital: "Doc than",
    cost:"Từ 100,000 vnđ/buổi",
    area:"Ho Chi Minh",
    phone:"0000",
    add:"XXXX",
    method:"Gia su tai nha",
    email:"abc",
  }

  schedule:Array<DaySchedule>=[
    {name:"Thứ hai",morning:false, afternoon:false, night:false},
    {name:"Thứ ba",morning:false, afternoon:false, night:false},
    {name:"Thứ tư",morning:false, afternoon:false, night:false},
    {name:"Thứ năm",morning:false, afternoon:false, night:false},
    {name:"Thứ sáu",morning:false, afternoon:false, night:false},
    {name:"Thứ bảy",morning:false, afternoon:false, night:false},
    {name:"Chủ nhật",morning:false, afternoon:false, night:false},

  ]

  @Input()id:number;
  ngOnInit() {
    //get api profile tutor
    // this.profile_tutor = this.service.getProfileTutor(this.id)
  }

}
