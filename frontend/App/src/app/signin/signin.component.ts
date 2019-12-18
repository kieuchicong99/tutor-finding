import { Component, OnInit } from '@angular/core';
import { SignInService } from '../service/signin.service';
import { SignIn } from '../model/SignIn.model';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(public service: SignInService) { }
  public user: SignIn = new SignIn();
  public role;

  signIn() {
    this.role = parseInt(this.role)
    this.service.signIn(this.role,this.user).then(res => {
      console.log("res:", res);
      // if (res.access_token == null)
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
