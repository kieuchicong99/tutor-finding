import { Routes, RouterModule } from '@angular/router';
import { FindTutorComponent } from './find-tutor.component';
import { NgModule, Component } from '@angular/core';
import { DetailFindTutorComponent } from './detail/detail-find-tutor.component';

const FIND_TUTOR_ROUTER: Routes = [
  {
    path: '',
    component:FindTutorComponent
  },
    {
      path: 'chitiet',
      component: DetailFindTutorComponent
    }


];

@NgModule({
  imports: [
    RouterModule.forChild(FIND_TUTOR_ROUTER)
  ],
  exports: [RouterModule]
})
export class StudentRoutingModule{}
