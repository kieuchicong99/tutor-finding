import { Component, OnInit, ViewChild } from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs';
import 'rxjs/add/operator/map';
import { Field } from './model/field.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent implements OnInit {
  // @ViewChild('slideshow') slideshow: any;
  etc = "hello world"
  imageSources=[
    "assets/slider/1.jpg",
    "assets/slider/2.jpg",
    "assets/slider/3.jpg",
    "assets/slider/4.jpg",
    "assets/slider/5.jpg",
    "assets/slider/6.jpg",
    "assets/slider/7.jpg",
    this.etc

  ]

  subject_field:Array<Field>= [
    {name:"Toán",value:false},
    {name:"Lý",value:false},
    {name:"Hóa",value:false},
    {name:"Văn",value:false},
    {name:"Anh",value:false},
    {name:"Sinh",value:false},
    {name:"Sử",value:false},
    {name:"Địa",value:false},
    {name:"Tin",value:false} ]

  grade_field:Array<Field>= [
      {name:"Lớp 1",value:false},
      {name:"Lớp 2",value:false},
      {name:"Lớp 3",value:false},
      {name:"Lớp 4",value:false},
      {name:"Lớp 5",value:false},
      {name:"Lớp 6",value:false},
      {name:"Lớp 7",value:false},
      {name:"Lớp 8",value:false},
      {name:"Lớp 9",value:false},
      {name:"Lớp 10",value:false},
      {name:"Lớp 11",value:false},
      {name:"Lớp 12",value:false} ]

    provin_field:Array<Field>= [
      {name:"Hà Nội",value:false},
      {name:"Hồ Chí Minh",value:false},
      {name:"Đắc Lắc",value:false},
      {name:"Nam Định",value:false},
      {name:"Nghệ An",value:false},
      {name:"Hà Tĩnh",value:false},
      {name:"Ninh Bình",value:false},
      {name:"Lạng Sơn",value:false},
      {name:"Cao Bằng",value:false},
      {name:"Thái Bình",value:false},
      {name:"Bình Dương",value:false},
      {name:"Cà Mau",value:false},
      {name:"Yên Bái",value:false},
      {name:"Thanh Hóa",value:false},
      {name:"Đà Nẵng",value:false},
      {name:"Sơn La",value:false},
      {name:"Điện Biên",value:false},
      ]

  public user_detail = false
  public name ;
  showUserDetail(){
    if(this.user_detail ==false)
      this.user_detail = true;
    else this.user_detail = false;
  }
  public listUserDetial =["Chi tiet tai khoan"]
  public default = false;
  chooseManage(){
    // this.name = "Quản lý tài khoản"
    this.user_detail = false;
    this.default = true;
  }
  Logout(){
    localStorage.removeItem("user")
    this.nonlogin = "nonlogin"
    this.ava()

  }


  ava(){
    this.name= JSON.parse(localStorage.getItem("user")).ho_ten
    return (JSON.parse(localStorage.getItem("user")).hinh_dai_dien_url)
  }
  public nonlogin= "nonlogin";
  public user
  public avatar
  ngOnInit(){
    this.nonlogin =  localStorage.getItem("status")
    this.user = JSON.parse(localStorage.getItem("user"))
    this.name = this.user.ho_ten
    this.avatar= this.user.hinh_dai_dien_url

  }



}

