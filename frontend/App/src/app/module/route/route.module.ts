import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SigninComponent } from '../../signin/signin.component';
import { FindTutorComponent } from '../student/find-tutor.component';

const appRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        redirectTo: 'tim-lop-gia-su',
        pathMatch: 'full',
      },
      {
        path: 'tim-lop-gia-su',
        loadChildren:'app/module/student/student.module#StudentModule'
      },
      {
        path: 'tim-gia-su',
        loadChildren:'app/module/tutor/tutor.module#TutorModule'
      }
    ]
  },
  { path: 'signin', component: SigninComponent }
];

@NgModule({
  imports: [

  RouterModule.forRoot(appRoutes),
    CommonModule
  ],
  declarations: [],
  exports: [RouterModule]
})
export class RouteModule { }
