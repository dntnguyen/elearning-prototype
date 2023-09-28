import { NgModule } from '@angular/core';
import { NbMenuModule } from '@nebular/theme';
import { ThemeModule } from '../@theme/theme.module';
import { PagesComponent } from './pages.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { PagesRoutingModule } from './pages-routing.module';
import { MiscellaneousModule } from './miscellaneous/miscellaneous.module';
import { LessonModule } from './lessons/lesson.module';
import { MyLessonModule } from './my-lessons/my-lesson.module';
import { MyLessonViewModule } from './my-lessons-view/my-lesson-view.module';
import { LessonAssignModule } from './lesson-assigns/lesson-assign.module';
import { InActiveUserModule } from './inactive-users/inactive-user.module';
import { TrackingUserModule } from './tracking-users/tracking-user.module';
import { ECommerceModule } from './e-commerce/e-commerce.module';

@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    NbMenuModule,
    DashboardModule,
    MiscellaneousModule,
    LessonModule,
    MyLessonModule,
    MyLessonViewModule,
    LessonAssignModule,
    InActiveUserModule,
    TrackingUserModule,
    ECommerceModule,
  ],
  declarations: [
    PagesComponent,
  ],
})
export class PagesModule {
}
