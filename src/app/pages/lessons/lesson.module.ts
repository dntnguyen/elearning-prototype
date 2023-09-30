import { NgModule } from '@angular/core';
import {
  NbButtonModule,
  NbCardModule,
  NbProgressBarModule,
  NbTabsetModule,
  NbUserModule,
  NbIconModule,
  NbSelectModule,
  NbListModule,
  NbCheckboxModule,
} from '@nebular/theme';
import { NgxEchartsModule } from 'ngx-echarts';
import { NgxChartsModule } from '@swimlane/ngx-charts';

import { ThemeModule } from '../../@theme/theme.module';
import { LessonComponent } from './lesson.component';
import { NzTableModule } from 'ng-zorro-antd/table';
import { FormsModule as ngFormsModule } from '@angular/forms';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzDrawerModule } from 'ng-zorro-antd/drawer';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { ReportActivitiesComponent } from './report-activities/report-activities.component';
import { NzStatisticModule } from 'ng-zorro-antd/statistic';
import { LessonRoutingModule } from './lesson-routing.module';
import { LessonEditComponent } from './lesson-edit/lesson-edit.component';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { NzUploadModule } from 'ng-zorro-antd/upload';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { NzTreeSelectModule } from 'ng-zorro-antd/tree-select';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';

@NgModule({
  imports: [
    ThemeModule,
    NbCardModule,
    NbUserModule,
    NbButtonModule,
    NbIconModule,
    NbTabsetModule,
    NbSelectModule,
    NbListModule,
    NbProgressBarModule,
    NgxEchartsModule,
    NgxChartsModule,
    NzTableModule,
    ngFormsModule,
    NbCheckboxModule,
    NzInputModule,
    NzButtonModule,
    NzIconModule,
    NzDatePickerModule,
    NzDrawerModule,
    NzCheckboxModule,
    NzSelectModule,
    NzStatisticModule,
    LessonRoutingModule,
    NzRadioModule,
    NzUploadModule,
    NzModalModule,
    NzTagModule,
    CKEditorModule,
    NzTreeSelectModule,
    NzInputNumberModule,
    NzTabsModule,
    NzDropDownModule,
  ],
  declarations: [
    LessonComponent,
    ReportActivitiesComponent,
    LessonEditComponent,
  ],
  providers: [
  ],
})
export class LessonModule { }
