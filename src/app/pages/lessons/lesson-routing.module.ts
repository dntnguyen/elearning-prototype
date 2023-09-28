import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LessonComponent } from './lesson.component';
import { ReportActivitiesComponent } from './report-activities/report-activities.component';

const routes: Routes = [
  { path: '', component: LessonComponent },
  { path: 'lesson-report-activities', component: ReportActivitiesComponent },
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class LessonRoutingModule { }
