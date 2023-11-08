import { Component } from '@angular/core';
import { NbIconLibraries } from '@nebular/theme';
import { Router } from '@angular/router';
import { ChangeTitleService } from '../../change-title.service';

interface Lesson {
  selected: boolean;
  code: string;
  name: string;
  namePlainText: string;
  haveCertification: string;
  category: string[];
  categoryPlainText?: string[];
  public: string;
  status: string;
  createdDate: string;
}

@Component({
  selector: 'ngx-user-assign-lesson',
  styleUrls: ['./user-assign-lesson.component.scss'],
  templateUrl: './user-assign-lesson.component.html',
})
export class UserAssignLessonComponent {
  listGroup: any = []
  listArea: any = []
  defaultData: Lesson[] = [
    {
      "selected": false,
      "code": '001',
      "name": 'Bệnh tiêu chảy cấp PED và viêm ruột truyền nhiễm',
      "namePlainText": 'benh tieu chay cap ped va viem ruot truyen nhiem',
      "haveCertification": "Có",
      "category": ["BU > LS > Heo", "Kênh > Trang trại"],
      "categoryPlainText": ["bu.ls.heo", "kenh.trangtrai"],
      "public": "Công khai",
      "status": "Đã xuất bản",
      "createdDate": "09\/12\/2022",
    },
    {
      "selected": false,
      "code": '002',
      "name": 'Nội ký sinh trùng',
      "namePlainText": 'noi ky sinh trung',
      "haveCertification": "Không",
      "category": ["BU > LS > Gà", "Kênh > Trang trại"],
      "categoryPlainText": ["bu.ls.ga", "kenh.trangtrai"],
      "public": "Riêng",
      "status": "Đang sửa",
      "createdDate": "09\/12\/2022"
    },
    {
      "selected": false,
      "code": '003',
      "name": 'Cách nuôi chó theo từng giai đoạn',
      "namePlainText": 'cach nuoi cho theo tung giai doan',
      "haveCertification": "Có",
      "category": ["BU > LS > Heo", "Kênh > Trang trại"],
      "categoryPlainText": ["bu.ls.heo", "kenh.trangtrai"],
      "public": "Công khai",
      "status": "Đã xuất bản",
      "createdDate": "09\/12\/2022"
    },
    {
      "selected": false,
      "code": '004',
      "name": 'Cách để giúp chó và mèo sống hòa thuận',
      "namePlainText": 'cach de giup cho va meo song hoa thuan',
      "haveCertification": "Có",
      "category": ["BU > LS > Heo", "Nhóm sản phẩm > LS Product"],
      "categoryPlainText": ["bu.ls.heo", "nhomsanpham.lsproduct"],
      "public": "Riêng",
      "status": "Đang sửa",
      "createdDate": "09\/12\/2022"
    },
    {
      "selected": false,
      "code": '005',
      "name": 'Phát triển chăn nuôi bền vững, hiệu quả',
      "namePlainText": 'phat trien chan nuoi ben vung, hieu qua',
      "haveCertification": "Không",
      "category": ["BU > LS > Heo", "Kênh > Trang trại"],
      "categoryPlainText": ["bu.ls.heo", "kenh.trangtrai"],
      "public": "Công khai",
      "status": "Đã xuất bản",
      "createdDate": "09\/12\/2022"
    },
    {
      "selected": false,
      "code": '006',
      "name": 'Giới thiệu sản phẩm mới Proquatic B-Color',
      "namePlainText": 'gioi thieu san pham moi proquatic b-color',
      "haveCertification": "Không",
      "category": ["BU > AQUA > Cá", "Kênh > Trang trại"],
      "categoryPlainText": ["bu.aqua.ca", "kenh.trangtrai"],
      "public": "Công khai",
      "status": "Đã xuất bản",
      "createdDate": "09\/12\/2022"
    },
    {
      "selected": false,
      "code": '007',
      "name": 'Hướng dẫn sử dụng sản phẩm Deocare® A cho Cá',
      "namePlainText": 'huong dan su dung san pham deocare a cho ca',
      "haveCertification": "Không",
      "category": ["Hướng dẫn chung"],
      "categoryPlainText": ["huongdanchung"],
      "public": "Riêng",
      "status": "Đã xuất bản",
      "createdDate": "09\/12\/2022"
    },
    {
      "selected": false,
      "code": '008',
      "name": '10 cách cơ bản để nuôi tôm hiệu quả',
      "namePlainText": '10 cach co ban de nuoi tom hieu qua',
      "haveCertification": "Không",
      "category": ["BU > PET ", " Kênh > Khác"],
      "categoryPlainText": ["bu.pet", "kenh.khac"],
      "public": "Riêng",
      "status": "Đang sửa",
      "createdDate": "09\/12\/2022"
    },
  ];

