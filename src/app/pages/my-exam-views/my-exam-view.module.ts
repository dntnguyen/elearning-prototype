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
import { MyExamViewComponent } from './my-exam-view.component';
import { NzTableModule } from 'ng-zorro-antd/table';
import { FormsModule as ngFormsModule } from '@angular/forms';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzDrawerModule } from 'ng-zorro-antd/drawer';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzStatisticModule } from 'ng-zorro-antd/statistic';
import { NzTagModule } from 'ng-zorro-antd/tag';
// import { Chart } from 'chart.js';
import { NzRadioModule } from 'ng-zorro-antd/radio';

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
    NzTagModule,
    NzRadioModule,
    // Chart
  ],
  declarations: [
    MyExamViewComponent,
  ],
  providers: [
  ],
})
export class MyExamViewModule { }
