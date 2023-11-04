import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ECommerceComponent } from './e-commerce/e-commerce.component';
import { NotFoundComponent } from './miscellaneous/not-found/not-found.component';
import { LessonComponent } from './lessons/lesson.component';
import { ReportActivitiesComponent } from './lessons/report-activities/report-activities.component';
import { MyLessonComponent } from './my-lessons/my-lesson.component';
import { MyLessonViewComponent } from './my-lessons-view/my-lesson-view.component';
import { LessonAssignComponent } from './lesson-assigns/lesson-assign.component';
import { LessonEditComponent } from './lessons/lesson-edit/lesson-edit.component';
import { InActiveUserComponent } from './inactive-users/inactive-user.component';
import { TrackingUserComponent } from './tracking-users/tracking-user.component';
import { ExamComponent } from './exams/exam.component';
import { LessonCategoryComponent } from './lesson-categories/lesson-category.component';
import { NewLessonComponent } from './new-lessons/new-lesson.component';
import { NewLessonViewComponent } from './new-lessons-view/new-lesson-view.component';
import { QuestionBankComponent } from './question-banks/question-bank.component';
import { ExamReportComponent } from './exams/exam-reports/exam-report.component';
import { MyExamComponent } from './my-exams/my-exam.component';
import { MyExamViewComponent } from './my-exam-views/my-exam-view.component';
import { ExamEditComponent } from './exams/exam-edit/exam-edit.component';
import { LearningViewComponent } from './learning-view/learning-view.component';

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
    {
      path: 'lessons',
      component: LessonComponent,
    },
    {
      path: 'lesson-categories',
      component: LessonCategoryComponent,
    },
    {
      path: 'exams',
      component: ExamComponent,
    },
    {
      path: 'exam-edit',
      component: ExamEditComponent,
    },
    {
      path: 'exam-reports',
      component: ExamReportComponent,
    },
    {
      path: 'my-exams',
      component: MyExamComponent,
    },
    {
      path: 'my-exam-views',
      component: MyExamViewComponent,
    },
    {
      path: 'question-banks',
      component: QuestionBankComponent,
    },
    {
      path: 'lessons/lesson-report-activities',
      component: ReportActivitiesComponent,
    },
    {
      path: 'lessons/lesson-edit',
      component: LessonEditComponent,
    },
    {
      path: 'lesson-assigns',
      component: LessonAssignComponent,
    },
    {
      path: 'my-lessons',
      component: MyLessonComponent,
    },
    {
      path: 'my-lessons/view',
      component: MyLessonViewComponent,
    },
     {
      path: 'new-lessons',
      component: NewLessonComponent,
    },
    {
      path: 'new-lessons/view',
      component: NewLessonViewComponent,
    },
    {
      path: 'learning-view',
      component: LearningViewComponent,
    },
    {
      path: 'inactive-users',
      component: InActiveUserComponent,
    },
     {
      path: 'tracking-users',
      component: TrackingUserComponent,
    },
    {
      path: 'dashboard',
      component: ECommerceComponent,
    },
    {
      path: 'iot-dashboard',
      component: DashboardComponent,
    },
    {
      path: 'layout',
      loadChildren: () => import('./layout/layout.module')
        .then(m => m.LayoutModule),
    },
    {
      path: 'forms',
      loadChildren: () => import('./forms/forms.module')
        .then(m => m.FormsModule),
    },
    {
      path: 'ui-features',
      loadChildren: () => import('./ui-features/ui-features.module')
        .then(m => m.UiFeaturesModule),
    },
    {
      path: 'modal-overlays',
      loadChildren: () => import('./modal-overlays/modal-overlays.module')
        .then(m => m.ModalOverlaysModule),
    },
    {
      path: 'extra-components',
      loadChildren: () => import('./extra-components/extra-components.module')
        .then(m => m.ExtraComponentsModule),
    },
    {
      path: 'maps',
      loadChildren: () => import('./maps/maps.module')
        .then(m => m.MapsModule),
    },
    {
      path: 'charts',
      loadChildren: () => import('./charts/charts.module')
        .then(m => m.ChartsModule),
    },
    {
      path: 'editors',
      loadChildren: () => import('./editors/editors.module')
        .then(m => m.EditorsModule),
    },
    {
      path: 'tables',
      loadChildren: () => import('./tables/tables.module')
        .then(m => m.TablesModule),
    },
    {
      path: 'miscellaneous',
      loadChildren: () => import('./miscellaneous/miscellaneous.module')
        .then(m => m.MiscellaneousModule),
    },
    {
      path: '',
      redirectTo: 'dashboard',
      pathMatch: 'full',
    },
    {
      path: '**',
      component: NotFoundComponent,
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
