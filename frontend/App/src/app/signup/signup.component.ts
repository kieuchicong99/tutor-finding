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

  checkNull():boolean{
    return(this.user.email!= null && this.user.name!= null && this.repass!= null && this.user.password!= null && this.user.phone!= null )
  }

  checkRepassword():boolean{
    return (this.user.password === this.repass )
  }

  signUp():void{
    if(this.checkRepassword() && this.checkNull()){
      this.service.signUp(this.user).then(res => {
        console.log("res:", res);

      });
    }
    else{
      console.error("du lieu nhap chua du")
    }


  }
  ngOnInit() {
  }

}
