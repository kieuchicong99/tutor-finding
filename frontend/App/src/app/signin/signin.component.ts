import { Component, OnInit } from '@angular/core';
import { SignInService } from '../service/signin.service';
import { SignIn } from '../model/SignIn.model';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(public service: SignInService, private router: Router,private toastr: ToastrService) { }
  public user: SignIn = new SignIn();
  public role;

  signIn() {
    this.role = parseInt(this.role)
    this.service.signIn(this.role,this.user).then(res => {
      console.log("res:", res);
      if(res.success===true){
        this.toastr.success('Đăng nhập thành công!', 'Xin chào '+ res.data.ho_ten ,{
          timeOut: 3000
        });
        this.router.navigate(['/tim-gia-su'])

      }
      if(res.success===false){
        this.toastr.error('Rất tiếc!', 'Xin thử lại ' ,{
          timeOut: 3000
        });

      }

      // if (res.access_token == null)thi
      //   this.returnSignUp();
      // else {
      //   this.commonService.setToken(res.access_token);
      //   this.showDashBoard();
      // }
    });

  }

  ngOnInit() {
  }

}
