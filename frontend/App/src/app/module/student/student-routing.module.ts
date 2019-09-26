import { Routes, RouterModule } from '@angular/router';
import { FindTutorComponent } from './find-tutor.component';
import { NgModule } from '@angular/core';

const FIND_TUTOR_ROUTER: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        redirectTo: 'test',
        pathMatch: 'full',
      },
      {
        path: 'test',
        component: FindTutorComponent
      }
    ]
  }
  
];

@NgModule({
  imports: [
    RouterModule.forChild(FIND_TUTOR_ROUTER)
  ],
  exports: [RouterModule]
})
export class StudentRoutingModule{}
