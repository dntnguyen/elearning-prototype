import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NzUploadFile } from 'ng-zorro-antd/upload';
import { Observable, Observer } from 'rxjs';
import { NzMessageService } from 'ng-zorro-antd/message';
import { Location } from '@angular/common';

@Component({
  selector: 'ngx-lesson-edit',
  templateUrl: './lesson-edit.component.html',
  styleUrls: ['./lesson-edit.component.scss']
})
export class LessonEditComponent implements OnInit {
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
  handlePreview(file: NzUploadFile){
    console.log(file)
    if (!file.url && !file.preview) {
      file.preview = this.getBase64(file.originFileObj!);
    }
    this.previewImage = file.url || file.preview;
    this.previewVisible = true;
  };
}
