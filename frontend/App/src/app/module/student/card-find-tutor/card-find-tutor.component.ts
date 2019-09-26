import { Component, OnInit } from '@angular/core';
import { DaySchedule } from '../../../model/day.model';

@Component({
  selector: 'app-card-find-tutor',
  templateUrl: './card-find-tutor.component.html',
  styleUrls: ['./card-find-tutor.component.css']
})
export class CardFindTutorComponent implements OnInit {

  constructor() { }

  content ="Việc làm 123 đăng tin giúp Mình tìm gia sư nữ môn tiếng Anh cho em gái đang học lớp 11, định hướng thi Đại học khối D. Học tiếng Nhật từ bé nhưng tiếng Anh vẫn ổn, điểm trên lớp dao động 8,9. Chăm chỉ và ngoan. Mình mong muốn tìm được gia sư tận tâm, dạy cứng, và có khả năng dạy lâu dài cho đến khi em mình thi ĐH. Học phí 160k-220k/b với các bạn đang là sinh viên hoặc đã ra trường, 250k-300k với giáo viên. Địa chỉ nhà ở Yên Phụ, Tây Hồ. Không mất phí"
  schedule:Array<DaySchedule>=[
    {name:"Thứ hai",morning:false, afternoon:false, night:false},
    {name:"Thứ ba",morning:false, afternoon:false, night:false},
    {name:"Thứ tư",morning:false, afternoon:false, night:false},
    {name:"Thứ năm",morning:false, afternoon:false, night:false},
    {name:"Thứ sáu",morning:false, afternoon:false, night:false},
    {name:"Thứ bảy",morning:false, afternoon:false, night:false},
    {name:"Chủ nhật",morning:false, afternoon:false, night:false},

  ]

  ngOnInit() {
  }

}
