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
  selector: 'ngx-filter-dropdown',
  styleUrls: ['./filter-dropdown.component.scss'],
  templateUrl: './filter-dropdown.component.html',
})
export class FilterDropdownComponent {
  @Input() title: string
  @Input() list: ListOption[] = [];

  @Input()values: string[] = [];
  @Output() valuesChange = new EventEmitter<string[]>();

  labelListDisplay = ''
  isChoosing: boolean = false

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
    let filterLabels = []

    for (let i = 0; i < this.list.length; i++) {
      let opt = this.list[i]
      for (let value in this.values) {
        if (this.values[value] === opt.value) {
          filterLabels.push(opt.label)
        }
      }
    }

    let result = ''

    if (filterLabels.length > 0) {
      result = filterLabels.join()
    }
    if (result.length > 30) {
      result = result.substring(0, 30) + "..."
    }

    this.labelListDisplay = result
    this.valuesChange.emit(this.values)
    this.isChoosing = false
  }
}
