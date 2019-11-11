import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tutor',
  templateUrl: './tutor.component.html',
  styleUrls: ['./tutor.component.css']
})
export class TutorComponent implements OnInit {
  @Input() tutors =[] ;

  tutor_show =[this.tutors[1],this.tutors[2],this.tutors[3]]

  tutor ;

  index =0;
  slide_left(){
    console.log(1);
    if(this.index >0)
    this.tutor = this.tutor[this.index-1]
    this.tutor_show.shift()
    this.tutor_show.unshift(this.tutor)
    this.index --;

  }


  slide_right(){
    console.log(2);
    if(this.index===this.tutors.length){
      this.tutor = this.tutor[this.index%3]
    }
  }



  constructor(public router:Router ) { }



  ngOnInit() {
  }

}
