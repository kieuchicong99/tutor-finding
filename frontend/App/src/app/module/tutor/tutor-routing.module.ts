import { Routes, RouterModule } from '@angular/router';
import { TutorComponent } from './tutor.component';
import { NgModule } from '@angular/core';

const TUTOR_ROUTER: Routes = [
  {
      path: '',
      component: TutorComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(TUTOR_ROUTER)
  ],
  exports: [RouterModule]
})
export class TutorRoutingModule{}
