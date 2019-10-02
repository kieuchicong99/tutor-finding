import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-find-tutor',
  templateUrl: './find-tutor.component.html',
  styleUrls: ['./find-tutor.component.css']
})
export class FindTutorComponent implements OnInit {
  // @Input() title: string;
  // @Input() detail: string;
  // @Input() wage: number;
  // @Input() subject: string;
  // @Input() address: string;

  title = "Chào mừng đến với abcxyz"
  detail = "Cần tìm gia sư làm chuyện ấy, nam nữ không quan trọng. Địa chỉ số xyz Duy HƯng Chan ..."
  wage = 10000
  subject = "Chuyện khó nói  "
  address = "Hà Nội  "
   
  constructor(public router:Router ) { }

  movetoDetail(){
    this.router.navigateByUrl('tim-lop-gia-su/chitiet');
  }

  ngOnInit() {
  }

}
