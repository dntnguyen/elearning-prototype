import { Component } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';

import { SmartTableData } from '../../@core/data/smart-table';
import { FormControl, FormGroup, NonNullableFormBuilder, Validators } from '@angular/forms';
import { NbIconLibraries } from '@nebular/theme';
import { en_US, NzI18nService, zh_CN } from 'ng-zorro-antd/i18n';
import { ChangeTitleService } from '../../change-title.service';

interface QuestionBank {
  no: number;
  title: string;
  type: string;
  dateModified: string;
  isActive: boolean,
}

@Component({
  selector: 'ngx-question-bank',
  styleUrls: ['./question-bank.component.scss'],
  templateUrl: './question-bank.component.html',
})
export class QuestionBankComponent {
  date = null;
  isEnglish = true;
  checked = false;
  indeterminate = false;
  listOfCurrentPageData: readonly QuestionBank[] = [];
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


  listOfData: QuestionBank[] = [
    {
      no: 1,
      title: "Sử dụng Berocca có tác dụng phụ không?",
      type: 'Essay',
      dateModified: "30/10/2023 12:00",
      isActive: true,
    },
    {
      no: 2,
      title: "Bao lâu cần tiêm ngừa bệnh dại cho chó mèo?",
      type: "SCQ",
      dateModified: "20/10/2023 12:00",
      isActive: false,
    },
    {
      no: 3,
      title: "Những chất dinh dưỡng nào cần thiết nhất cho cây?",
      type: "MCQ",
      dateModified: "20/10/2023 12:00",
      isActive: true,
    },
    {
      no: 4,
      title: "Tác dụng của ni tơ với cây trồng là gì?",
      type: "MCQ",
      dateModified: "20/10/2023 12:00",
      isActive: true,
    },
    {
      no: 5,
      title: "Nên bón phân như thế nào cho mùa vụ mới?",
      type: "Essay",
      dateModified: "05/10/2023 18:00",
      isActive: true,
    },
    {
      no: 6,
      title: "Những nguyên nhân nào  gây ra bệnh vàng lá ở lúa?",
      type: "MCG",
      dateModified: "23/10/2023 18:00",
      isActive: true,
    },
    {
      no: 7,
      title: "Nên tưới nước cho cây ăn quả vào những thời điểm nào trong ngày?",
      type: "MCQ",
      dateModified: "23/09/2023 17:00",
      isActive: true,
    },
    {
      no: 8,
      title: "Những phương pháp phòng bệnh lỡ mồm long móng ở vật nuôi?",
      type: "MCQ",
      dateModified: "23/10/2023 17:00",
      isActive: true,
    },
    {
      no: 9,
      title: "Nhãn hiệu Elanco không kinh doanh?",
      type: "SCQ",
      dateModified: "23/09/2023 17:00",
      isActive: true,
    },
    {
      no: 10,
      title: "Loại phân bón nào tốt nhất cho cam?",
      type: "MCQ",
      dateModified: "23/09/2023 17:00",
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
    private changeTitleService: ChangeTitleService
  ) {
    this.evaIcons = Array.from(iconsLibrary.getPack('eva').icons.keys())
      .filter(icon => icon.indexOf('outline') === -1);

    iconsLibrary.registerFontPack('fa', { packClass: 'fa', iconClassPrefix: 'fa' });
    iconsLibrary.registerFontPack('far', { packClass: 'far', iconClassPrefix: 'fa' });
    iconsLibrary.registerFontPack('ion', { iconClassPrefix: 'ion' });
    iconsLibrary.setDefaultPack('far');

    this.i18n.setLocale(en_US);
    this.changeTitleService.setDataTitle('Ngân hàng câu hỏi')
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

  onCurrentPageDataChange($event: readonly QuestionBank[]): void {
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
}
