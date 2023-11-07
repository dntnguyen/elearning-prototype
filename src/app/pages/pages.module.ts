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
import { ExamModule } from './exams/exam.module';
import { LessonCategoryModule } from './lesson-categories/lesson-category.module';
import { ECommerceModule } from './e-commerce/e-commerce.module';
import { NewLessonModule } from './new-lessons/new-lesson.module';
import { NewLessonViewModule } from './new-lessons-view/new-lesson-view.module';
import { QuestionBankModule } from './question-banks/question-bank.module';
import { MyExamModule } from './my-exams/my-exam.module';
import { MyExamViewModule } from './my-exam-views/my-exam-view.module';
import { LearningViewModule } from './learning-view/learning-view.module';
import { MyLearningPathModule } from './my-learning-paths/my-learning-path.module';
import { UserModule } from './users/user.module';
import { UserAssignLessonModule } from './user-assign-lessons/user-assign-lesson.module';

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
    ExamModule,
    QuestionBankModule,
    LessonCategoryModule,
    ECommerceModule,
    NewLessonModule,
    NewLessonViewModule,
    MyExamModule,
    MyExamViewModule,
    LearningViewModule,
    MyLearningPathModule,
    UserModule,
    UserAssignLessonModule,
  ],
  declarations: [
    PagesComponent,
  ],
})
export class PagesModule {
}
