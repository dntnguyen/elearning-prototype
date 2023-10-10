import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { LocalDataSource } from 'ng2-smart-table';

import { SmartTableData } from '../../@core/data/smart-table';
import { FormControl, FormGroup, NonNullableFormBuilder, Validators } from '@angular/forms';
import { NbIconLibraries } from '@nebular/theme';
import { en_US, NzI18nService, zh_CN } from 'ng-zorro-antd/i18n';
import { ChangeTitleService } from '../../change-title.service';
import { Router,  } from '@angular/router';

interface MyExam {
  no: number;
  title: string;
  month: string;
  year: string;
  duration: string;
  numberOfQuestions: number;
  timeBegin: string;
  timeEnd: string;
  score: string;
  status: string;
}

@Component({
  selector: 'ngx-my-exam',
  styleUrls: ['./my-exam.component.scss'],
  templateUrl: './my-exam.component.html',
})
export class MyExamComponent {
  date = null;
  isEnglish = true;
  checked = false;
  indeterminate = false;
  listOfCurrentPageData: readonly MyExam[] = [];
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


  listOfData: MyExam[] = [
    {
      no: 1,
      title: "Bài thi kiểm tra năng lực nội bộ Elanco tháng 10/2023",
      month: "10",
      year: "2023",
      duration: "90 phút",
      numberOfQuestions: 30,
      timeBegin: "20/10/2023 8:00",
      timeEnd: "20/10/2023 9:30",
      score: "",
      status: "Sắp diễn ra",
    },
    {
      no: 2,
      title: "Bài thi nội bộ Elanco Pet tháng 10/2023",
      month: "10",
      year: "2023",
      duration: "60 phút",
      numberOfQuestions: 20,
      timeBegin: "11/10/2023 8:00",
      timeEnd: "11/10/2023 21:00",
      status: "Đang diễn ra",
      score: "90",
    },
    {
      no: 3,
      title: "Bài thi nội bộ Elanco Livestock tháng 10/2023",
      month: "9",
      year: "2023",
      duration: "60 phút",
      numberOfQuestions: 20,
      timeBegin: "15/09/2023 12:00",
      timeEnd: "15/09/2023 21:00",
      score: "94",
      status: "Đã kết thúc",
    },
  ];

  visible = false;


  constructor(
    private i18n: NzI18nService,
    private changeTitleService: ChangeTitleService,
    private router: Router,
    private location: Location,
  ) {
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

  onCurrentPageDataChange($event: readonly MyExam[]): void {
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
    // this.visible = true;
  }

  close(): void {
    // this.visible = false;
  }

  getHtmlClassByStatus(value){
    if (value === 'Sắp diễn ra') {
      return "incoming-div"
    } else if (value === 'Đang diễn ra') {
      return "ongoing-div"
    } else {
      return "complete-div"
    }
  }

  examReport() {
    this.router.navigate(['pages','exam-reports'], { queryParams: { id: 1 } });
  }

  goToMyExamView() {
    this.router.navigate(['pages','my-exam-views'], { queryParams: { id: 1 } });
  }

  back() {
    this.location.back();
  }
}
