import { Component, OnInit } from '@angular/core';
import { SignUpService } from '../service/signup.service';
import { SignUp } from '../model/SignUp.model';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(public service: SignUpService,private router: Router,private toastr: ToastrService) { }
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
      this.role = parseInt(this.role)
      this.service.signUp(this.role,this.user).then(res=>{
        console.log("cumcum:", res.success)
        if(res.success===true){
          this.toastr.success("Chúc mừng!\nBạn đã trở thành thành viên của TutorFinding")
          this.router.navigate(['/tim-lop-gia-su'])
        }
        if(res.success===false){
          this.toastr.error(res.message)

        }
      })

  }
  ngOnInit() {
  }

}
