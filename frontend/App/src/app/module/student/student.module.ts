import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FindTutorComponent } from './find-tutor.component';
import { CardFindTutorComponent } from './card-find-tutor/card-find-tutor.component';
import { StudentRoutingModule } from './student-routing.module';

@NgModule({
  imports: [
    CommonModule,
    StudentRoutingModule
  ],
  declarations: [
    FindTutorComponent,
    CardFindTutorComponent

  ]
})
export class StudentModule { }
