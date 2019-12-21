import { Component, OnInit, Input } from '@angular/core';
import { DefaultService } from '../../../service/default.service';

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
    subject:"Tran Hoang Phuong",



  }
  @Input()id:number;
  ngOnInit() {
    //get api profile tutor
    // this.profile_tutor = this.service.getProfileTutor(this.id)
  }

}
