import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-class',
  templateUrl: './class.component.html',
  styleUrls: ['./class.component.css']
})
export class ClassComponent implements OnInit {

  constructor() { }

  public listClass =[

    {
    title:"Tìm gia sư dạy toán",
    discription:"cần tìm gia sư nữ dạy môn toán lớp 2",
    subject:"Toán",
    method:"Gặp mặt",
    address:"Hà Nội",
    salary:"1000",
    time:"24/10/2019"
  },
  {
    title:"Tìm gia sư dạy english",
    subject:"english",
    method:"Gặp mặt",
    address:"Hà Nội",
    salary:"1000",
    time:"24/10/2019"
  },
  {
    title:"Tìm gia sư dạy france",
    subject:"Toán",
    method:"Gặp mặt",
    address:"Hà Nội",
    salary:"1000",
    time:"24/10/2019"
  }
]

  ngOnInit() {
  }

}
