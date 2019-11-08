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
  ],
  providers: [
    SignInService,
    SignUpService,
    ClassService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
