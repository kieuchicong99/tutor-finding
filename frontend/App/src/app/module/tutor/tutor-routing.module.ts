import { Routes, RouterModule } from '@angular/router';
import { TutorComponent } from './tutor.component';
import { NgModule } from '@angular/core';
import { TutorProfileComponent } from './tutor-profile/tutor-profile.component';

const TUTOR_ROUTER: Routes = [
  {
      path: '',
      component: TutorComponent
  },
  {
    path: 'chitiet',
    component: TutorProfileComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(TUTOR_ROUTER)
  ],
  exports: [RouterModule]
})
export class TutorRoutingModule{}
