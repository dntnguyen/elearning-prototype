import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LearningViewComponent } from './learning-view.component';
import { NzDrawerModule } from 'ng-zorro-antd/drawer';
import { NzButtonModule } from 'ng-zorro-antd/button';


@NgModule({
  declarations: [
    LearningViewComponent
  ],
  imports: [
    CommonModule,
    NzDrawerModule,
    NzButtonModule
  ]
})
export class LearningViewModule { }
