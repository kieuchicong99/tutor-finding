import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tutor-card',
  templateUrl: './tutor-card.component.html',
  styleUrls: ['./tutor-card.component.css']
})
export class TutorCardComponent implements OnInit {
  @Input() tutor ;
  @Input() color :string;


  constructor(public router:Router ) { }

  movetoDetail(){
    this.router.navigateByUrl('tim-gia-su/chitiet');
  }


  listTutor = []

  ngOnInit() {
  }

}
