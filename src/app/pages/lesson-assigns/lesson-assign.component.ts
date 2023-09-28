import { Component } from '@angular/core';
import { NbIconLibraries } from '@nebular/theme';
import { Router } from '@angular/router';
import { ChangeTitleService } from '../../change-title.service';

interface UserAndGroup {
  selected: boolean;
  code: string;
  name: string;
  type: string;
  email: string;
  groupCode?: string;
  groupName?: string;
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
      groupCode: 'G0001',
      groupName: 'EDC',
    },
    {
      selected: false,
      code: 'U0002',
      name: 'Trần Trung Hiếu',
      type: 'User',
      email: 'user2@gmail.com',
      groupCode: 'G0001',
      groupName: 'EDC',
    },
    {
      selected: false,
      code: 'U0003',
      name: 'Nguyễn Khánh Trân',
      type: 'User',
      email: 'user3@gmail.com',
      groupCode: 'G0001',
      groupName: 'EDC',
    },
    {
      selected: false,
      code: 'U0004',
      name: 'Nguyễn Văn Quý',
      type: 'User',
      email: 'user4@gmail.com',
      groupCode: 'G0002',
      groupName: 'Giảng viên Đại Học',
    },
    {
      selected: false,
      code: 'U0005',
      name: 'Lê Thị Ngọc Thủy',
      type: 'User',
      email: 'user5@gmail.com',
      groupCode: 'G0002',
      groupName: 'Giảng viên Đại Học',
    },
    {
      selected: false,
      code: 'U0006',
      name: 'Nguyễn Văn Khối',
      type: 'User',
      email: 'user6@gmail.com',
      groupCode: 'G0002',
      groupName: 'Giảng viên Đại Học',
    },
    {
      selected: false,
      code: 'U0007',
      name: 'Hoàng Minh Tuấn',
      type: 'User',
      email: 'user7@gmail.com',
      groupCode: 'G0002',
      groupName: 'Giảng viên Đại Học',
    },
    {
      selected: false,
      code: 'U0008',
      name: 'Nguyễn Thái Hòa',
      type: 'User',
      email: 'user8@gmail.com',
      groupCode: 'G0001',
      groupName: 'EDC',
    },
    {
      selected: false,
      code: 'U0009',
      name: 'Võ Thành Trung',
      type: 'User',
      email: 'user9@gmail.com',
      groupCode: 'G0001',
      groupName: 'EDC',
    },
    {
      selected: false,
      code: 'G0001',
      name: 'EDC',
      type: 'Group',
      email: '',
      groupCode: null,
      groupName: null,
    },
    {
      selected: false,
      code: 'G0002',
      name: 'Giảng viên Đại Học',
      type: 'Group',
      email: '',
      groupCode: null,
      groupName: null,
    },
  ];

  listOfData: UserAndGroup[]

  listOfSelected: UserAndGroup[]

  searchText: string
  visible = false;

  constructor(iconsLibrary: NbIconLibraries,
    private router: Router,
    private changeTitleService: ChangeTitleService
  ) {
    iconsLibrary.registerFontPack('fa', { packClass: 'fa', iconClassPrefix: 'fa' });
    iconsLibrary.registerFontPack('far', { packClass: 'far', iconClassPrefix: 'fa' });
    iconsLibrary.registerFontPack('ion', { iconClassPrefix: 'ion' });

    this.changeTitleService.setDataTitle('Assign bài học')

    this.listOfData = [...this.defaultData]
  }

  setSelected(data: UserAndGroup) {
    if (data === null || data === undefined) {
      return;
    }
    if (!this.listOfSelected) {
      this.listOfSelected = [] as UserAndGroup[]
    }
    if (data.selected) {
      if (data.type === 'User') {
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
      } //if (data.type === 'User')
      else if (data.type === 'Group') {
        for (let i = 0; i < this.defaultData.length; i++) {
          let handledUserOfListOfData = this.defaultData[i]
          if (handledUserOfListOfData.type !== 'User') {
            continue
          }

          if (handledUserOfListOfData.groupCode !== data.code) {
            continue
          }

          this.defaultData[i].selected = true

          let isExists = false
          for (let s = 0; s < this.listOfSelected.length; s++) {
            if (this.listOfSelected[s].code === handledUserOfListOfData.code) {
              isExists = true
              break
            }
          }

          if (isExists === false) {
            this.listOfSelected.push(handledUserOfListOfData)
          }
        }
      }
    } else {
      if (data.type === 'User') {
        for (let i = this.listOfSelected.length - 1; i >= 0; i--) {
          if (this.listOfSelected[i].code === data.code) {
            this.listOfSelected.splice(i, 1)
          }
        }
        this.unSelectedGroupIfNoUser(data.groupCode)
      } //if (data.type === 'User')
      else if (data.type === 'Group') {
        for (let i = 0; i < this.defaultData.length; i++) {
          let handledUserOfListOfData = this.defaultData[i]

          if (handledUserOfListOfData.type !== 'User') {
            continue
          }

          if (handledUserOfListOfData.groupCode !== data.code) {
            continue
          }

          this.defaultData[i].selected = false

          for (let s = this.listOfSelected.length - 1; s >= 0; s--)
            if (this.listOfSelected[s].code === handledUserOfListOfData.code) {
              this.listOfSelected.splice(s, 1)
            }
        }
      }
    }

    this.listOfSelected = [...this.listOfSelected]
    this.listOfData = [...this.listOfData]
  }

  unSelectedGroupIfNoUser(groupCode: string) {
    let count = 0

    for (let x = 0; x < this.listOfData.length; x++) {
      let checked = this.listOfData[x]

      if (checked.groupCode == groupCode && checked.type == 'User' && checked.selected == true) {
        count = count + 1
      }
    }

    if (count <= 0) {
      for (let i = 0; i < this.listOfData.length; i++) {
        let handled = this.listOfData[i]
        if (handled.type === 'Group' && handled.code === groupCode) {
          this.listOfData[i].selected = false
          this.listOfData = [...this.listOfData]
          return
        }
      }
    }
  }

  removeUserFromListSelected(data: UserAndGroup) {
    let code = data.code
    let groupCode = data.groupCode

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
        this.unSelectedGroupIfNoUser(groupCode)
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

    if (value.length <= 0) {
      this.listOfData = [...this.defaultData]
      return
    }

    if (!value) {
      return
    }

    if (value.length < 3) {
      return
    }

    value = value.toLocaleLowerCase()

    let listSearch: UserAndGroup[] = []
    for (let i = 0; i < this.defaultData.length; i++) {
      let handled = this.defaultData[i]
      if (handled.name?.toLocaleLowerCase().includes(value) || handled.email?.toLocaleLowerCase().includes(value)) {
        listSearch.push(handled)
      }
    }

    this.listOfData = [...listSearch]
  }

  clearSearch() {
    this.searchText = ''
    this.onKeyUp(null)
  }
}

