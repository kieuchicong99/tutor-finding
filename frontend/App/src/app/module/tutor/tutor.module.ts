import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TutorComponent } from './tutor.component';
import { CardComponent } from './card/card.component';
import { TutorRoutingModule } from './tutor-routing.module';

@NgModule({
  imports: [

    CommonModule,
    TutorRoutingModule
  ],
  declarations: [
    TutorComponent,
    CardComponent
  ]
})
export class TutorModule { }
