import { Component, OnInit , Input } from '@angular/core';
import { browser } from 'protractor';

@Component({
  selector: 'app-card-class',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  constructor() { }

  @Input() listClass /*={
    title:"Tìm gia sư dạy toán",
    subject:"Toán",
    method:"Gặp mặt",
    address:"Hà Nội",
    salary:"1000",
    time:"24/10/2019"

  }*/

  ngOnInit() {
  }

}
