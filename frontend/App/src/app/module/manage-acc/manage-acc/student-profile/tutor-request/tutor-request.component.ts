import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tutor-request',
  templateUrl: './tutor-request.component.html',
  styleUrls: ['./tutor-request.component.css']
})
export class TutorRequestComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  public listTutorRequest =[
    {
      name:"Kieu chi cong",
      subject:"Toan",
      method:"Online",
      cost:100000,
      create_at:"20/11/2019",
      status:"pending"

    },
    {
      name:"Kieu chi cong",
      subject:"Toan",
      method:"Online",
      cost:100000,
      create_at:"20/11/2019",
      status:"pending"

    },
    {
      name:"Kieu chi cong",
      subject:"Toan",
      method:"Online",
      cost:100000,
      create_at:"20/11/2019",
      status:"pending"

    },
    {
      name:"Kieu chi cong",
      subject:"Toan",
      method:"Online",
      cost:100000,
      create_at:"20/11/2019",
      status:"pending"

    },
    {
      name:"Kieu chi cong",
      subject:"Toan",
      method:"Online",
      cost:100000,
      create_at:"20/11/2019",
      status:"pending"

    }
  ]

}
