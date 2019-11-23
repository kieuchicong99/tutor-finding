import { Component, OnInit } from '@angular/core';
import { SignUpService } from '../service/signup.service';
import { SignUp } from '../model/SignUp.model';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(public service: SignUpService) { }
  public user: SignUp = new SignUp();
  public repass : string;
  public role;

  checkNull():boolean{
    return(this.role!=null && this.user.email!= null && this.user.ho_ten!= null && this.repass!= null && this.user.mat_khau!= null && this.user.phone!= null )
  }

  checkRepassword():boolean{
    return (this.user.mat_khau === this.repass )
  }

  signUp(){
    // if(this.checkRepassword() && this.checkNull()){
      this.role = parseInt(this.role)
      this.service.signUp(this.role,this.user)
    // }
    // else{
    //   console.error("du lieu nhap chua du")
    // }
  }
  ngOnInit() {
  }

}
