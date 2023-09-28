import { Component } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';

import { SmartTableData } from '../../@core/data/smart-table';
import { FormControl, FormGroup, NonNullableFormBuilder, Validators } from '@angular/forms';
import { NbIconLibraries } from '@nebular/theme';
import { en_US, NzI18nService, zh_CN } from 'ng-zorro-antd/i18n';
import { ChangeTitleService } from '../../change-title.service';

interface Lesson {
  no: number;
  title: string;
  haveCertification: string;
  categogy: string[];
  public: string;
  status: string;
  createdDate: string;
}

@Component({
  selector: 'ngx-lesson',
  styleUrls: ['./lesson.component.scss'],
  templateUrl: './lesson.component.html',
})
export class LessonComponent {
  date = null;
  isEnglish = true;
  checked = false;
  indeterminate = false;
  listOfCurrentPageData: readonly Lesson[] = [];
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


  listOfData: Lesson[] = [
    {
      "no": 1,
      "title": "ELANCO PIG ACADEMY - BỆNH DO MYCOPLASMA HYOPNEUMONIAE (SUYỄN HEO)",
      "haveCertification": "Có",
      "categogy": ["BU > LS > Heo", "Kênh > Trang trại"],
      "public": "Công khai",
      "status": "Đã xuất bản",
      "createdDate": "09\/12\/2022",
    },
    {
      "no": 2,
      "title": "TẬP HUẤN BDC - BAYOVAC SUISHOT",
      "haveCertification": "Không",
      "categogy": ["BU > LS > Heo","Kênh > Trang trại","Nhóm sản phẩm > LS Product"],
      "public": "Riêng",
      "status": "Đang sửa",
      "createdDate": "09\/12\/2022"
    },
    {
      "no": 3,
      "title": "ELANCO PIG ACADEMY - BỆNH DO MYCOPLASMA HYOPNEUMONIAE (SUYỄN HEO)",
      "haveCertification": "Có",
      "categogy": ["BU > LS > Heo","Kênh > Trang trại"],
      "public": "Công khai",
      "status": "Đã xuất bản",
      "createdDate": "09\/12\/2022"
    },
    {
      "no": 4,
      "title": "ELANCO PIG ACADEMY - BỆNH DO MYCOPLASMA HYOPNEUMONIAE (SUYỄN HEO)",
      "haveCertification": "Có",
      "categogy": ["BU > LS > Heo","Kênh > Trang trại","Nhóm sản phẩm > LS Product"],
      "public": "Riêng",
      "status": "Đang sửa",
      "createdDate": "09\/12\/2022"
    },
    {
      "no": 5,
      "title": "ELANCO PIG ACADEMY - BỆNH DO MYCOPLASMA HYOPNEUMONIAE (SUYỄN HEO)",
      "haveCertification": "Không",
      "categogy": ["BU > LS > Heo","Kênh > Trang trại"],
      "public": "Công khai",
      "status": "Đã xuất bản",
      "createdDate": "09\/12\/2022"
    },
    {
      "no": 6,
      "title": "TẬP HUẤN BDC - BAYOVAC SUISHOT",
      "haveCertification": "Không",
      "categogy": ["BU > LS > Heo","Kênh > Trang trại"],
      "public": "Công khai",
      "status": "Đã xuất bản",
      "createdDate": "09\/12\/2022"
    },
    {
      "no": 7,
      "title": "TẬP HUẤN BDC - BAYOVAC SUISHOT",
      "haveCertification": "Không",
      "categogy": ["Hướng dẫn chung"],
      "public": "Riêng",
      "status": "Đã xuất bản",
      "createdDate": "09\/12\/2022"
    },
    {
      "no": 8,
      "title": "ELANCO PIG ACADEMY - BỆNH DO MYCOPLASMA HYOPNEUMONIAE (SUYỄN HEO)",
      "haveCertification": "Không",
      "categogy": ["BU > PET "," Kênh > Khác","Nhóm sản phẩm > LS Product > Drontal"],
      "public": "Riêng",
      "status": "Đang sửa",
      "createdDate": "09\/12\/2022"
    },
    {
      "no": 9,
      "title": "TẬP HUẤN BDC - BAYOVAC SUISHOT",
      "haveCertification": "Không",
      "categogy": ["BU > LS > Heo","Kênh > Trang trại"],
      "public": "Công khai",
      "status": "Đã xuất bản",
      "createdDate": "09\/12\/2022"
    },
    {
      "no": 10,
      "title": "TẬP HUẤN BDC - BAYOVAC SUISHOT",
      "haveCertification": "Có",
      "categogy": ["BU > PET","Kênh > Khác","Nhóm sản phẩm > LS Product > Drontal"],
      "public": "Riêng",
      "status": "Đang sửa",
      "createdDate": "09\/12\/2022"
    },
    {
      "no": 11,
      "title": "ELANCO PIG ACADEMY - BỆNH DO MYCOPLASMA HYOPNEUMONIAE (SUYỄN HEO)",
      "haveCertification": "Có",
      "categogy": ["Hướng dẫn chung"],
      "public": "Công khai",
      "status": "Đã xuất bản",
      "createdDate": "09\/12\/2022"
    },
    {
      "no": 12,
      "title": "ELANCO PIG ACADEMY - BỆNH DO MYCOPLASMA HYOPNEUMONIAE (SUYỄN HEO)",
      "haveCertification": "Có",
      "categogy": ["BU > PET","Kênh > Khác","Nhóm sản phẩm > LS Product > Drontal"],
      "public": "Riêng",
      "status": "Đang sửa",
      "createdDate": "09\/12\/2022"
    }
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
    this.changeTitleService.setDataTitle('Bài học')
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

  onCurrentPageDataChange($event: readonly Lesson[]): void {
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
}
