import { Component } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';

import { SmartTableData } from '../../@core/data/smart-table';
import { FormControl, FormGroup, NonNullableFormBuilder, Validators } from '@angular/forms';
import { NbIconLibraries } from '@nebular/theme';
import { Router } from '@angular/router';
import { ChangeTitleService } from '../../change-title.service';

interface Lesson {
  imageUrl: string;
  name: string;
  namePlainText: string;
  description: string;
  progressPercent: number;
  publishedDate: string;
  status: string;
}

@Component({
  selector: 'ngx-my-learning-path',
  styleUrls: ['./my-learning-path.component.scss'],
  templateUrl: './my-learning-path.component.html',
})
export class MyLearningPathComponent {
  searchText: string = ''
  listStatus: any = [{ label: "Đang học", value: "inprogress" }, { label: "Chưa học", value: "todo" }, { label: "Đã học", value: "completed" }]
  selectedStatuses: string[] = []
  listOfData: Lesson[]
  listOfDataDefault: Lesson[] = [
    {
      imageUrl: '../../../assets/images/my-lesson-sample-image.png',
      name: 'Bệnh tiêu chảy cấp PED và viêm ruột truyền nhiễm',
      namePlainText: 'benh tieu chay cap ped va viem ruot truyen nhiem',
      description: 'Bệnh thiếu máu do vi khuẩn M. suis thường bị gọi nhầm là bệnh...',
      progressPercent: 20,
      publishedDate: '01/10/2023',
      status: 'inprogress'
    },
    {
      imageUrl: '../../../assets/images/z1.jpeg',
      name: 'Nội ký sinh trùng',
      namePlainText: 'noi ky sinh trung',
      description: 'Bệnh thiếu máu do vi khuẩn M. suis thường bị gọi nhầm là bệnh...',
      progressPercent: 50,
      publishedDate: '01/10/2023',
      status: 'inprogress'
    },
    {
      imageUrl: '../../../assets/images/z2.png',
      name: 'Bệnh tiêu chảy cấp PED và viêm ruột truyền nhiễm',
      namePlainText: 'benh tieu chay cap ped va viem ruot truyen nhiem',
      description: 'Bệnh thiếu máu do vi khuẩn M. suis thường bị gọi nhầm là bệnh...',
      progressPercent: 25,
      publishedDate: '01/10/2023',
      status: 'inprogress'
    },
    {
      imageUrl: '../../../assets/images/z3.png',
      name: 'Bệnh tiêu chảy cấp PED và viêm ruột truyền nhiễm',
      namePlainText: 'benh tieu chay cap ped va viem ruot truyen nhiem',
      description: 'Bệnh thiếu máu do vi khuẩn M. suis thường bị gọi nhầm là bệnh...',
      progressPercent: 0,
      publishedDate: '02/10/2023',
      status: 'todo'
    },
    {
      imageUrl: '../../../assets/images/z4.jpg',
      name: 'Bệnh tiêu chảy cấp PED và viêm ruột truyền nhiễm',
      namePlainText: 'benh tieu chay cap ped va viem ruot truyen nhiem',
      description: 'Bệnh thiếu máu do vi khuẩn M. suis thường bị gọi nhầm là bệnh...',
      progressPercent: 0,
      publishedDate: '12/09/2023',
      status: 'todo'
    },
    {
      imageUrl: '../../../assets/images/z5.jpg',
      name: 'Bệnh tiêu chảy cấp PED và viêm ruột truyền nhiễm',
      namePlainText: 'benh tieu chay cap ped va viem ruot truyen nhiem',
      description: 'Bệnh thiếu máu do vi khuẩn M. suis thường bị gọi nhầm là bệnh...',
      progressPercent: 0,
      publishedDate: '12/09/2023',
      status: 'todo'
    },
    {
      imageUrl: '../../../assets/images/z6.jpg',
      name: 'Bệnh tiêu chảy cấp PED và viêm ruột truyền nhiễm',
      namePlainText: 'benh tieu chay cap ped va viem ruot truyen nhiem',
      description: 'Bệnh thiếu máu do vi khuẩn M. suis thường bị gọi nhầm là bệnh...',
      progressPercent: 100,
      publishedDate: '12/09/2023',
      status: 'completed'
    },
    {
      imageUrl: '../../../assets/images/z7.jpg',
      name: 'Bệnh tiêu chảy cấp PED và viêm ruột truyền nhiễm',
      namePlainText: 'benh tieu chay cap ped va viem ruot truyen nhiem',
      description: 'Bệnh thiếu máu do vi khuẩn M. suis thường bị gọi nhầm là bệnh...',
      progressPercent: 100,
      publishedDate: '12/09/2023',
      status: 'completed'
    },
    {
      imageUrl: '../../../assets/images/my-lesson-sample-image.png',
      name: 'Bệnh tiêu chảy cấp PED và viêm ruột truyền nhiễm',
      namePlainText: 'benh tieu chay cap ped va viem ruot truyen nhiem',
      description: 'Bệnh thiếu máu do vi khuẩn M. suis thường bị gọi nhầm là bệnh...',
      progressPercent: 100,
      publishedDate: '12/09/2023',
      status: 'completed'
    },
    {
      imageUrl: '../../../assets/images/my-lesson-sample-image.png',
      name: 'Bệnh tiêu chảy cấp PED và viêm ruột truyền nhiễm',
      namePlainText: 'benh tieu chay cap ped va viem ruot truyen nhiem',
      description: 'Bệnh thiếu máu do vi khuẩn M. suis thường bị gọi nhầm là bệnh...',
      progressPercent: 100,
      publishedDate: '12/09/2023',
      status: 'completed'
    },
  ];

  constructor(iconsLibrary: NbIconLibraries,
    private router: Router,
    private changeTitleService: ChangeTitleService
  ) {
    iconsLibrary.registerFontPack('fa', { packClass: 'fa', iconClassPrefix: 'fa' });
    iconsLibrary.registerFontPack('far', { packClass: 'far', iconClassPrefix: 'fa' });
    iconsLibrary.registerFontPack('ion', { iconClassPrefix: 'ion' });

    this.changeTitleService.setDataTitle('Khóa học mới')

    this.listOfData = [...this.listOfDataDefault]
  }

  viewLesson() {
    this.router.navigate(['pages', 'new-lessons', 'view'], { queryParams: { id: 1 } });
  }

  listStatusChange(values: any) {
    this.selectedStatuses = values
    this.onKeyUp(null)
  }

  clearSearch() {
    this.searchText = ''
    this.onKeyUp(null)
  }

  onKeyUp(event) {
    let value = this.searchText

    if (!value) {
      value = ''
    }

    if (value.length > 0) {
      value = value.toLocaleLowerCase().trim()
    }

    let listSearch: Lesson[] = []
    for (let i = 0; i < this.listOfDataDefault.length; i++) {
      let handled = this.listOfDataDefault[i]
      if (this.selectedStatuses.length > 0) {
        if (this.selectedStatuses.includes(handled.status) === false) {
          continue
        }
      }

      if (value === '' || handled.name?.toLocaleLowerCase().includes(value)
        || handled.namePlainText?.toLocaleLowerCase().includes(value)) {
        listSearch.push(handled)
      }
    }

    this.listOfData = [...listSearch]
  }
}
