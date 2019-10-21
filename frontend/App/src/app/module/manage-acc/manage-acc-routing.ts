import { Routes, RouterModule } from '@angular/router';
import { NgModule, Component } from '@angular/core';
import { ManageAccComponent } from './manage-acc/manage-acc.component';

const FIND_TUTOR_ROUTER: Routes = [

    {
      path: '',
      component: ManageAccComponent
    }


];

@NgModule({
  imports: [
    RouterModule.forChild(FIND_TUTOR_ROUTER)
  ],
  exports: [RouterModule]
})
export class ManageAccRoutingModule{}
