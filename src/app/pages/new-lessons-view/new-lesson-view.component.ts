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
  selector: 'ngx-new-lesson-view',
  styleUrls: ['./new-lesson-view.component.scss'],
  templateUrl: './new-lesson-view.component.html',
})
export class NewLessonViewComponent {
  data = [
    {name:'Bài 1: Tổng quan về khóa học', percent: 100, timeSpent: '00:20:19'},
    {name:'Bài 2: ELANCO PIG ACADEMY là gì?', percent: 100, timeSpent: '00:25:03'},
    {name:'Bài 3: Các dấu hiệu bệnh', percent: 75, timeSpent: '00:20:54'},
    {name:'Bài 4: Phương pháp chữa trị', percent: 50, timeSpent: '00:15:16'},
    {name:'Bài 5: Cách thức phòng ngừa', percent: 0, timeSpent: '00:10:04'},
  ];
  listOfEvalution=[
    {name:'Jack', createdOn:'02/10/2023', image:'jack.png', evalute:'M.hyopneumoniae khi xâm nhập vào cơ thể, nó bám vào lông nhung đường hô hấp và phá huỷ lớp lông nhung đường hô hấp (tác dụng giữ bụi và ngăn cản mầm bệnh đi sâu vào đường hô hấp), làm suy yếu hệ thống phòng vệ màng nhày – lông nhung, mở đường và tạo cơ hội cho các mầm bệnh đường hô hấp khác bội nhiễm như: Pasterella multocida (Tụ huyết trùng), APP (viêm phổi dính sườn), Haemophillus parasuis (Glasser’s), Bordertella bronchiseptica (Viêm teo mũi truyền nhiễm), Streptococcus suis (Bệnh liên cầu), PRRS (Tai xanh) và PCV2 (Circo) xâm nhập và tấn công gây bệnh hô hấp phức hợp (PRDC), làm tăng tỷ lệ chết và loại thải heo.'},
    {name:'Kate', createdOn:'05/10/2023', image:'kate.png', evalute:'Khóa học cực kỳ chất lượng.'},
    {name:'Lee', createdOn:'02/10/2023', image:'lee.png', evalute:'Nên thêm nhiều ví dụ'},
    {name:'Alan', createdOn:'02/10/2023', image:'alan.png', evalute:'Nên thêm nhiều ví dụ'},
    {name:'Eva', createdOn:'02/10/2023', image:'eva.png', evalute:'Nên thêm nhiều ví dụ'},
    {name:'Jack', createdOn:'02/10/2023', image:'jack.png', evalute:'Nên thêm nhiều ví dụ'},
  ]
  isOpenEvalution= false;
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

    this.changeTitleService.setDataTitle('Khóa học mới - Chi tiết')
  }

  backToMyLesson() {
    this.router.navigate(['pages','new-lessons']);
  }

  startLesson() {
    this.router.navigate(['pages','learning-view']);
  }
  openModalToEvalute(){
    this.isOpenEvalution = true
  }
  handleCancel(){
    this.isOpenEvalution=false
  }
  handleOk(){
    this.isOpenEvalution=false

  }
}
