import { Component } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';

import { SmartTableData } from '../../@core/data/smart-table';
import { FormControl, FormGroup, NonNullableFormBuilder, Validators } from '@angular/forms';
import { NbIconLibraries } from '@nebular/theme';
import { en_US, NzI18nService, zh_CN } from 'ng-zorro-antd/i18n';
import { ChangeTitleService } from '../../change-title.service';
import { Router } from '@angular/router';

interface User {
  no: number;
  userName: string;
  email: string;
  fullName: string;
  phoneNumber: string;
  createdDate: string;
  isActive: boolean;
}

@Component({
  selector: 'ngx-user',
  styleUrls: ['./user.component.scss'],
  templateUrl: './user.component.html',
})
export class UserComponent {
  date = null;
  isEnglish = true;
  checked = false;
  indeterminate = false;
  listOfCurrentPageData: readonly User[] = [];
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


  listOfData: User[] = [
    {
      no: 1,
      userName: 'user1',
      email: 'user1@gmail.com',
      fullName: 'Lý Thị Thanh Tâm',
      phoneNumber: '1234567890',
      createdDate: '22/10/2023',
      isActive: true,
    },
    {
      no: 2,
      userName: 'user2',
      email: 'user2@example.com',
      fullName: 'Trần Trung Hiếu',
      phoneNumber: '2234567890',
      createdDate: '22/10/2023',
      isActive: true,
    },
    {
      no: 3,
      userName: 'user3',
      email: 'user3@example.com',
      fullName: 'Nguyễn Khánh Trân',
      phoneNumber: '3234567890',
      createdDate: '22/10/2023',
      isActive: false,
    },
    {
      no: 4,
      userName: 'user4',
      email: 'user4@example.com',
      fullName: 'Nguyễn Văn Quý',
      phoneNumber: '4234567890',
      createdDate: '22/10/2023',
      isActive: true,
    },
    {
      no: 5,
      userName: 'user5',
      email: 'user5@example.com',
      fullName: 'Lê Thị Ngọc Thủy',
      phoneNumber: '5234567890',
      createdDate: '22/10/2023',
      isActive: true,
    },
    {
      no: 6,
      userName: 'user6',
      email: 'user6@example.com',
      fullName: 'Nguyễn Văn Khối',
      phoneNumber: '6234567890',
      createdDate: '22/10/2023',
      isActive: false,
    },
    {
      no: 7,
      userName: 'user7',
      email: 'user7@example.com',
      fullName: 'Hoàng Minh Tuấn',
      phoneNumber: '7234567890',
      createdDate: '22/10/2023',
      isActive: true,
    },
    {
      no: 8,
      userName: 'user8',
      email: 'user8@example.com',
      fullName: 'Nguyễn Thái Hòa',
      phoneNumber: '8234567890',
      createdDate: '22/10/2023',
      isActive: true,
    },
    {
      no: 8,
      userName: 'user9',
      email: 'user9@example.com',
      fullName: 'Võ Thành Trung',
      phoneNumber: '9234567890',
      createdDate: '22/10/2023',
      isActive: true,
    },
  ];

  evaIcons = [];

  icons = {

    ionicons: [
      'ionic', 'arrow-right-b', 'arrow-down-b', 'arrow-left-b', 'arrow-up-c', 'arrow-right-c',
      'arrow-down-c', 'arrow-left-c', 'arrow-return-right', 'arrow-return-left', 'arrow-swap',
      'arrow-shrink', 'arrow-expand', 'arrow-move', 'arrow-resize', 'chevron-up',
      'chevron-right', 'chevron-down', 'chevron-left', 'navicon-round', 'navicon',
      'drag', 'log-in', 'log-out', 'checkmark-round', 'checkmark', 'checkmark-circled',
      'close-round', 'plus-round', 'minus-round', 'information', 'help',
      'backspace-outline', 'help-buoy', 'asterisk', 'alert', 'alert-circled',
      'refresh', 'loop', 'shuffle', 'home', 'search', 'flag', 'star',
      'heart', 'heart-broken', 'gear-a', 'gear-b', 'toggle-filled', 'toggle',
      'settings', 'wrench', 'hammer', 'edit', 'trash-a', 'trash-b',
      'document', 'document-text', 'clipboard', 'scissors', 'funnel',
      'bookmark', 'email', 'email-unread', 'folder', 'filing', 'archive',
      'reply', 'reply-all', 'forward',
    ],

    fontAwesome: [
      'adjust', 'anchor', 'archive', 'chart-area', 'arrows-alt', 'arrows-alt-h',
      'arrows-alt-v', 'asterisk', 'at', 'car', 'ban', 'university',
      'chart-bar', 'barcode', 'bars', 'bed', 'beer',
      'bell', 'bell-slash', 'bicycle', 'binoculars',
      'birthday-cake', 'bolt', 'bomb', 'book', 'bookmark',
      'briefcase', 'bug', 'building', 'bullhorn',
    ],

    fontAwesomeRegular: ['chart-bar', 'bell', 'bell-slash', 'bookmark', 'building'],
  };

  visible = false;


  constructor(
    iconsLibrary: NbIconLibraries,
    private i18n: NzI18nService,
    private changeTitleService: ChangeTitleService,
    private router: Router
  ) {
    this.evaIcons = Array.from(iconsLibrary.getPack('eva').icons.keys())
      .filter(icon => icon.indexOf('outline') === -1);

    iconsLibrary.registerFontPack('fa', { packClass: 'fa', iconClassPrefix: 'fa' });
    iconsLibrary.registerFontPack('far', { packClass: 'far', iconClassPrefix: 'fa' });
    iconsLibrary.registerFontPack('ion', { iconClassPrefix: 'ion' });
    iconsLibrary.setDefaultPack('far');

    this.i18n.setLocale(en_US);
    this.changeTitleService.setDataTitle('Người dùng')
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

  onCurrentPageDataChange($event: readonly User[]): void {
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

  close(): void {
    this.visible = false;
  }
  getHtmlClassByDataPublic(value) {
    if (value === 'Công khai') {
      return "public-value"
    } else {
      return "private-value"
    }
  }
  getHtmlClassByDivPublic(value){
    if (value === 'Công khai') {
      return "public-div"
    } else {
      return "private-div"
    }
  }

  userAssignLessons() {
    this.router.navigate(['pages','user-assign-lessons'], { queryParams: { id: 1 } });
  }

  userLearningHistories() {
    this.router.navigate(['pages','user-learning-histories'], { queryParams: { id: 1 } });
  }

}
