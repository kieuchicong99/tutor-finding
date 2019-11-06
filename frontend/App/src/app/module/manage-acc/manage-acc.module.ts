import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManageAccComponent } from './manage-acc/manage-acc.component';
import { ManageAccRoutingModule } from './manage-acc-routing';
import { StudentProfileComponent } from './manage-acc/student-profile/student-profile.component';
import { TeacherInfoComponent } from './manage-acc/tutor-info/tutor-info.component';
import { TableComponent } from './manage-acc/table/table.component';
import { TutorRequestComponent } from './manage-acc/student-profile/tutor-request/tutor-request.component';
import { TutorIsRequestedComponent } from './manage-acc/student-profile/tutor-is-requested/tutor-is-requested.component';
import { ClassComponent } from './manage-acc/class/class.component';
import { CardComponent } from './manage-acc/class/card/card.component';
import { NewClassComponent } from './manage-acc/class/new-class/new-class.component';

@NgModule({
  imports: [
    CommonModule,
    ManageAccRoutingModule,


  ],
  declarations: [
    ManageAccComponent,
    StudentProfileComponent,
    TeacherInfoComponent,
    TableComponent,
    TutorRequestComponent,
    TutorIsRequestedComponent,
    ClassComponent,
    CardComponent,
    NewClassComponent
  ]
})
export class ManageAccModule { }
