import { Component, EventEmitter, Input, Output } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';

import { SmartTableData } from '../../@core/data/smart-table';
import { FormControl, FormGroup, NonNullableFormBuilder, Validators } from '@angular/forms';
import { NbIconLibraries } from '@nebular/theme';
import { Router } from '@angular/router';
import { ChangeTitleService } from '../../change-title.service';

interface ListOption {
  label: string;
  value: string;
}

@Component({
  selector: 'ngx-filter-datetime',
  styleUrls: ['./filter-datetime.component.scss'],
  templateUrl: './filter-datetime.component.html',
})
export class FilterDateTimeComponent {
  @Input() title: string
  @Input() date: Date = new Date(2023, 10, 30)
  @Output() valuesChange = new EventEmitter<Date>();

  isChoosing: boolean = false
  defaultDateLabelDisplay: string = 'Chọn'

  constructor(iconsLibrary: NbIconLibraries,
    private router: Router,
    private changeTitleService: ChangeTitleService
  ) {
    iconsLibrary.registerFontPack('fa', { packClass: 'fa', iconClassPrefix: 'fa' });
    iconsLibrary.registerFontPack('far', { packClass: 'far', iconClassPrefix: 'fa' });
    iconsLibrary.registerFontPack('ion', { iconClassPrefix: 'ion' });

    this.changeTitleService.setDataTitle('Khóa học mới')
    this.getLabelListDisplay()
  }

  getLabelListDisplay() {
    this.valuesChange.emit(this.date)
    this.isChoosing = false
  }
}
