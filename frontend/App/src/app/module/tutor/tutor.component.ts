import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import {DefaultService} from '../../service/default.service';

@Component({
  selector: 'app-tutor',
  templateUrl: './tutor.component.html',
  styleUrls: ['./tutor.component.css']
})
export class TutorComponent implements OnInit {
   /**
   * input cần truyền cho component này là mảng các gia sư lấy được từ server
   * nếu chưa filter thì server sẽ trả về mặc định, nếu có filter thì sẽ trả ra
   * danh sách theo filter
   */
  public tutors =[
    {
      id : 1,
      name : 'Cuong Tong',
      address : 'Ha Noi',
      class : 'Toan, Ly',
      description : 'Vui ve, hoa dong, thich mau hong, ghet su gia doi, sơ trường ăn uống ',
      renter : 120000,
      link : 'https://google.com',
      img : 'https://img.etimg.com/thumb/msid-68333505,width-643,imgsize-204154,resizemode-4/googlechrome.jpg',
    },
    {
      id : 1,
      name : 'CHi Thanh',
      address : 'Ho Chi Minh',
      class : 'Toan',
      description : 'description',
      renter : 120000,
      link : 'https://google.com',
      img : 'https://img.etimg.com/thumb/msid-68333505,width-643,imgsize-204154,resizemode-4/googlechrome.jpg',
    },
    {
      id : 1,
      name : 'Ho Tung Mau',
      address : 'Ho Tung Mau',
      class : 'Toan, Ly',
      description : 'Giảng viên ',
      renter : 120000,
      link : 'https://google.com',
      img : 'https://img.etimg.com/thumb/msid-68333505,width-643,imgsize-204154,resizemode-4/googlechrome.jpg',
    },
    {
      id : 1,
      name : 'Truong Chinh',
      address : 'Đà Nẵng',
      class : 'Thể dục',
      description : 'Vui Tính dạy hay',
      renter : 120000,
      link : 'https://google.com',
      img : 'https://img.etimg.com/thumb/msid-68333505,width-643,imgsize-204154,resizemode-4/googlechrome.jpg',
    },
    {
      id : 1,
      name : 'Kieu Chi Cong',
      address : 'Ha Noi',
      class : 'Toan, Ly',
      description : 'Năng nổ nhiệt tình phá hoại ',
      renter : 100000,
      link : 'https://google.com',
      img : 'https://img.etimg.com/thumb/msid-68333505,width-643,imgsize-204154,resizemode-4/googlechrome.jpg',
    },
    {
      id : 1,
      name : 'Nguyen Van A',
      address : 'Ca Mau',
      class : 'Tiếng anh',
      description : 'kinh nghiệm luyện thi đại học lâu năm ',
      renter : 200000,
      link : 'https://google.com',
      img : 'https://img.etimg.com/thumb/msid-68333505,width-643,imgsize-204154,resizemode-4/googlechrome.jpg',
    }
] ;

  /**
   * mảng hiển thị ra 3 tutor mặc định
   */
  tutor_show =[this.tutors[0],this.tutors[1],this.tutors[2]]
  /**
   * nhấn vào slide bên trái
   */
  slide_left(){
    let first_index = this.tutors.indexOf(this.tutor_show[0])
    let last_index = this.tutors.indexOf(this.tutor_show[2])

    if(first_index >=0 && last_index<this.tutors.length-1){
      // xoa phan tu dau tien
      this.tutor_show.shift()
      //chen vao cuoi
      this.tutor_show.push(this.tutors[last_index+1])
    }

    if(last_index>=this.tutors.length-1){
      // xoa phan tu dau tien
      this.tutor_show.shift()
      //chen vao cuoi
      this.tutor_show.push(this.tutors[(last_index+1)%3])
      }
  }


  /**
   * nhấn vào slide bên phải
   */
  slide_right(){
    let first_index = this.tutors.indexOf(this.tutor_show[0])
    let last_index = this.tutors.indexOf(this.tutor_show[2])

    if(first_index >0 && last_index<this.tutors.length){
      // xoa phan tu cuoi
      this.tutor_show.pop()
      //chen vao dau
      this.tutor_show.unshift(this.tutors[first_index-1])
    }
    if(first_index==0){
      // xoa phan tu cuoi
      this.tutor_show.pop()
      //chen vao dau
      this.tutor_show.unshift(this.tutors[this.tutors.length-1])

      }
  }



  constructor(public router:Router, public service : DefaultService ) { }



  async ngOnInit() {
    this.tutors = await   this.service.getDefaultListTutor()
    // this.service.getProfileTutor(id)

  }

}
