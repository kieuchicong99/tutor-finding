import { Component, OnInit } from '@angular/core';
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

  ngOnInit(){


  }

}

