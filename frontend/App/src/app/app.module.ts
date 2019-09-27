import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { FilterComponent } from './filter/filter.component';
import { RouteModule } from './module/route/route.module';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';

@NgModule({
  declarations: [
    AppComponent,
    FilterComponent,
    SigninComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouteModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
