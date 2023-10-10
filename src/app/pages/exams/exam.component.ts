import { Component } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';

import { SmartTableData } from '../../@core/data/smart-table';
import { FormControl, FormGroup, NonNullableFormBuilder, Validators } from '@angular/forms';
import { NbIconLibraries } from '@nebular/theme';
import { en_US, NzI18nService, zh_CN } from 'ng-zorro-antd/i18n';
import { ChangeTitleService } from '../../change-title.service';
import { Router } from '@angular/router';

interface Exam {
  no: number;
  title: string;
  month: string;
  year: string;
  duration: string;
  numberOfQuestions: number;
  timeBegin: string;
  timeEnd: string;
  status: string;
  isActive: boolean;
}

@Component({
  selector: 'ngx-exam',
  styleUrls: ['./exam.component.scss'],
  templateUrl: './exam.component.html',
})
export class ExamComponent {
  date = null;
  isEnglish = true;
  checked = false;
  indeterminate = false;
  listOfCurrentPageData: readonly Exam[] = [];
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


  listOfData: Exam[] = [
    {
      no: 1,
      title: "Bài thi kiểm tra năng lực nội bộ Elanco tháng 10/2023",
      month: "10",
      year: "2023",
      duration: "90 phút",
      numberOfQuestions: 30,
      timeBegin: "30/10/2023 12:00",
      timeEnd: "30/10/2023 21:00",
      status: "Đang sửa",
      isActive: true,
    },
    {
      no: 2,
      title: "Bài thi nội bộ Elanco Pet tháng 10/2023",
      month: "10",
      year: "2023",
      duration: "60 phút",
      numberOfQuestions: 20,
      timeBegin: "20/10/2023 12:00",
      timeEnd: "20/10/2023 21:00",
      status: "Đang sửa",
      isActive: true,
    },
    {
      no: 3,
      title: "Bài thi nội bộ Elanco Livestock tháng 10/2023",
      month: "10",
      year: "2023",
      duration: "60 phút",
      numberOfQuestions: 20,
      timeBegin: "20/10/2023 12:00",
      timeEnd: "20/10/2023 21:00",
      status: "Đã xuất bản",
      isActive: true,
    },
    {
      no: 4,
      title: "Bài thi nội bộ Elanco Aqua tháng 10/2023",
      month: "10",
      year: "2023",
      duration: "60 phút",
      numberOfQuestions: 20,
      timeBegin: "20/10/2023 12:00",
      timeEnd: "20/10/2023 21:00",
      status: "Đã xuất bản",
      isActive: true,
    },
    {
      no: 5,
      title: "Bài kiểm tra nhận voucher GotIt tháng 10/2023",
      month: "10",
      year: "2023",
      duration: "15 phút",
      numberOfQuestions: 10,
      timeBegin: "05/10/2023 18:00",
      timeEnd: "06/10/2023 20:00",
      status: "Đang sửa",
      isActive: true,
    },
    {
      no: 6,
      title: "Bài kiểm tra Aqua tháng 10/2023",
      month: "10",
      year: "2023",
      duration: "90 phút",
      numberOfQuestions: 15,
      timeBegin: "23/10/2023 18:00",
      timeEnd: "23/10/2023 20:00",
      status: "Đang sửa",
      isActive: true,
    },
    {
      no: 7,
      title: "Bài kiểm tra Pet Health tháng 9/2023",
      month: "09",
      year: "2023",
      duration: "60 phút",
      numberOfQuestions: 14,
      timeBegin: "23/09/2023 17:00",
      timeEnd: "23/09/2023 18:30",
      status: "Đã xuất bản",
      isActive: true,
    },
    {
      no: 8,
      title: "Bài kiểm tra Livestock tháng 10/2023",
      month: "10",
      year: "2023",
      duration: "60 phút",
      numberOfQuestions: 10,
      timeBegin: "23/10/2023 17:00",
      timeEnd: "23/10/2023 18:30",
      status: "Đang sửa",
      isActive: true,
    },
    {
      no: 9,
      title: "Bài kiểm tra Livestock tháng 9/2023",
      month: "09",
      year: "2023",
      duration: "30 phút",
      numberOfQuestions: 10,
      timeBegin: "23/09/2023 17:00",
      timeEnd: "23/09/2023 18:30",
      status: "Đã xuất bản",
      isActive: true,
    },
    {
      no: 10,
      title: "Bài kiểm tra Pet Health tháng 8/2023",
      month: "08",
      year: "2023",
      duration: "90 phút",
      numberOfQuestions: 15,
      timeBegin: "23/09/2023 17:00",
      timeEnd: "23/09/2023 18:30",
      status: "Đã xuất bản",
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
    private router: Router,
  ) {
    this.evaIcons = Array.from(iconsLibrary.getPack('eva').icons.keys())
      .filter(icon => icon.indexOf('outline') === -1);

    iconsLibrary.registerFontPack('fa', { packClass: 'fa', iconClassPrefix: 'fa' });
    iconsLibrary.registerFontPack('far', { packClass: 'far', iconClassPrefix: 'fa' });
    iconsLibrary.registerFontPack('ion', { iconClassPrefix: 'ion' });
    iconsLibrary.setDefaultPack('far');

    this.i18n.setLocale(en_US);
    this.changeTitleService.setDataTitle('Danh sách bài thi')
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

  onCurrentPageDataChange($event: readonly Exam[]): void {
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

  examReport() {
    this.router.navigate(['pages','exam-reports'], { queryParams: { id: 1 } });
  }

  goToMyExamView() {
    this.router.navigate(['pages','my-exam-views'], { queryParams: { id: 2 } });
  }
}
