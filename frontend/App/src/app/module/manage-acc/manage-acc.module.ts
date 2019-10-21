import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManageAccComponent } from './manage-acc/manage-acc.component';
import { ManageAccRoutingModule } from './manage-acc-routing';
import { StudentProfileComponent } from './manage-acc/student-profile/student-profile.component';
import { TeacherInfoComponent } from './manage-acc/tutor-info/tutor-info.component';

@NgModule({
  imports: [
    CommonModule,
    ManageAccRoutingModule,


  ],
  declarations: [
    ManageAccComponent,
    StudentProfileComponent,
    TeacherInfoComponent
  ]
})
export class ManageAccModule { }
