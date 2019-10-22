import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manage-acc',
  templateUrl: './manage-acc.component.html',
  styleUrls: ['./manage-acc.component.css']
})
export class ManageAccComponent implements OnInit {



  constructor() { }


  ngOnInit() {
  }
  public default = true;
  manageTutor(){
    if (this.default== true){
      this.default= false;
    }
    else{
      this.default = true;
    }
  }
}
