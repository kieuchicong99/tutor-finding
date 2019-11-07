import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  slides : [
    {id : 1, name : 'Cuong Tong 1', address : 'Ha Noi1', class : 'Toan, Hoa', description : 'Vui ve, hoa dong, thich mau hong, ghet su gia doi, sơ trường ăn uống ',renter : 120000,link : 'https://google.com',img : 'https://img.etimg.com/thumb/msid-68333505,width-643,imgsize-204154,resizemode-4/googlechrome.jpg'},
    {id : 2, name : 'Cuong Tong 2', address : 'Ha Noi2', class : 'Toan, Sinh', description : 'Vui ve, hoa dong, thich mau hong, ghet su gia doi, sơ trường ăn uống ',renter : 120000,link : 'https://google.com',img : 'https://img.etimg.com/thumb/msid-68333505,width-643,imgsize-204154,resizemode-4/googlechrome.jpg'},
    {id : 3, name : 'Cuong Tong 3', address : 'Ha Noi3', class : 'Toan, vvv', description : 'Vui ve, hoa dong, thich mau hong, ghet su gia doi, sơ trường ăn uống ',renter : 120000,link : 'https://google.com',img : 'https://img.etimg.com/thumb/msid-68333505,width-643,imgsize-204154,resizemode-4/googlechrome.jpg'},
    {id : 4, name : 'Cuong Tong 4', address : 'Ha Noi4', class : 'Toan, Ly', description : 'Vui ve, hoa dong, thich mau hong, ghet su gia doi, sơ trường ăn uống ',renter : 120000,link : 'https://google.com',img : 'https://img.etimg.com/thumb/msid-68333505,width-643,imgsize-204154,resizemode-4/googlechrome.jpg'},
    {id : 5, name : 'Cuong Tong 5', address : 'Ha Noi5', class : 'Toan, Âm nhạc', description : 'Vui ve, hoa dong, thich mau hong, ghet su gia doi, sơ trường ăn uống ',renter : 120000,link : 'https://google.com',img : 'https://img.etimg.com/thumb/msid-68333505,width-643,imgsize-204154,resizemode-4/googlechrome.jpg'},
    {id : 6, name : 'Cuong Tong 6', address : 'Ha Noi6', class : 'Toan, Mỹ Thuật', description : 'Vui ve, hoa dong, thich mau hong, ghet su gia doi, sơ trường ăn uống ',renter : 120000,link : 'https://google.com',img : 'https://img.etimg.com/thumb/msid-68333505,width-643,imgsize-204154,resizemode-4/googlechrome.jpg'},
    {id : 7, name : 'Cuong Tong 7', address : 'Ha Noi7', class : 'Toan, xxx', description : 'Vui ve, hoa dong, thich mau hong, ghet su gia doi, sơ trường ăn uống ',renter : 120000,link : 'https://google.com',img : 'https://img.etimg.com/thumb/msid-68333505,width-643,imgsize-204154,resizemode-4/googlechrome.jpg'},
    {id : 8, name : 'Cuong Tong 8', address : 'Ha Noi8', class : 'Toan', description : 'Vui ve, hoa dong, thich mau hong, ghet su gia doi, sơ trường ăn uống ',renter : 120000,link : 'https://google.com',img : 'https://img.etimg.com/thumb/msid-68333505,width-643,imgsize-204154,resizemode-4/googlechrome.jpg'},
  ]

  slideConfig : {"slidesToShow": 3, "slidesToScroll": 1};

  next(){

  }
  prev(){

  }
  
  
}
