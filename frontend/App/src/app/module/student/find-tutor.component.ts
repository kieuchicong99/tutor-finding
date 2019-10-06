import { Component, OnInit, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Tutor } from '../../model/Tutor.model';

@Component({
  selector: 'app-find-tutor',
  templateUrl: './find-tutor.component.html',
  styleUrls: ['./find-tutor.component.css']
})
export class FindTutorComponent implements OnInit {

  @Output() tutor;
  ngOnInit() {
  }

  public tutor_kind =["Gia sư tiếng anh", "Gia sư toán", "Gia sư văn", "Gia sư vật lý"]

  public tutors:Array<Tutor> =[{
    "title" : "Tìm gia sư dạy toán tiểu học",
    "detail" : "Cần tìm gia sư cho 2 bé tuổi, dạy viết, luyện chữ ...",
    "wage" : 10000,
    "subject" : "Chuyện khó nói  ",
    "address" : "Hà Nội  ",
    "require" :"Gặp mặt"

  },
  {
    "title" : "Tìm gia sư luyện thi đại học",
    "detail" : "Việc làm 123 đăng tin giúp Gia đình ở khu vực 136 hồ tùng mậu cần tìm gia sư toán. Tiếng anh. Tiếng trung cho con gái lớp 5",
    "wage" : 10000,
    "subject" : "Chuyện khó nói  ",
    "address" : "Hà Nội  ",
    "require" :"Gặp mặt"

  },
  {
    "title" : "Cần tìm gia sư toán lớp 2 tại Quảng Ninh",
    "detail" : "Việc làm 123 đăng tin giúp cần tìm gia sư toán cho bé lớp 2. Địa chỉ Cẩm Phả, Quảng Ninh. Bé học hơi kém môn toán lên cần tìm gấp ạ. Không mất phí",
    "wage" : 10000,
    "subject" : "Chuyện khó nói  ",
    "address" : "Quảng Ninh",
    "require" :"Gặp mặt"

  }
]



  constructor(public router:Router ) { }

  movetoDetail(){
    this.router.navigateByUrl('tim-lop-gia-su/chitiet');
  }


}
