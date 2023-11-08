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
import { UserLearningHistoryComponent } from './user-learning-history.component';
import { NzTableModule } from 'ng-zorro-antd/table';
import { FormsModule as ngFormsModule } from '@angular/forms';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzProgressModule } from 'ng-zorro-antd/progress';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzDrawerModule } from 'ng-zorro-antd/drawer';
import { FilterDropdownModule } from '../filter-control-list/filter-dropdown.module';
import { NzTreeSelectModule } from 'ng-zorro-antd/tree-select';
import { NzTimelineModule } from 'ng-zorro-antd/timeline';

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
    NzCheckboxModule,
    NzButtonModule,
    NzDrawerModule,
    FilterDropdownModule,
    NzTreeSelectModule,
    NzTimelineModule,
  ],
  declarations: [
    UserLearningHistoryComponent,
  ],
  providers: [
  ],
})
export class UserLearningHistoryModule { }
