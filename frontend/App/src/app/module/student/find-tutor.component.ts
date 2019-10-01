import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-find-tutor',
  templateUrl: './find-tutor.component.html',
  styleUrls: ['./find-tutor.component.css']
})
export class FindTutorComponent implements OnInit {
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

  constructor() { }

  ngOnInit() {
  }

}
