import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manage-acc',
  templateUrl: './manage-acc.component.html',
  styleUrls: ['./manage-acc.component.css']
})
export class ManageAccComponent implements OnInit {



  constructor() {
    this.getConfig()
  }
  public config={
    routes:[
    {
      route:"/manage-acc/profile",
      name:'Quản lý tài khoản',
      icon:'account'
    }


  ]}

  getConfig(){
    let role = JSON.parse(localStorage.getItem("user"))
    if(role===1){
      //role=1 thi user la tai khoan gia su
      this.config={
        routes:[
          {
            route:"/manage-acc/profile",
            name:'Quản lý tài khoản',
            icon:'account'
          }

        ]
      }
    }
    //role=2 thi user la tai khoan hoc sinh
    this.config={
      routes:[
        {
          route:"/manage-acc/profile1",
          name:'Quản lý tài khoản',
          icon:'account'
        },
        {
          route:"/manage-acc/quan-ly-lop-hoc",
          name:"Quản lý lớp học",
          icon:'business'

        },
        {
          route:"/manage-acc/tutor-request",
          name:"Gia sư đã mời",
          icon:'assignment_returned'
        },
        {
          route:"/manage-acc/tutor-is-requested",
          name:"Gia sư đề nghị",
          icon:'assignment_turned_in'
        }




      ]
    }


  }

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
