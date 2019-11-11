import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tutor-card',
  templateUrl: './tutor-card.component.html',
  styleUrls: ['./tutor-card.component.css']
})
export class TutorCardComponent implements OnInit {
   @Input() tutor ;


  id = 1;
  name = 'Cuong Tong';
  address = 'Ha Noi';
  class = 'Toan, Ly';
  description = 'Vui ve, hoa dong, thich mau hong, ghet su gia doi, sơ trường ăn uống ';
  renter = 120000;
  link = 'https://google.com';
  img = 'https://img.etimg.com/thumb/msid-68333505,width-643,imgsize-204154,resizemode-4/googlechrome.jpg';

  constructor(public router:Router ) { }

  movetoDetail(){
    this.router.navigateByUrl('tim-gia-su/chitiet');
  }


  listTutor = []

  ngOnInit() {
  }

}
