import { Component } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';

import { SmartTableData } from '../../@core/data/smart-table';
import { FormControl, FormGroup, NonNullableFormBuilder, Validators } from '@angular/forms';
import { NbIconLibraries } from '@nebular/theme';
import { Router } from '@angular/router';

interface UserAndGroup {
  selected: boolean;
  code: string;
  name: string;
  type: string;
  email: string;
  groupCode?: string
}

@Component({
  selector: 'ngx-lesson-assign',
  styleUrls: ['./lesson-assign.component.scss'],
  templateUrl: './lesson-assign.component.html',
})
export class LessonAssignComponent {
  defaultData: UserAndGroup[] = [
    {
      selected: false,
      code: 'U0001',
      name: 'Lý Thị Thanh Tâm',
      type: 'User',
      email: 'user1@gmail.com',
      groupCode: 'G0001'
    },
    {
      selected: false,
      code: 'U0002',
      name: 'Trần Trung Hiếu',
      type: 'User',
      email: 'user2@gmail.com',
      groupCode: 'G0001'
    },
    {
      selected: false,
      code: 'U0003',
      name: 'Nguyễn Khánh Trân',
      type: 'User',
      email: 'user3@gmail.com',
      groupCode: 'G0001'
    },
    {
      selected: false,
      code: 'U0004',
      name: 'Nguyễn Văn Quý',
      type: 'User',
      email: 'user4@gmail.com',
      groupCode: 'G0002'
    },
    {
      selected: false,
      code: 'U0005',
      name: 'Lê Thị Ngọc Thủy',
      type: 'User',
      email: 'user5@gmail.com',
      groupCode: 'G0002'
    },
    {
      selected: false,
      code: 'G0001',
      name: 'Nhóm EDC',
      type: 'Group',
      email: '',
      groupCode: null
    },
    {
      selected: false,
      code: 'G0002',
      name: 'Nhóm giảng viên Đại Học',
      type: 'Group',
      email: '',
      groupCode: null
    },
  ];

  listOfData: UserAndGroup[]

  listOfSelected: UserAndGroup[]

  constructor(iconsLibrary: NbIconLibraries,
    private router: Router
  ) {
    iconsLibrary.registerFontPack('fa', { packClass: 'fa', iconClassPrefix: 'fa' });
    iconsLibrary.registerFontPack('far', { packClass: 'far', iconClassPrefix: 'fa' });
    iconsLibrary.registerFontPack('ion', { iconClassPrefix: 'ion' });

    this.listOfData = [...this.defaultData]
    console.log(this.listOfData)
  }

  setSelected(data: UserAndGroup) {
    if (data === null || data === undefined) {
      return;
    }
    if (!this.listOfSelected) {
      this.listOfSelected = [] as UserAndGroup[]
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
  }
}

