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
import { MyLessonComponent } from './my-lesson.component';
import { NzTableModule } from 'ng-zorro-antd/table';
import { FormsModule as ngFormsModule } from '@angular/forms';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzProgressModule } from 'ng-zorro-antd/progress';
import { NzTagModule } from 'ng-zorro-antd/tag';

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
    NzTabsModule,
    NzProgressModule,
    NzTagModule,
  ],
  declarations: [
    MyLessonComponent,
  ],
  providers: [
  ],
})
export class MyLessonModule { }
