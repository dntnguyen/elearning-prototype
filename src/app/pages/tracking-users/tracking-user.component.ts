import { Component } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';

import { SmartTableData } from '../../@core/data/smart-table';
import { FormControl, FormGroup, NonNullableFormBuilder, Validators } from '@angular/forms';
import { NbIconLibraries } from '@nebular/theme';
import { en_US, NzI18nService, zh_CN } from 'ng-zorro-antd/i18n';
import { ChangeTitleService } from '../../change-title.service';

interface TrackingUser {
  no: number;
  function: string;
  action: string;
  user: string;
  description: string;
  actionDate: string;
}

@Component({
  selector: 'ngx-tracking-user',
  styleUrls: ['./tracking-user.component.scss'],
  templateUrl: './tracking-user.component.html',
})
export class TrackingUserComponent {
  date = null;
  isEnglish = true;
  checked = false;
  indeterminate = false;
  listOfCurrentPageData: readonly TrackingUser[] = [];
  setOfCheckedId = new Set<number>();
  total = 50;
  pageSize = 10;
  pageIndex = 1;

  listOfSelection = [
    {
      text: 'Select All Row',
      onSelect: () => {
        this.onAllChecked(true);
      }
    },
    {
      text: 'Select Odd Row',
      onSelect: () => {
        this.listOfCurrentPageData.forEach((data, index) => this.updateCheckedSet(data.no, index % 2 !== 0));
        this.refreshCheckedStatus();
      }
    },
    {
      text: 'Select Even Row',
      onSelect: () => {
        this.listOfCurrentPageData.forEach((data, index) => this.updateCheckedSet(data.no, index % 2 === 0));
        this.refreshCheckedStatus();
      }
    }
  ];


  listOfData: TrackingUser[] = [
    {
      "no": 1,
      "function": "Bài học",
      "action": "Sửa",
      "user": "staff001 - Nguyễn Văn Bảo",
      "description": "Hướng dẫn sử dụng Elearning Mobile",
      "actionDate": "20/09/2023 18:32",
    },
    {
      "no": 2,
      "function": "Assign bài học",
      "action": "Sửa",
      "user": "staff002 - Võ Khánh Trân",
      "description": "edc001,edc002,edc004",
      "actionDate": "19/09/2023 9:41",
    },
    {
      "no": 3,
      "function": "Bài thi",
      "action": "Xóa",
      "user": "staff002 - Võ Khánh Trân",
      "description": "",
      "actionDate": "18/09/2023 14:02",
    },
    {
      "no": 4,
      "function": "Bài học",
      "action": "Sửa",
      "user": "staff001 - Nguyễn Văn Bảo",
      "description": "",
      "actionDate": "17/09/2023 11:58",
    },
    {
      "no": 5,
      "function": "Bài học",
      "action": "Sửa",
      "user": "staff001 - Nguyễn Văn Bảo",
      "description": "",
      "actionDate": "17/09/2023 10:12",
    },
    {
      "no": 6,
      "function": "Bài học",
      "action": "Sửa",
      "user": "staff001 - Nguyễn Văn Bảo",
      "description": "",
      "actionDate": "17/09/2023 10:09",
    },
    {
      "no": 7,
      "function": "Bài học",
      "action": "Sửa",
      "user": "staff001 - Nguyễn Văn Bảo",
      "description": "",
      "actionDate": "17/09/2023 9:58",
    },
    {
      "no": 8,
      "function": "Bài học",
      "action": "Thêm mới",
      "user": "staff001 - Nguyễn Văn Bảo",
      "description": "",
      "actionDate": "16/09/2023 11:08",
    },
  ];

  visible = false;

  constructor(
    iconsLibrary: NbIconLibraries,
    private i18n: NzI18nService,
    private changeTitleService: ChangeTitleService
  ) {
    iconsLibrary.registerFontPack('fa', { packClass: 'fa', iconClassPrefix: 'fa' });
    iconsLibrary.registerFontPack('far', { packClass: 'far', iconClassPrefix: 'fa' });
    iconsLibrary.registerFontPack('ion', { iconClassPrefix: 'ion' });
    iconsLibrary.setDefaultPack('far');

    this.i18n.setLocale(en_US);
    this.changeTitleService.setDataTitle('Truy vết người dùng')
  }

  updateCheckedSet(id: number, checked: boolean): void {
    if (checked) {
      this.setOfCheckedId.add(id);
    } else {
      this.setOfCheckedId.delete(id);
    }
  }

  onItemChecked(id: number, checked: boolean): void {
    this.updateCheckedSet(id, checked);
    this.refreshCheckedStatus();
  }

  onAllChecked(value: boolean): void {
    this.listOfCurrentPageData.forEach(item => this.updateCheckedSet(item.no, value));
    this.refreshCheckedStatus();
  }

  onCurrentPageDataChange($event: readonly TrackingUser[]): void {
    this.listOfCurrentPageData = $event;
    this.refreshCheckedStatus();
  }

  refreshCheckedStatus(): void {
    this.checked = this.listOfCurrentPageData.every(item => this.setOfCheckedId.has(item.no));
    this.indeterminate = this.listOfCurrentPageData.some(item => this.setOfCheckedId.has(item.no)) && !this.checked;
  }
  onChange(result: Date): void {
    console.log('onChange: ', result);
  }
  changeLanguage(): void {
    this.i18n.setLocale(this.isEnglish ? zh_CN : en_US);
    this.isEnglish = !this.isEnglish;
  }
  openFilterForm(): void {
    this.visible = true;
  }
}
