import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SigninComponent } from '../../signin/signin.component';
import { SignupComponent } from '../../signup/signup.component';

const appRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        redirectTo: '/',
        pathMatch: 'full',
      },
      {
        path: 'tim-lop-gia-su',
        loadChildren:'app/module/student/student.module#StudentModule'
      },
      {
        path: 'tim-gia-su',
        loadChildren:'app/module/tutor/tutor.module#TutorModule'
      },
      { path: 'manage-acc',
      loadChildren:'app/module/manage-acc/manage-acc.module#ManageAccModule'
      }
    ]
  },
  { path: 'signin', component: SigninComponent },
  { path: 'signup', component: SignupComponent },

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
