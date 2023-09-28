import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { LocalDataSource } from 'ng2-smart-table';

import { SmartTableData } from '../../@core/data/smart-table';
import { FormControl, FormGroup, NonNullableFormBuilder, Validators } from '@angular/forms';
import { NbIconLibraries } from '@nebular/theme';
import { Router } from '@angular/router';
import { ChangeTitleService } from '../../change-title.service';

interface Lesson {
  imageUrl: string;
  name: string;
  description: string;
  progressPercent: number;
  publishedDate: string;
  isPrivate: boolean;
}

@Component({
  selector: 'ngx-my-lesson-view',
  styleUrls: ['./my-lesson-view.component.scss'],
  templateUrl: './my-lesson-view.component.html',
})
export class MyLessonViewComponent {
  data = [
    {name:'Bài 1: Tổng quan về khóa học', percent: 100, timeSpent: '00:20:19'},
    {name:'Bài 2: ELANCO PIG ACADEMY là gì?', percent: 100, timeSpent: '00:25:03'},
    {name:'Bài 3: Các dấu hiệu bệnh', percent: 75, timeSpent: '00:20:54'},
    {name:'Bài 4: Phương pháp chữa trị', percent: 50, timeSpent: '00:15:16'},
    {name:'Bài 5: Cách thức phòng ngừa', percent: 0, timeSpent: '00:10:04'},
  ];

  // dataAdvanced = [
  //   {name:'Racing car sprays burning fuel into crowd.', steps: 0, percent: 100, showInfo: true},
  //   {name:'Japanese princess to wed commoner.', steps: 5, percent: 75, showInfo: true},
  //   {name:'Australian walks 100km after outback crash.', steps: 5, percent: 50, showInfo: true},
  //   {name:'Man charged over missing wedding girl.', steps: 5, percent: 50, showInfo: true},
  //   {name:'Los Angeles battles huge wildfires.', steps: 5, percent: 0, showInfo: true},
  // ];

  constructor(iconsLibrary: NbIconLibraries,
    private router: Router,
    private location: Location,
    private changeTitleService: ChangeTitleService
  ) {
    iconsLibrary.registerFontPack('fa', { packClass: 'fa', iconClassPrefix: 'fa' });
    iconsLibrary.registerFontPack('far', { packClass: 'far', iconClassPrefix: 'fa' });
    iconsLibrary.registerFontPack('ion', { iconClassPrefix: 'ion' });

    this.changeTitleService.setDataTitle('Khóa học của tôi - Chi tiết')
  }

  backToMyLesson() {
    this.router.navigate(['pages','my-lessons']);
  }
}
