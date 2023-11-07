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
  selectedStatusValue : string
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
      description: 'Ký sinh trùng là một sinh vật sống ký sinh trên một sinh vật sống khác (con người, động vật, thực vật)...',
      progressPercent: 50,
      publishedDate: '01/10/2023',
      status: 'inprogress'
    },
    {
      imageUrl: '../../../assets/images/z2.png',
      name: 'Cách nuôi chó theo từng giai đoạn',
      namePlainText: 'cach nuoi cho theo tung giai doan',
      description: 'Nuôi chú chó con (cún con) không phải đơn giản, vì cơ thể chúng còn yếu, chưa thích nghi tốt...',
      progressPercent: 0,
      publishedDate: '01/10/2023',
      status: 'todo'
    },
    {
      imageUrl: '../../../assets/images/z3.png',
      name: 'Cách để giúp chó và mèo sống hòa thuận',
      namePlainText: 'cach de giup cho va meo song hoa thuan',
      description: 'Nhà bạn đang có sự “thống trị” của cả chó và mèo? Hai thế lực này đang đấu đá nha?...',
      progressPercent: 0,
      publishedDate: '02/10/2023',
      status: 'todo'
    },
    {
      imageUrl: '../../../assets/images/z4.jpg',
      name: 'Phát triển chăn nuôi bền vững, hiệu quả',
      namePlainText: 'phat trien chan nuoi ben vung, hieu qua',
      description: 'Cùng với trồng trọt, ngành chăn nuôi đang được khuyến khích phát triển theo hướng chăn nuôi tập trung...',
      progressPercent: 0,
      publishedDate: '12/09/2023',
      status: 'todo'
    },
    {
      imageUrl: '../../../assets/images/z5.jpg',
      name: 'Giới thiệu sản phẩm mới Proquatic B-Color',
      namePlainText: 'gioi thieu san pham moi proquatic b-color',
      description: 'Đây là giải pháp tạo màu nhanh cho ao tôm cá, giảm hấp thụ ánh sáng mặt trời vào nước giúp môi trường...',
      progressPercent: 100,
      publishedDate: '12/09/2023',
      status: 'completed'
    },
    {
      imageUrl: '../../../assets/images/z6.jpg',
      name: 'Hướng dẫn sử dụng sản phẩm Deocare® A cho Cá',
      namePlainText: 'huong dan su dung san pham deocare a cho ca',
      description: 'Giảm nhanh nồng độ khí độc (khí NH3) khiến cá nổi đầu trong môi trường nước ao nuôi...',
      progressPercent: 100,
      publishedDate: '12/09/2023',
      status: 'completed'
    },
    {
      imageUrl: '../../../assets/images/z7.jpg',
      name: '10 cách cơ bản để nuôi tôm hiệu quả',
      namePlainText: '10 cach co ban de nuoi tom hieu qua',
      description: '10 cách cơ bản sẽ giúp cho ao tôm đạt năng suất và sạch bệnh để người nuôi tôm đạt hiệu quả...',
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

    this.changeTitleService.setDataTitle('Lộ trình học')

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
      if (this.selectedStatusValue) {
        if (this.selectedStatusValue.includes(handled.status) === false) {
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