  listOfData: Lesson[]

  listOfSelected: Lesson[]

  searchText: string
  visible = false;

  isCheckedAll: boolean

  selectedGroups: string[] = []
  selectedAreas: string[] = []
  selectedLessonCategories: string[]
  nodes = [

    {
      title: 'Hướng dẫn chung',
      key: 'huongdanchung',
      isLeaf: true
    },
    {
      title: 'BU',
      key: 'bu',
      expanded: true,
      children: [
        {
          title: 'LS',
          key: 'livestock',
          expanded: false,
          children: [
            {
              title: 'Heo',
              key: 'heo',
              expanded: false,
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
          title: 'AQUA',
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
        },
      ]
    },
    {
      title: 'Kênh',
      key: 'kenh',
      expanded: true,
      children: [
        {
          title: 'Trang trại',
          key: 'trangtrai',
          isLeaf: true
        },
        {
          title: 'Khác',
          key: 'kenhkhac',
          isLeaf: true
        },
      ]
    },
    {
      title: 'Nhóm sản phẩm',
      key: 'nhomsanpham',
      expanded: true,
      children: [
        {
          title: 'LS Products',
          key: 'lsproducts',
          expanded: true,
          children: [{
            title: 'Drontal',
            key: 'drontal',
            isLeaf: true
          }]
        },
        {
          title: 'AQUA Products',
          key: 'aquaproducts',
          isLeaf: true
        },
        {
          title: 'Pet Products',
          key: 'petproducts',
          isLeaf: true
        },
      ]
    },
  ];

  constructor(iconsLibrary: NbIconLibraries,
    private router: Router,
    private changeTitleService: ChangeTitleService,
  ) {
    this.changeTitleService.setDataTitle('Đăng ký khóa học cho học viên')

    this.listOfData = [...this.defaultData]
  }

  setSelected(data: Lesson) {
    if (data === null || data === undefined) {
      return;
    }
    if (!this.listOfSelected) {
      this.listOfSelected = [] as Lesson[]
    }
    if (data.selected) {
      let isExists = false;
      for (let i = 0; i < this.listOfSelected.length; i++) {
        if (this.listOfSelected[i].code === data.code) {
          isExists = true
          break
        }
      }
      if (!isExists) {
        this.listOfSelected.push(data)
      }

    } else {

      for (let i = this.listOfSelected.length - 1; i >= 0; i--) {
        if (this.listOfSelected[i].code === data.code) {
          this.listOfSelected.splice(i, 1)
        }
      }
    }

    this.listOfSelected = [...this.listOfSelected]
    this.listOfData = [...this.listOfData]
  }

  removeUserFromListSelected(data: Lesson) {
    let code = data.code

    for (let i = this.listOfSelected.length - 1; i >= 0; i--) {
      if (this.listOfSelected[i].code === code) {
        this.listOfSelected.splice(i, 1)
        break
      }
    }
    this.listOfSelected = [...this.listOfSelected]

    for (let x = this.listOfData.length - 1; x >= 0; x--) {
      let handled = this.listOfData[x]
      if (handled.code === code) {
        this.listOfData[x].selected = false
        break
      }
    }

    this.listOfData = [...this.listOfData]
  }

  removeAllSelected() {
    for (let i = this.listOfSelected.length - 1; i >= 0; i--) {
      this.removeUserFromListSelected(this.listOfSelected[i])
    }
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
    for (let i = 0; i < this.defaultData.length; i++) {
      let handled = this.defaultData[i]

      if (this.selectedLessonCategories.length > 0) {
        let isInFilteringLessonCategory = false
        if (handled.categoryPlainText?.length > 0) {
          for (let xxx = 0; xxx < this.selectedLessonCategories.length; xxx++) {

            for (let yyy = 0; yyy < handled.categoryPlainText.length; yyy++) {
              if (handled.categoryPlainText[yyy].includes(this.selectedLessonCategories[xxx])) {
                isInFilteringLessonCategory = true
                break
              }
            }

            if (isInFilteringLessonCategory) {
              break
            }
          }
        }

        if (isInFilteringLessonCategory === false) {
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

  clearSearch() {
    this.searchText = ''
    this.onKeyUp(null)
  }

  setSelectedAll() {
    for (let i = 0; i < this.listOfData.length; i++) {
      this.listOfData[i].selected = this.isCheckedAll
      this.setSelected(this.listOfData[i])
    }
  }

  backToUser() {
    this.router.navigate(['pages', 'users']);
  }

  onTreeSelectChange($event: string[]): void {
    this.onKeyUp(null)
  }
}

