import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-find-tutor',
  templateUrl: './find-tutor.component.html',
  styleUrls: ['./find-tutor.component.css']
})
export class FindTutorComponent implements OnInit {
   
  constructor(public router:Router ) { }

  movetoDetail(){
    this.router.navigateByUrl('tim-lop-gia-su/chitiet');
  }

  ngOnInit() {
  }

}
