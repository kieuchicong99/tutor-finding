import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AppComponent } from '../../app.component';
import { SigninComponent } from '../../signin/signin.component';

const appRoutes: Routes = [
  {
    path: '',
    component: SigninComponent,
    children: [
      {
        path: '',
        redirectTo: 'tim-gia-su',
        pathMatch: 'full',
      },
      {
        path: 'tim-lop-gia-su',
        loadChildren:'app/module/student.module#StudentModule'
      },
      {
        path: 'tim-gia-su',
        loadChildren:'app/extend/tutor.module#TutorModule'
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
