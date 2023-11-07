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
      "category": ["BU > LS > Heo","Kênh > Trang trại"],
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
      "category": ["BU > LS > Heo","Kênh > Trang trại"],
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
      "category": ["BU > LS > Heo","Nhóm sản phẩm > LS Product"],
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
      "category": ["BU > LS > Heo","Kênh > Trang trại"],
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
      "category": ["BU > LS > Heo","Kênh > Trang trại"],
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
      "category": ["BU > PET "," Kênh > Khác"],
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

  constructor(iconsLibrary: NbIconLibraries,
    private router: Router,
    private changeTitleService: ChangeTitleService,
  ) {
    this.changeTitleService.setDataTitle('Chỉ định khóa học cho học viên')

    this.listOfData = [...this.defaultData]

    this.getListGroup()
    this.getListArea()
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
      // if (this.selectedGroups.length > 0) {
      //   if (this.selectedGroups.includes(handled.groupName) === false) {
      //     continue
      //   }
      // }

      // if (this.selectedAreas.length > 0) {
      //   if (this.selectedAreas.includes(handled.area) === false) {
      //     continue
      //   }
      // }

      if (value === '' || handled.name?.toLocaleLowerCase().includes(value)
        || handled.namePlainText?.toLocaleLowerCase().includes(value) ) {
        listSearch.push(handled)
      }
    }

    this.listOfData = [...listSearch]
  }

  clearSearch() {
    this.searchText = ''
    this.onKeyUp(null)
  }

  setSelectedAll(){
    for (let i = 0; i < this.listOfData.length; i++) {
      this.listOfData[i].selected = this.isCheckedAll
      this.setSelected(this.listOfData[i])
    }
  }

  backToUser() {
    this.router.navigate(['pages','users']);
  }

  getListGroup(){
    this.listGroup.push({label:"EDC", value:"EDC"})
    this.listGroup.push({label:"Giảng viên Đại Học", value:"Giảng viên Đại Học"})
  }

  getListArea(){
    this.listArea.push({label:"Cần Thơ", value:"Cần Thơ"})
    this.listArea.push({label:"Đồng Nai", value:"Đồng Nai"})
    this.listArea.push({label:"Sóc Trăng", value:"Sóc Trăng"})
    this.listArea.push({label:"Bến Tre", value:"Bến Tre"})
    this.listArea.push({label:"Nha Trang", value:"Nha Trang"})
  }

  listGroupChange(values: any) {
    this.selectedGroups = values
    this.onKeyUp(null)
  }

  listAreaChange(values: any) {
    this.selectedAreas = values
    this.onKeyUp(null)
  }
}

