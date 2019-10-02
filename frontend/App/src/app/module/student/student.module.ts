import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FindTutorComponent } from './find-tutor.component';
import { DetailFindTutorComponent } from './detail/detail-find-tutor.component';
import { StudentRoutingModule } from './student-routing.module';

@NgModule({
  imports: [
    CommonModule,
    StudentRoutingModule
  ],
  declarations: [
    FindTutorComponent,
    DetailFindTutorComponent

  ]
})
export class StudentModule { }
