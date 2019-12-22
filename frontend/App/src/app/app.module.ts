import { ClassService } from './service/class.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { FilterComponent } from './filter/filter.component';
import { RouteModule } from './module/route/route.module';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { FormsModule } from '@angular/forms';
import { SignInService } from './service/signin.service';
import { SignUpService } from './service/signup.service';
import {SlideshowModule} from 'ng-simple-slideshow';
import { DefaultService } from './service/default.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { TutorService } from './service/user.service';
import { StudentService } from './service/student.service';

@NgModule({
  declarations: [
    AppComponent,
    FilterComponent,
    SigninComponent,
    SignupComponent
  ],
  imports: [
    SlideshowModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    RouteModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [
    SignInService,
    SignUpService,
    ClassService,
    DefaultService,
    TutorService,
    StudentService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
