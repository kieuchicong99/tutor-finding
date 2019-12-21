import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tutor-profile',
  templateUrl: './tutor-profile.component.html',
  styleUrls: ['./tutor-profile.component.css']
})
export class TutorProfileComponent implements OnInit {

  constructor(public service : DefaultService) {}

  content = "Toi da co bang ABRSM Grade 8 Piano nhung toi chua co kinh nghiem di day co gi phu huynh va hoc sinh thong cam giup toi!!!!!"

  public profile_tutor={
    name:"Tran Hoang Phuong",
    subject:"Tieng Anh",
    

  }

  ngOnInit() {
  }

}
