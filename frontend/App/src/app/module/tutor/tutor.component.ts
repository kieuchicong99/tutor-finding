import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tutor',
  templateUrl: './tutor.component.html',
  styleUrls: ['./tutor.component.css']
})
export class TutorComponent implements OnInit {
   // @Input() id: number;
  // @Input() name: string;
  // @Input() address: string;
  // @Input() class: string;
  // @Input() renter: number;
  // @Input() description: string;
  // @Input() link: string;
  // @Input() img: string;

  id = 1;
  name = 'Cuong Tong';
  address = 'Ha Noi';
  class = 'Toan, Ly';
  description = 'Vui ve, hoa dong';
  renter = 120000;
  link = 'https://google.com';
  img = 'https://img.etimg.com/thumb/msid-68333505,width-643,imgsize-204154,resizemode-4/googlechrome.jpg';

  constructor(public router:Router ) { }

  movetoDetail(){
    this.router.navigateByUrl('tim-gia-su/chitiet');
  }

  ngOnInit() {
  }

}
