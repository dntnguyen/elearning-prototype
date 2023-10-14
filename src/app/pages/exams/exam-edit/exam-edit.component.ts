import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NzUploadFile } from 'ng-zorro-antd/upload';
import { Observable, Observer } from 'rxjs';
import { NzMessageService } from 'ng-zorro-antd/message';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { ChangeTitleService } from '../../../change-title.service';
import { vi_VN, NzI18nService } from 'ng-zorro-antd/i18n';

interface LessonDetail
{
  no: number;
  brand: string;
  total: string;
  totalChoose: string;
  totalChoice: string;
  totalChoiceChoose: string;
}

interface LessonDetailRandom
{
  no: number;
  brand: string;
  total: string;
  totalChoose: string;
  totalChoice: string;
  totalChoiceChoose: string;
}

@Component({
  selector: 'ngx-exam-edit',
  templateUrl: './exam-edit.component.html',
  styleUrls: ['./exam-edit.component.scss']
})
export class ExamEditComponent implements OnInit {
  lessonEdit = {
    name: '',
    certificate: '',

  }
  categoryLookup = [
    {
      value: '1',
      label: 'BU > LS > Heo'
    },
    {
      value: '2',
      label: 'Kênh > Trang trại'
    },
    {
      value: '3',
      label: 'Nhóm sản phẩm > LS Product'
    },
    {
      value: '4',
      label: 'BU > PET'
    },
    {
      value: '5',
      label: 'Kênh > Khác'
    },
    {
      value: '6',
      label: 'Nhóm sản phẩm > LS Product > Drontal'
    },
    {
      value: '7',
      label: 'Hướng dẫn chung'
    },
  ]
  published = false
  selectedStatus: any
  loading = false;
  avatarUrl?: string;
  fileList: NzUploadFile[] = [];

  form: FormGroup
  uploadCount: number = 0;
  previewImage: string | undefined = '';
  previewVisible = false;
  certificateDurationValue: string = 'A'
  certificateDurationDays: number = 0
  value: string[] = [];
  nodes = [
    {
      title: 'Livestock',
      key: 'livestock',
      children: [
        {
          title: 'Heo',
          key: 'heo',
          children: [
            { title: 'Catosal', key: 'catosal', isLeaf: true },

          ]
        },
        {
          title: 'Gà',
          key: 'ga',
          isLeaf: true
        },
        {
          title: 'Nutrition',
          key: 'nutrition',
          isLeaf: true
        }
      ]
    },
    {
      title: 'Aqua',
      key: 'aqua',
      children: [
        { title: 'Tôm thịt', key: 'tomthit', isLeaf: true },
        { title: 'Tôm giống', key: 'tomgiong', isLeaf: true },
        { title: 'Cá', key: 'ca', isLeaf: true },
      ]
    },
    {
      title: 'Pet Health',
      key: 'pethealth',
      isLeaf: true
    }
  ];

  listOfData: LessonDetail[] = [
    {
      no: 1,
      brand: "HP brand",
      total: "0",
      totalChoose: '0',
      totalChoice: "0",
      totalChoiceChoose: "0",
    },  
    {
      no: 2,
      brand: "Nutri",
      total: "0",
      totalChoose: '0',
      totalChoice: "12",
      totalChoiceChoose: "0",
    },  
    {
      no: 3,
      brand: "MPharma",
      total: "5",
      totalChoose: '0',
      totalChoice: "9",
      totalChoiceChoose: "0",
    },  
    {
      no: 4,
      brand: "Lemonade",
      total: "5",
      totalChoose: '1',
      totalChoice: "13",
      totalChoiceChoose: "2",
    },  
  ]

  listOfDataRandom: LessonDetailRandom[] = [
    {
      no: 1,
      brand: "HP brand",
      total: "/10",
      totalChoose: '0',
      totalChoice: "/20",
      totalChoiceChoose: "0",
    },  
    {
      no: 2,
      brand: "Nutri",
      total: "/0",
      totalChoose: '0',
      totalChoice: "/5",
      totalChoiceChoose: "0",
    },  
    {
      no: 3,
      brand: "MPharma",
      total: "/9",
      totalChoose: '0',
      totalChoice: "/12",
      totalChoiceChoose: "0",
    },  
    {
      no: 4,
      brand: "Lemonade",
      total: "/6",
      totalChoose: '0',
      totalChoice: "/11",
      totalChoiceChoose: "0",
    },  
  ]

  chosenMonth: Date = new Date('2023-11-01')
  date: Date

  constructor(
    // private msg: NzMessageService
    private location: Location,
    private router: Router,
    private changeTitleService: ChangeTitleService,
    private i18n: NzI18nService,
  ) {
    this.changeTitleService.setDataTitle('Cập nhật bài thi')

  }

  ngOnInit(): void {
  }

  onChangePublish() {
    this.published = !this.published
    if (this.published) {
      this.selectedStatus = 'Published'
    }
    else {
      this.selectedStatus = 'Editing'
    }
  }
  back() {
    this.location.back();
  }
  save() {
    this.location.back();
  }

  getBase64 = (file: File): Promise<string | ArrayBuffer | null> =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = error => reject(error);
    });

  handlePreview(file: NzUploadFile) {
    console.log(file)
    if (!file.url && !file.preview) {
      file.preview = this.getBase64(file.originFileObj!);
    }
    this.previewImage = file.url || file.preview;
    this.previewVisible = true;
  };

  onChange($event: string[]): void {
    console.log($event);
  }

  checkClearCertificateDurationDays() {
    console.log(this.certificateDurationValue)
    if (this.certificateDurationValue == 'A') {
      this.certificateDurationDays = 0
    }
  }

  goToMyExamView() {
    this.router.navigate(['pages','my-exam-views'], { queryParams: { id: 2 } });
  }
}
