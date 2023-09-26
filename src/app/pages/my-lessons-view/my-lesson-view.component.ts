import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { LocalDataSource } from 'ng2-smart-table';

import { SmartTableData } from '../../@core/data/smart-table';
import { FormControl, FormGroup, NonNullableFormBuilder, Validators } from '@angular/forms';
import { NbIconLibraries } from '@nebular/theme';
import { Router } from '@angular/router';

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
    {name:'Racing car sprays burning fuel into crowd.', steps: 0, percent: 100, showInfo: true},
    {name:'Japanese princess to wed commoner.', steps: 0, percent: 100, showInfo: true},
    {name:'Australian walks 100km after outback crash.', steps: 0, percent: 100, showInfo: true},
    {name:'Man charged over missing wedding girl.', steps: 0, percent: 100, showInfo: true},
    {name:'Los Angeles battles huge wildfires.', steps: 5, percent: 25, showInfo: true},
  ];

  dataAdvanced = [
    {name:'Racing car sprays burning fuel into crowd.', steps: 0, percent: 100, showInfo: true},
    {name:'Japanese princess to wed commoner.', steps: 5, percent: 75, showInfo: true},
    {name:'Australian walks 100km after outback crash.', steps: 5, percent: 50, showInfo: true},
    {name:'Man charged over missing wedding girl.', steps: 5, percent: 50, showInfo: true},
    {name:'Los Angeles battles huge wildfires.', steps: 5, percent: 0, showInfo: true},
  ];

  constructor(iconsLibrary: NbIconLibraries,
    private router: Router,
    private location: Location,
  ) {
    iconsLibrary.registerFontPack('fa', { packClass: 'fa', iconClassPrefix: 'fa' });
    iconsLibrary.registerFontPack('far', { packClass: 'far', iconClassPrefix: 'fa' });
    iconsLibrary.registerFontPack('ion', { iconClassPrefix: 'ion' });
  }

  backToMyLesson() {
    this.router.navigate(['pages','my-lessons']);
  } 
}
