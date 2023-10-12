import { Component } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';

import { SmartTableData } from '../../@core/data/smart-table';
import { FormControl, FormGroup, NonNullableFormBuilder, Validators } from '@angular/forms';
import { NbIconLibraries } from '@nebular/theme';
import { en_US, NzI18nService, zh_CN } from 'ng-zorro-antd/i18n';
import { ChangeTitleService } from '../../change-title.service';

interface UserInactive {
  no: number;
  name: string;
  email: string;
  group: string;
  numberOfInactiveDays: number;
}

@Component({
  selector: 'ngx-inactive-user',
  styleUrls: ['./inactive-user.component.scss'],
  templateUrl: './inactive-user.component.html',
})
export class InActiveUserComponent {
  date = null;
  isEnglish = true;
  checked = false;
  indeterminate = false;
  listOfCurrentPageData: readonly UserInactive[] = [];
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
        this.listOfData.forEach((data, index) => this.updateCheckedSet(data.no, index % 2 !== 0));
        this.refreshCheckedStatus();
      }
    },
    {
      text: 'Select Even Row',
      onSelect: () => {
        this.listOfData.forEach((data, index) => this.updateCheckedSet(data.no, index % 2 === 0));
        this.refreshCheckedStatus();
      }
    }
  ];


  listOfData: UserInactive[] = [
    {
      "no": 1,
      "name": "Nguyễn Thành Long",
      "email": "thanh.long290291@example.com",
      "group": "EDC",
      "numberOfInactiveDays": 42,
    },
    {
      "no": 2,
      "name": "Nguyễn Nhật Thành",
      "email": "thanh.nhat.bossa@example.com",
      "group": "EDC",
      "numberOfInactiveDays": 31,
    },
    {
      "no": 3,
      "name": "Lý Khánh Trân",
      "email": "user3@example.com",
      "group": "Dealer",
      "numberOfInactiveDays": 50,
    },
    {
      "no": 4,
      "name": "Nguyễn Anh Hùng",
      "email": "user4@example.com",
      "group": "Dealer",
      "numberOfInactiveDays": 37,
    },
    {
      "no": 5,
      "name": "Hồ Lâm Anh",
      "email": "user5@example.com",
      "group": "Dealer",
      "numberOfInactiveDays": 63,
    },
    {
      "no": 6,
      "name": "Võ Hoài Nam",
      "email": "user6@example.com",
      "group": "Dealer",
      "numberOfInactiveDays": 41,
    },
    {
      "no": 7,
      "name": "Trần Thị Thanh Tâm",
      "email": "thanh.tam.tran30121988@example.com",
      "group": "EDC",
      "numberOfInactiveDays": 39,
    },
    {
      "no": 8,
      "name": "Hoàng Phúc Nguyên",
      "email": "nguyen.hoangphuc@example.com",
      "group": "Staff",
      "numberOfInactiveDays": 60,
    },
    {
      "no": 9,
      "name": "Trương Tấn Phát",
      "email": "phat.truongtan90@example.com",
      "group": "Staff",
      "numberOfInactiveDays": 32,
    },
    {
      "no": 10,
      "name": "Hoàng Minh Phước",
      "email": "phuoc.hoangminh@example.com",
      "group": "Dealer",
      "numberOfInactiveDays": 51,
    },
    {
      "no": 11,
      "name": "Hoàng Minh Phước",
      "email": "phuoc.hoangminh@example.com",
      "group": "Dealer",
      "numberOfInactiveDays": 51,
    },
    {
      "no": 12,
      "name": "Nguyễn Thành Long",
      "email": "thanh.longnguyen81@example.com",
      "group": "EDC",
      "numberOfInactiveDays": 70,
    }
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

    this.changeTitleService.setDataTitle('Người dùng ít hoạt động')
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
    this.listOfData.forEach(item => this.updateCheckedSet(item.no, value));
    this.refreshCheckedStatus();
  }

  onCurrentPageDataChange($event: readonly UserInactive[]): void {
    this.listOfCurrentPageData = $event;
    this.refreshCheckedStatus();
  }

  refreshCheckedStatus(): void {
    this.checked = this.listOfData.every(item => this.setOfCheckedId.has(item.no));
    this.indeterminate = this.listOfData.some(item => this.setOfCheckedId.has(item.no)) && !this.checked;
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
