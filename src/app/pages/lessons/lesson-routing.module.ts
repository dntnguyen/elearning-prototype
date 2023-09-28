import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LessonComponent } from './lesson.component';
import { ReportActivitiesComponent } from './report-activities/report-activities.component';
import { LessonEditComponent } from './lesson-edit/lesson-edit.component';

const routes: Routes = [
  { path: '', component: LessonComponent },
  // { path: 'lesson-report-activities', component: ReportActivitiesComponent },
  // { path: 'lesson-edit', component: LessonEditComponent },
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class LessonRoutingModule { }
