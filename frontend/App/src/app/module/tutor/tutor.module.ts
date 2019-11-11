import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TutorComponent } from './tutor.component';
import { TutorRoutingModule } from './tutor-routing.module';
import { TutorProfileComponent } from './tutor-profile/tutor-profile.component';
import { TutorCardComponent } from './tutor-card/tutor-card.component';

@NgModule({
  imports: [

    CommonModule,
    TutorRoutingModule
  ],
  declarations: [
    TutorComponent,
    TutorProfileComponent,
    TutorCardComponent
  ]
})
export class TutorModule { }
