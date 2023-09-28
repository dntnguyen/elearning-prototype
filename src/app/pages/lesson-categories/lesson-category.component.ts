import { Component } from '@angular/core';
import { en_US, NzI18nService, zh_CN } from 'ng-zorro-antd/i18n';
import { ChangeTitleService } from '../../change-title.service';
import { NzFormatEmitEvent } from 'ng-zorro-antd/tree';
import { NzContextMenuService, NzDropdownMenuComponent } from 'ng-zorro-antd/dropdown';

interface TreeNode {
  name: string;
  key: string;
  children?: TreeNode[];
}


@Component({
  selector: 'ngx-lesson-category',
  styleUrls: ['./lesson-category.component.scss'],
  templateUrl: './lesson-category.component.html',
})
export class LessonCategoryComponent {
  searchValue = '';

  nodes = [
    {
      title: 'Tất cả',
      key: 'tatca',
      expanded: true,
      children: [
        {
          title: 'Livestock',
          key: 'livestock',
          expanded: true,
          children: [
            {
              title: 'Heo',
              key: 'heo',
              expanded: true,
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
        },
        {
          title: 'Khác',
          key: 'khac',
          children: [
            {
              title: 'Phân loại 1', key: 'phanloai1', children: [
                {
                  title: 'Phân loại 1.1', key: 'phanloai1-1', children: [
                    { title: 'Phân loại 1.1.1', key: 'phanloai1.1.1', isLeaf: true },
                    { title: 'Phân loại 1.1.2', key: 'phanloai1.1.2', isLeaf: true },
                    { title: 'Phân loại 1.1.3', key: 'phanloai1.1.3', isLeaf: true },
                  ]
                },
              ]
            },
            {
              title: 'Phân loại 2', key: 'phanloai2', children: [
                {
                  title: 'Phân loại 2.1', key: 'phanloai2-1', children: [
                    { title: 'Phân loại 2.1.1', key: 'phanloai2.1.1', isLeaf: true },
                    { title: 'Phân loại 2.1.2', key: 'phanloai2.1.2', isLeaf: true },
                    { title: 'Phân loại 2.1.3', key: 'phanloai2.1.3', isLeaf: true },
                  ]
                },
              ]
            },
            { title: 'Phân loại 3', key: 'phanloai3', isLeaf: true },
          ]
        }
      ]
    }
  ];

  constructor(

    private i18n: NzI18nService,
    private changeTitleService: ChangeTitleService,
    private nzContextMenuService: NzContextMenuService,
  ) {

    this.i18n.setLocale(en_US);
    this.changeTitleService.setDataTitle('Phân loại bài học')
  }

  nzEvent(event: NzFormatEmitEvent): void {
    console.log(event);
  }

  contextMenu($event: MouseEvent, menu: NzDropdownMenuComponent, node: any): void {
    this.nzContextMenuService.create($event, menu);
  }

  selectDropdown(e): void {
    console.log(e)
  }
}
