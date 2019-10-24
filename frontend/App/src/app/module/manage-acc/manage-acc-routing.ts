import { Routes, RouterModule } from '@angular/router';
import { NgModule, Component } from '@angular/core';
import { ManageAccComponent } from './manage-acc/manage-acc.component';
import { TeacherInfoComponent } from './manage-acc/tutor-info/tutor-info.component';
import { TutorIsRequestedComponent } from './manage-acc/student-profile/tutor-is-requested/tutor-is-requested.component';
import { TutorRequestComponent } from './manage-acc/student-profile/tutor-request/tutor-request.component';
const FIND_TUTOR_ROUTER: Routes = [

    {
      path: '',
      component: ManageAccComponent,
      children:[
        {
          path: 'tutor-is-requested',
          component:TutorIsRequestedComponent
        },
        {
          path: 'tutor-request',
          component:TutorRequestComponent
        },
        {
          path: 'profile',
          component:TeacherInfoComponent
        }
      ]
    },



];

@NgModule({
  imports: [

  RouterModule.forChild(FIND_TUTOR_ROUTER)
  ],
  exports: [RouterModule]
})
export class ManageAccRoutingModule{}
