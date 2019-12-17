import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TutorComponent } from './tutor.component';
import { TutorRoutingModule } from './tutor-routing.module';
import { TutorProfileComponent } from './tutor-profile/tutor-profile.component';
import { TutorCardComponent } from './tutor-card/tutor-card.component';
import {NgxPaginationModule} from 'ngx-pagination';

@NgModule({
  imports: [

    CommonModule,
    TutorRoutingModule,
    NgxPaginationModule

  ],
  declarations: [
    TutorComponent,
    TutorProfileComponent,
    TutorCardComponent
  ]
})
export class TutorModule { }
