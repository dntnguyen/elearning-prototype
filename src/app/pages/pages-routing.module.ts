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
import { InActiveUserComponent } from './inactive-users/inactive-user.component';
import { TrackingUserComponent } from './tracking-users/tracking-user.component';

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
    {
      path: 'lessons',
      component: LessonComponent,
    },
    {
      path: 'lessons/lesson-report-activities',
      component: ReportActivitiesComponent,
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
