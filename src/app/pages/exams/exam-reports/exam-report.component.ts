import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NzUploadFile } from 'ng-zorro-antd/upload';
import { Observable, Observer } from 'rxjs';
import { NzMessageService } from 'ng-zorro-antd/message';
import { Location } from '@angular/common';

interface ExamReportDetail
{
  no: number;
  name: string;
  region: string;
  question_1: string;
  question_2: string;
  question_3: string;
  question_4: string;
  question_5: string;
  average: string;
}

@Component({
  selector: 'ngx-exam-report',
  templateUrl: './exam-report.component.html',
  styleUrls: ['./exam-report.component.scss']
})
export class ExamReportComponent {
  total = 50;
  pageSize = 10;
  pageIndex = 1;

  listOfData: ExamReportDetail[] = [
    {
      no: 1,
      name: "Trịnh Gia Huy",
      region: 'Hà Nội',
      question_1: '100',
      question_2: '90',
      question_3: '100',
      question_4: '100',
      question_5: '100',
      average: '98',
    },
    {
      no: 2,
      name: "Hoàng Minh Tuấn",
      region: 'Hà Nội',
      question_1: '100',
      question_2: '100',
      question_3: '100',
      question_4: '100',
      question_5: '100',
      average: '100',
    },
    {
      no: 3,
      name: "Nguyễn Anh Đức",
      region: 'Sài Gòn',
      question_1: '100',
      question_2: '',
      question_3: '100',
      question_4: '0',
      question_5: '80',
      average: '44',
    },
    {
      no: 4,
      name: "Pha Mỹ Hoa",
      region: 'Sài Gòn',
      question_1: '100',
      question_2: '100',
      question_3: '100',
      question_4: '',
      question_5: '100',
      average: '80',
    },
    {
      no: 5,
      name: "Phan Diệp Nhi",
      region: 'Sài Gòn',
      question_1: '60',
      question_2: '100',
      question_3: '100',
      question_4: '100',
      question_5: '100',
      average: '92',
    },
  ]

  constructor(
    // private msg: NzMessageService
    private location: Location,
  ) {

  }


  back() {
    this.location.back();
  }

}
