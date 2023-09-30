import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NzUploadFile } from 'ng-zorro-antd/upload';
import { Observable, Observer } from 'rxjs';
import { NzMessageService } from 'ng-zorro-antd/message';
import { Location } from '@angular/common';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

interface LessonDetail
{
  no: number;
  title: string;
  category: string;
  duration: string;
  createdDate: string;
}

@Component({
  selector: 'ngx-lesson-edit',
  templateUrl: './lesson-edit.component.html',
  styleUrls: ['./lesson-edit.component.scss']
})
export class LessonEditComponent implements OnInit {
  public Editor = ClassicEditor;
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

  lessonDetail: LessonDetail[] = [
    {
      no: 1,
      title: "Bài 1: Tổng quan về bài học",
      category: "",
      duration: '00:15:00',
      createdDate: "09/12/2022",
    },
    {
      no: 2,
      title: "Bài 2: ELANCO PIG ACADEMY là gì?",
      category: "",
      duration: '00:15:00',
      createdDate: "09/12/2022",
    },
    {
      no: 3,
      title: "Bài 3: Các dấu hiệu bệnh",
      category: "",
      duration: '00:15:00',
      createdDate: "09/12/2022",
    },
    {
      no: 4,
      title: "Bài 4: Phương pháp chữa trị",
      category: "",
      duration: '00:15:00',
      createdDate: "09/12/2022",
    },
    {
      no: 5,
      title: "Bài 5: Cách thức phòng ngừa",
      category: "",
      duration: '00:15:00',
      createdDate: "09/12/2022",
    }
  ]

  constructor(
    // private msg: NzMessageService
    private location: Location,
  ) {

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
}
