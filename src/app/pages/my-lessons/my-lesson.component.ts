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
  description: string;
  progressPercent: number;
  publishedDate: string;
  isPrivate: boolean;
}

@Component({
  selector: 'ngx-my-lesson',
  styleUrls: ['./my-lesson.component.scss'],
  templateUrl: './my-lesson.component.html',
})
export class MyLessonComponent {
  listOfData: Lesson[] = [
    {
      imageUrl: '',
      name: 'Bệnh tiêu chảy cấp PED và viêm ruột truyền nhiễm',
      description: 'Bệnh thiếu máu do vi khuẩn M. suis thường bị gọi nhầm là bệnh...',
      progressPercent: 56,
      publishedDate: '12/09/2023',
      isPrivate: true
    },
    {
      imageUrl: '',
      name: 'Bệnh tiêu chảy cấp PED và viêm ruột truyền nhiễm',
      description: 'Bệnh thiếu máu do vi khuẩn M. suis thường bị gọi nhầm là bệnh...',
      progressPercent: 90,
      publishedDate: '12/09/2023',
      isPrivate: false
    },
    {
      imageUrl: '',
      name: 'Bệnh tiêu chảy cấp PED và viêm ruột truyền nhiễm',
      description: 'Bệnh thiếu máu do vi khuẩn M. suis thường bị gọi nhầm là bệnh...',
      progressPercent: 32,
      publishedDate: '12/09/2023',
      isPrivate: false
    },
    {
      imageUrl: '',
      name: 'Bệnh tiêu chảy cấp PED và viêm ruột truyền nhiễm',
      description: 'Bệnh thiếu máu do vi khuẩn M. suis thường bị gọi nhầm là bệnh...',
      progressPercent: 77,
      publishedDate: '12/09/2023',
      isPrivate: true
    },
    {
      imageUrl: '',
      name: 'Bệnh tiêu chảy cấp PED và viêm ruột truyền nhiễm',
      description: 'Bệnh thiếu máu do vi khuẩn M. suis thường bị gọi nhầm là bệnh...',
      progressPercent: 45,
      publishedDate: '12/09/2023',
      isPrivate: true
    },
    {
      imageUrl: '',
      name: 'Bệnh tiêu chảy cấp PED và viêm ruột truyền nhiễm',
      description: 'Bệnh thiếu máu do vi khuẩn M. suis thường bị gọi nhầm là bệnh...',
      progressPercent: 55,
      publishedDate: '12/09/2023',
      isPrivate: false
    },
    {
      imageUrl: '',
      name: 'Bệnh tiêu chảy cấp PED và viêm ruột truyền nhiễm',
      description: 'Bệnh thiếu máu do vi khuẩn M. suis thường bị gọi nhầm là bệnh...',
      progressPercent: 67,
      publishedDate: '12/09/2023',
      isPrivate: true
    },
    {
      imageUrl: '',
      name: 'Bệnh tiêu chảy cấp PED và viêm ruột truyền nhiễm',
      description: 'Bệnh thiếu máu do vi khuẩn M. suis thường bị gọi nhầm là bệnh...',
      progressPercent: 10,
      publishedDate: '12/09/2023',
      isPrivate: false
    },
    {
      imageUrl: '',
      name: 'Bệnh tiêu chảy cấp PED và viêm ruột truyền nhiễm',
      description: 'Bệnh thiếu máu do vi khuẩn M. suis thường bị gọi nhầm là bệnh...',
      progressPercent: 23,
      publishedDate: '12/09/2023',
      isPrivate: true
    },
    {
      imageUrl: '',
      name: 'Bệnh tiêu chảy cấp PED và viêm ruột truyền nhiễm',
      description: 'Bệnh thiếu máu do vi khuẩn M. suis thường bị gọi nhầm là bệnh...',
      progressPercent: 80,
      publishedDate: '12/09/2023',
      isPrivate: true
    },
    {
      imageUrl: '',
      name: 'Bệnh tiêu chảy cấp PED và viêm ruột truyền nhiễm',
      description: 'Bệnh thiếu máu do vi khuẩn M. suis thường bị gọi nhầm là bệnh...',
      progressPercent: 69,
      publishedDate: '12/09/2023',
      isPrivate: true
    },
    {
      imageUrl: '',
      name: 'Bệnh tiêu chảy cấp PED và viêm ruột truyền nhiễm',
      description: 'Bệnh thiếu máu do vi khuẩn M. suis thường bị gọi nhầm là bệnh...',
      progressPercent: 100,
      publishedDate: '12/09/2023',
      isPrivate: true
    },
    {
      imageUrl: '',
      name: 'Bệnh tiêu chảy cấp PED và viêm ruột truyền nhiễm',
      description: 'Bệnh thiếu máu do vi khuẩn M. suis thường bị gọi nhầm là bệnh...',
      progressPercent: 42,
      publishedDate: '12/09/2023',
      isPrivate: false
    },
    {
      imageUrl: '',
      name: 'Bệnh tiêu chảy cấp PED và viêm ruột truyền nhiễm',
      description: 'Bệnh thiếu máu do vi khuẩn M. suis thường bị gọi nhầm là bệnh...',
      progressPercent: 0,
      publishedDate: '12/09/2023',
      isPrivate: false
    },
    {
      imageUrl: '',
      name: 'Bệnh tiêu chảy cấp PED và viêm ruột truyền nhiễm',
      description: 'Bệnh thiếu máu do vi khuẩn M. suis thường bị gọi nhầm là bệnh...',
      progressPercent: 80,
      publishedDate: '12/09/2023',
      isPrivate: false
    },
    {
      imageUrl: '',
      name: 'Bệnh tiêu chảy cấp PED và viêm ruột truyền nhiễm',
      description: 'Bệnh thiếu máu do vi khuẩn M. suis thường bị gọi nhầm là bệnh...',
      progressPercent: 100,
      publishedDate: '12/09/2023',
      isPrivate: false
    },
    {
      imageUrl: '',
      name: 'Bệnh tiêu chảy cấp PED và viêm ruột truyền nhiễm',
      description: 'Bệnh thiếu máu do vi khuẩn M. suis thường bị gọi nhầm là bệnh...',
      progressPercent: 56,
      publishedDate: '12/09/2023',
      isPrivate: true
    },
    {
      imageUrl: '',
      name: 'Bệnh tiêu chảy cấp PED và viêm ruột truyền nhiễm',
      description: 'Bệnh thiếu máu do vi khuẩn M. suis thường bị gọi nhầm là bệnh...',
      progressPercent: 90,
      publishedDate: '12/09/2023',
      isPrivate: false
    },
    {
      imageUrl: '',
      name: 'Bệnh tiêu chảy cấp PED và viêm ruột truyền nhiễm',
      description: 'Bệnh thiếu máu do vi khuẩn M. suis thường bị gọi nhầm là bệnh...',
      progressPercent: 32,
      publishedDate: '12/09/2023',
      isPrivate: false
    },
    {
      imageUrl: '',
      name: 'Bệnh tiêu chảy cấp PED và viêm ruột truyền nhiễm',
      description: 'Bệnh thiếu máu do vi khuẩn M. suis thường bị gọi nhầm là bệnh...',
      progressPercent: 77,
      publishedDate: '12/09/2023',
      isPrivate: true
    },
    {
      imageUrl: '',
      name: 'Bệnh tiêu chảy cấp PED và viêm ruột truyền nhiễm',
      description: 'Bệnh thiếu máu do vi khuẩn M. suis thường bị gọi nhầm là bệnh...',
      progressPercent: 45,
      publishedDate: '12/09/2023',
      isPrivate: true
    },
    {
      imageUrl: '',
      name: 'Bệnh tiêu chảy cấp PED và viêm ruột truyền nhiễm',
      description: 'Bệnh thiếu máu do vi khuẩn M. suis thường bị gọi nhầm là bệnh...',
      progressPercent: 55,
      publishedDate: '12/09/2023',
      isPrivate: false
    },
    {
      imageUrl: '',
      name: 'Bệnh tiêu chảy cấp PED và viêm ruột truyền nhiễm',
      description: 'Bệnh thiếu máu do vi khuẩn M. suis thường bị gọi nhầm là bệnh...',
      progressPercent: 67,
      publishedDate: '12/09/2023',
      isPrivate: true
    },
    {
      imageUrl: '',
      name: 'Bệnh tiêu chảy cấp PED và viêm ruột truyền nhiễm',
      description: 'Bệnh thiếu máu do vi khuẩn M. suis thường bị gọi nhầm là bệnh...',
      progressPercent: 10,
      publishedDate: '12/09/2023',
      isPrivate: false
    },
    {
      imageUrl: '',
      name: 'Bệnh tiêu chảy cấp PED và viêm ruột truyền nhiễm',
      description: 'Bệnh thiếu máu do vi khuẩn M. suis thường bị gọi nhầm là bệnh...',
      progressPercent: 23,
      publishedDate: '12/09/2023',
      isPrivate: true
    },
    {
      imageUrl: '',
      name: 'Bệnh tiêu chảy cấp PED và viêm ruột truyền nhiễm',
      description: 'Bệnh thiếu máu do vi khuẩn M. suis thường bị gọi nhầm là bệnh...',
      progressPercent: 80,
      publishedDate: '12/09/2023',
      isPrivate: true
    },
    {
      imageUrl: '',
      name: 'Bệnh tiêu chảy cấp PED và viêm ruột truyền nhiễm',
      description: 'Bệnh thiếu máu do vi khuẩn M. suis thường bị gọi nhầm là bệnh...',
      progressPercent: 69,
      publishedDate: '12/09/2023',
      isPrivate: true
    },
    {
      imageUrl: '',
      name: 'Bệnh tiêu chảy cấp PED và viêm ruột truyền nhiễm',
      description: 'Bệnh thiếu máu do vi khuẩn M. suis thường bị gọi nhầm là bệnh...',
      progressPercent: 100,
      publishedDate: '12/09/2023',
      isPrivate: true
    },
    {
      imageUrl: '',
      name: 'Bệnh tiêu chảy cấp PED và viêm ruột truyền nhiễm',
      description: 'Bệnh thiếu máu do vi khuẩn M. suis thường bị gọi nhầm là bệnh...',
      progressPercent: 42,
      publishedDate: '12/09/2023',
      isPrivate: false
    },
    {
      imageUrl: '',
      name: 'Bệnh tiêu chảy cấp PED và viêm ruột truyền nhiễm',
      description: 'Bệnh thiếu máu do vi khuẩn M. suis thường bị gọi nhầm là bệnh...',
      progressPercent: 0,
      publishedDate: '12/09/2023',
      isPrivate: false
    },
    {
      imageUrl: '',
      name: 'Bệnh tiêu chảy cấp PED và viêm ruột truyền nhiễm',
      description: 'Bệnh thiếu máu do vi khuẩn M. suis thường bị gọi nhầm là bệnh...',
      progressPercent: 80,
      publishedDate: '12/09/2023',
      isPrivate: false
    },
    {
      imageUrl: '',
      name: 'Bệnh tiêu chảy cấp PED và viêm ruột truyền nhiễm',
      description: 'Bệnh thiếu máu do vi khuẩn M. suis thường bị gọi nhầm là bệnh...',
      progressPercent: 100,
      publishedDate: '12/09/2023',
      isPrivate: false
    },
    {
      imageUrl: '',
      name: 'Bệnh tiêu chảy cấp PED và viêm ruột truyền nhiễm',
      description: 'Bệnh thiếu máu do vi khuẩn M. suis thường bị gọi nhầm là bệnh...',
      progressPercent: 56,
      publishedDate: '12/09/2023',
      isPrivate: true
    },
    {
      imageUrl: '',
      name: 'Bệnh tiêu chảy cấp PED và viêm ruột truyền nhiễm',
      description: 'Bệnh thiếu máu do vi khuẩn M. suis thường bị gọi nhầm là bệnh...',
      progressPercent: 90,
      publishedDate: '12/09/2023',
      isPrivate: false
    },
    {
      imageUrl: '',
      name: 'Bệnh tiêu chảy cấp PED và viêm ruột truyền nhiễm',
      description: 'Bệnh thiếu máu do vi khuẩn M. suis thường bị gọi nhầm là bệnh...',
      progressPercent: 32,
      publishedDate: '12/09/2023',
      isPrivate: false
    },
    {
      imageUrl: '',
      name: 'Bệnh tiêu chảy cấp PED và viêm ruột truyền nhiễm',
      description: 'Bệnh thiếu máu do vi khuẩn M. suis thường bị gọi nhầm là bệnh...',
      progressPercent: 77,
      publishedDate: '12/09/2023',
      isPrivate: true
    },
    {
      imageUrl: '',
      name: 'Bệnh tiêu chảy cấp PED và viêm ruột truyền nhiễm',
      description: 'Bệnh thiếu máu do vi khuẩn M. suis thường bị gọi nhầm là bệnh...',
      progressPercent: 45,
      publishedDate: '12/09/2023',
      isPrivate: true
    },
    {
      imageUrl: '',
      name: 'Bệnh tiêu chảy cấp PED và viêm ruột truyền nhiễm',
      description: 'Bệnh thiếu máu do vi khuẩn M. suis thường bị gọi nhầm là bệnh...',
      progressPercent: 55,
      publishedDate: '12/09/2023',
      isPrivate: false
    },
    {
      imageUrl: '',
      name: 'Bệnh tiêu chảy cấp PED và viêm ruột truyền nhiễm',
      description: 'Bệnh thiếu máu do vi khuẩn M. suis thường bị gọi nhầm là bệnh...',
      progressPercent: 67,
      publishedDate: '12/09/2023',
      isPrivate: true
    },
    {
      imageUrl: '',
      name: 'Bệnh tiêu chảy cấp PED và viêm ruột truyền nhiễm',
      description: 'Bệnh thiếu máu do vi khuẩn M. suis thường bị gọi nhầm là bệnh...',
      progressPercent: 10,
      publishedDate: '12/09/2023',
      isPrivate: false
    },
    {
      imageUrl: '',
      name: 'Bệnh tiêu chảy cấp PED và viêm ruột truyền nhiễm',
      description: 'Bệnh thiếu máu do vi khuẩn M. suis thường bị gọi nhầm là bệnh...',
      progressPercent: 23,
      publishedDate: '12/09/2023',
      isPrivate: true
    },
    {
      imageUrl: '',
      name: 'Bệnh tiêu chảy cấp PED và viêm ruột truyền nhiễm',
      description: 'Bệnh thiếu máu do vi khuẩn M. suis thường bị gọi nhầm là bệnh...',
      progressPercent: 80,
      publishedDate: '12/09/2023',
      isPrivate: true
    },
    {
      imageUrl: '',
      name: 'Bệnh tiêu chảy cấp PED và viêm ruột truyền nhiễm',
      description: 'Bệnh thiếu máu do vi khuẩn M. suis thường bị gọi nhầm là bệnh...',
      progressPercent: 69,
      publishedDate: '12/09/2023',
      isPrivate: true
    },
    {
      imageUrl: '',
      name: 'Bệnh tiêu chảy cấp PED và viêm ruột truyền nhiễm',
      description: 'Bệnh thiếu máu do vi khuẩn M. suis thường bị gọi nhầm là bệnh...',
      progressPercent: 100,
      publishedDate: '12/09/2023',
      isPrivate: true
    },
    {
      imageUrl: '',
      name: 'Bệnh tiêu chảy cấp PED và viêm ruột truyền nhiễm',
      description: 'Bệnh thiếu máu do vi khuẩn M. suis thường bị gọi nhầm là bệnh...',
      progressPercent: 42,
      publishedDate: '12/09/2023',
      isPrivate: false
    },
    {
      imageUrl: '',
      name: 'Bệnh tiêu chảy cấp PED và viêm ruột truyền nhiễm',
      description: 'Bệnh thiếu máu do vi khuẩn M. suis thường bị gọi nhầm là bệnh...',
      progressPercent: 0,
      publishedDate: '12/09/2023',
      isPrivate: false
    },
    {
      imageUrl: '',
      name: 'Bệnh tiêu chảy cấp PED và viêm ruột truyền nhiễm',
      description: 'Bệnh thiếu máu do vi khuẩn M. suis thường bị gọi nhầm là bệnh...',
      progressPercent: 80,
      publishedDate: '12/09/2023',
      isPrivate: false
    },
    {
      imageUrl: '',
      name: 'Bệnh tiêu chảy cấp PED và viêm ruột truyền nhiễm',
      description: 'Bệnh thiếu máu do vi khuẩn M. suis thường bị gọi nhầm là bệnh...',
      progressPercent: 100,
      publishedDate: '12/09/2023',
      isPrivate: false
    },
    {
      imageUrl: '',
      name: 'Bệnh tiêu chảy cấp PED và viêm ruột truyền nhiễm',
      description: 'Bệnh thiếu máu do vi khuẩn M. suis thường bị gọi nhầm là bệnh...',
      progressPercent: 56,
      publishedDate: '12/09/2023',
      isPrivate: true
    },
    {
      imageUrl: '',
      name: 'Bệnh tiêu chảy cấp PED và viêm ruột truyền nhiễm',
      description: 'Bệnh thiếu máu do vi khuẩn M. suis thường bị gọi nhầm là bệnh...',
      progressPercent: 90,
      publishedDate: '12/09/2023',
      isPrivate: false
    },
    {
      imageUrl: '',
      name: 'Bệnh tiêu chảy cấp PED và viêm ruột truyền nhiễm',
      description: 'Bệnh thiếu máu do vi khuẩn M. suis thường bị gọi nhầm là bệnh...',
      progressPercent: 32,
      publishedDate: '12/09/2023',
      isPrivate: false
    },
    {
      imageUrl: '',
      name: 'Bệnh tiêu chảy cấp PED và viêm ruột truyền nhiễm',
      description: 'Bệnh thiếu máu do vi khuẩn M. suis thường bị gọi nhầm là bệnh...',
      progressPercent: 77,
      publishedDate: '12/09/2023',
      isPrivate: true
    },
    {
      imageUrl: '',
      name: 'Bệnh tiêu chảy cấp PED và viêm ruột truyền nhiễm',
      description: 'Bệnh thiếu máu do vi khuẩn M. suis thường bị gọi nhầm là bệnh...',
      progressPercent: 45,
      publishedDate: '12/09/2023',
      isPrivate: true
    },
    {
      imageUrl: '',
      name: 'Bệnh tiêu chảy cấp PED và viêm ruột truyền nhiễm',
      description: 'Bệnh thiếu máu do vi khuẩn M. suis thường bị gọi nhầm là bệnh...',
      progressPercent: 55,
      publishedDate: '12/09/2023',
      isPrivate: false
    },
    {
      imageUrl: '',
      name: 'Bệnh tiêu chảy cấp PED và viêm ruột truyền nhiễm',
      description: 'Bệnh thiếu máu do vi khuẩn M. suis thường bị gọi nhầm là bệnh...',
      progressPercent: 67,
      publishedDate: '12/09/2023',
      isPrivate: true
    },
    {
      imageUrl: '',
      name: 'Bệnh tiêu chảy cấp PED và viêm ruột truyền nhiễm',
      description: 'Bệnh thiếu máu do vi khuẩn M. suis thường bị gọi nhầm là bệnh...',
      progressPercent: 10,
      publishedDate: '12/09/2023',
      isPrivate: false
    },
    {
      imageUrl: '',
      name: 'Bệnh tiêu chảy cấp PED và viêm ruột truyền nhiễm',
      description: 'Bệnh thiếu máu do vi khuẩn M. suis thường bị gọi nhầm là bệnh...',
      progressPercent: 23,
      publishedDate: '12/09/2023',
      isPrivate: true
    },
    {
      imageUrl: '',
      name: 'Bệnh tiêu chảy cấp PED và viêm ruột truyền nhiễm',
      description: 'Bệnh thiếu máu do vi khuẩn M. suis thường bị gọi nhầm là bệnh...',
      progressPercent: 80,
      publishedDate: '12/09/2023',
      isPrivate: true
    },
    {
      imageUrl: '',
      name: 'Bệnh tiêu chảy cấp PED và viêm ruột truyền nhiễm',
      description: 'Bệnh thiếu máu do vi khuẩn M. suis thường bị gọi nhầm là bệnh...',
      progressPercent: 69,
      publishedDate: '12/09/2023',
      isPrivate: true
    },
    {
      imageUrl: '',
      name: 'Bệnh tiêu chảy cấp PED và viêm ruột truyền nhiễm',
      description: 'Bệnh thiếu máu do vi khuẩn M. suis thường bị gọi nhầm là bệnh...',
      progressPercent: 100,
      publishedDate: '12/09/2023',
      isPrivate: true
    },
    {
      imageUrl: '',
      name: 'Bệnh tiêu chảy cấp PED và viêm ruột truyền nhiễm',
      description: 'Bệnh thiếu máu do vi khuẩn M. suis thường bị gọi nhầm là bệnh...',
      progressPercent: 42,
      publishedDate: '12/09/2023',
      isPrivate: false
    },
    {
      imageUrl: '',
      name: 'Bệnh tiêu chảy cấp PED và viêm ruột truyền nhiễm',
      description: 'Bệnh thiếu máu do vi khuẩn M. suis thường bị gọi nhầm là bệnh...',
      progressPercent: 0,
      publishedDate: '12/09/2023',
      isPrivate: false
    },
    {
      imageUrl: '',
      name: 'Bệnh tiêu chảy cấp PED và viêm ruột truyền nhiễm',
      description: 'Bệnh thiếu máu do vi khuẩn M. suis thường bị gọi nhầm là bệnh...',
      progressPercent: 80,
      publishedDate: '12/09/2023',
      isPrivate: false
    },
    {
      imageUrl: '',
      name: 'Bệnh tiêu chảy cấp PED và viêm ruột truyền nhiễm',
      description: 'Bệnh thiếu máu do vi khuẩn M. suis thường bị gọi nhầm là bệnh...',
      progressPercent: 100,
      publishedDate: '12/09/2023',
      isPrivate: false
    },
    {
      imageUrl: '',
      name: 'Bệnh tiêu chảy cấp PED và viêm ruột truyền nhiễm',
      description: 'Bệnh thiếu máu do vi khuẩn M. suis thường bị gọi nhầm là bệnh...',
      progressPercent: 56,
      publishedDate: '12/09/2023',
      isPrivate: true
    },
    {
      imageUrl: '',
      name: 'Bệnh tiêu chảy cấp PED và viêm ruột truyền nhiễm',
      description: 'Bệnh thiếu máu do vi khuẩn M. suis thường bị gọi nhầm là bệnh...',
      progressPercent: 90,
      publishedDate: '12/09/2023',
      isPrivate: false
    },
    {
      imageUrl: '',
      name: 'Bệnh tiêu chảy cấp PED và viêm ruột truyền nhiễm',
      description: 'Bệnh thiếu máu do vi khuẩn M. suis thường bị gọi nhầm là bệnh...',
      progressPercent: 32,
      publishedDate: '12/09/2023',
      isPrivate: false
    },
    {
      imageUrl: '',
      name: 'Bệnh tiêu chảy cấp PED và viêm ruột truyền nhiễm',
      description: 'Bệnh thiếu máu do vi khuẩn M. suis thường bị gọi nhầm là bệnh...',
      progressPercent: 77,
      publishedDate: '12/09/2023',
      isPrivate: true
    },
    {
      imageUrl: '',
      name: 'Bệnh tiêu chảy cấp PED và viêm ruột truyền nhiễm',
      description: 'Bệnh thiếu máu do vi khuẩn M. suis thường bị gọi nhầm là bệnh...',
      progressPercent: 45,
      publishedDate: '12/09/2023',
      isPrivate: true
    },
    {
      imageUrl: '',
      name: 'Bệnh tiêu chảy cấp PED và viêm ruột truyền nhiễm',
      description: 'Bệnh thiếu máu do vi khuẩn M. suis thường bị gọi nhầm là bệnh...',
      progressPercent: 55,
      publishedDate: '12/09/2023',
      isPrivate: false
    },
    {
      imageUrl: '',
      name: 'Bệnh tiêu chảy cấp PED và viêm ruột truyền nhiễm',
      description: 'Bệnh thiếu máu do vi khuẩn M. suis thường bị gọi nhầm là bệnh...',
      progressPercent: 67,
      publishedDate: '12/09/2023',
      isPrivate: true
    },
    {
      imageUrl: '',
      name: 'Bệnh tiêu chảy cấp PED và viêm ruột truyền nhiễm',
      description: 'Bệnh thiếu máu do vi khuẩn M. suis thường bị gọi nhầm là bệnh...',
      progressPercent: 10,
      publishedDate: '12/09/2023',
      isPrivate: false
    },
    {
      imageUrl: '',
      name: 'Bệnh tiêu chảy cấp PED và viêm ruột truyền nhiễm',
      description: 'Bệnh thiếu máu do vi khuẩn M. suis thường bị gọi nhầm là bệnh...',
      progressPercent: 23,
      publishedDate: '12/09/2023',
      isPrivate: true
    },
    {
      imageUrl: '',
      name: 'Bệnh tiêu chảy cấp PED và viêm ruột truyền nhiễm',
      description: 'Bệnh thiếu máu do vi khuẩn M. suis thường bị gọi nhầm là bệnh...',
      progressPercent: 80,
      publishedDate: '12/09/2023',
      isPrivate: true
    },
    {
      imageUrl: '',
      name: 'Bệnh tiêu chảy cấp PED và viêm ruột truyền nhiễm',
      description: 'Bệnh thiếu máu do vi khuẩn M. suis thường bị gọi nhầm là bệnh...',
      progressPercent: 69,
      publishedDate: '12/09/2023',
      isPrivate: true
    },
    {
      imageUrl: '',
      name: 'Bệnh tiêu chảy cấp PED và viêm ruột truyền nhiễm',
      description: 'Bệnh thiếu máu do vi khuẩn M. suis thường bị gọi nhầm là bệnh...',
      progressPercent: 100,
      publishedDate: '12/09/2023',
      isPrivate: true
    },
    {
      imageUrl: '',
      name: 'Bệnh tiêu chảy cấp PED và viêm ruột truyền nhiễm',
      description: 'Bệnh thiếu máu do vi khuẩn M. suis thường bị gọi nhầm là bệnh...',
      progressPercent: 42,
      publishedDate: '12/09/2023',
      isPrivate: false
    },
    {
      imageUrl: '',
      name: 'Bệnh tiêu chảy cấp PED và viêm ruột truyền nhiễm',
      description: 'Bệnh thiếu máu do vi khuẩn M. suis thường bị gọi nhầm là bệnh...',
      progressPercent: 0,
      publishedDate: '12/09/2023',
      isPrivate: false
    },
    {
      imageUrl: '',
      name: 'Bệnh tiêu chảy cấp PED và viêm ruột truyền nhiễm',
      description: 'Bệnh thiếu máu do vi khuẩn M. suis thường bị gọi nhầm là bệnh...',
      progressPercent: 80,
      publishedDate: '12/09/2023',
      isPrivate: false
    },
    {
      imageUrl: '',
      name: 'Bệnh tiêu chảy cấp PED và viêm ruột truyền nhiễm',
      description: 'Bệnh thiếu máu do vi khuẩn M. suis thường bị gọi nhầm là bệnh...',
      progressPercent: 100,
      publishedDate: '12/09/2023',
      isPrivate: false
    },
    {
      imageUrl: '',
      name: 'Bệnh tiêu chảy cấp PED và viêm ruột truyền nhiễm',
      description: 'Bệnh thiếu máu do vi khuẩn M. suis thường bị gọi nhầm là bệnh...',
      progressPercent: 56,
      publishedDate: '12/09/2023',
      isPrivate: true
    },
    {
      imageUrl: '',
      name: 'Bệnh tiêu chảy cấp PED và viêm ruột truyền nhiễm',
      description: 'Bệnh thiếu máu do vi khuẩn M. suis thường bị gọi nhầm là bệnh...',
      progressPercent: 90,
      publishedDate: '12/09/2023',
      isPrivate: false
    },
    {
      imageUrl: '',
      name: 'Bệnh tiêu chảy cấp PED và viêm ruột truyền nhiễm',
      description: 'Bệnh thiếu máu do vi khuẩn M. suis thường bị gọi nhầm là bệnh...',
      progressPercent: 32,
      publishedDate: '12/09/2023',
      isPrivate: false
    },
    {
      imageUrl: '',
      name: 'Bệnh tiêu chảy cấp PED và viêm ruột truyền nhiễm',
      description: 'Bệnh thiếu máu do vi khuẩn M. suis thường bị gọi nhầm là bệnh...',
      progressPercent: 77,
      publishedDate: '12/09/2023',
      isPrivate: true
    },
    {
      imageUrl: '',
      name: 'Bệnh tiêu chảy cấp PED và viêm ruột truyền nhiễm',
      description: 'Bệnh thiếu máu do vi khuẩn M. suis thường bị gọi nhầm là bệnh...',
      progressPercent: 45,
      publishedDate: '12/09/2023',
      isPrivate: true
    },
    {
      imageUrl: '',
      name: 'Bệnh tiêu chảy cấp PED và viêm ruột truyền nhiễm',
      description: 'Bệnh thiếu máu do vi khuẩn M. suis thường bị gọi nhầm là bệnh...',
      progressPercent: 55,
      publishedDate: '12/09/2023',
      isPrivate: false
    },
    {
      imageUrl: '',
      name: 'Bệnh tiêu chảy cấp PED và viêm ruột truyền nhiễm',
      description: 'Bệnh thiếu máu do vi khuẩn M. suis thường bị gọi nhầm là bệnh...',
      progressPercent: 67,
      publishedDate: '12/09/2023',
      isPrivate: true
    },
    {
      imageUrl: '',
      name: 'Bệnh tiêu chảy cấp PED và viêm ruột truyền nhiễm',
      description: 'Bệnh thiếu máu do vi khuẩn M. suis thường bị gọi nhầm là bệnh...',
      progressPercent: 10,
      publishedDate: '12/09/2023',
      isPrivate: false
    },
    {
      imageUrl: '',
      name: 'Bệnh tiêu chảy cấp PED và viêm ruột truyền nhiễm',
      description: 'Bệnh thiếu máu do vi khuẩn M. suis thường bị gọi nhầm là bệnh...',
      progressPercent: 23,
      publishedDate: '12/09/2023',
      isPrivate: true
    },
    {
      imageUrl: '',
      name: 'Bệnh tiêu chảy cấp PED và viêm ruột truyền nhiễm',
      description: 'Bệnh thiếu máu do vi khuẩn M. suis thường bị gọi nhầm là bệnh...',
      progressPercent: 80,
      publishedDate: '12/09/2023',
      isPrivate: true
    },
    {
      imageUrl: '',
      name: 'Bệnh tiêu chảy cấp PED và viêm ruột truyền nhiễm',
      description: 'Bệnh thiếu máu do vi khuẩn M. suis thường bị gọi nhầm là bệnh...',
      progressPercent: 69,
      publishedDate: '12/09/2023',
      isPrivate: true
    },
    {
      imageUrl: '',
      name: 'Bệnh tiêu chảy cấp PED và viêm ruột truyền nhiễm',
      description: 'Bệnh thiếu máu do vi khuẩn M. suis thường bị gọi nhầm là bệnh...',
      progressPercent: 100,
      publishedDate: '12/09/2023',
      isPrivate: true
    },
    {
      imageUrl: '',
      name: 'Bệnh tiêu chảy cấp PED và viêm ruột truyền nhiễm',
      description: 'Bệnh thiếu máu do vi khuẩn M. suis thường bị gọi nhầm là bệnh...',
      progressPercent: 42,
      publishedDate: '12/09/2023',
      isPrivate: false
    },
    {
      imageUrl: '',
      name: 'Bệnh tiêu chảy cấp PED và viêm ruột truyền nhiễm',
      description: 'Bệnh thiếu máu do vi khuẩn M. suis thường bị gọi nhầm là bệnh...',
      progressPercent: 0,
      publishedDate: '12/09/2023',
      isPrivate: false
    },
    {
      imageUrl: '',
      name: 'Bệnh tiêu chảy cấp PED và viêm ruột truyền nhiễm',
      description: 'Bệnh thiếu máu do vi khuẩn M. suis thường bị gọi nhầm là bệnh...',
      progressPercent: 80,
      publishedDate: '12/09/2023',
      isPrivate: false
    },
    {
      imageUrl: '',
      name: 'Bệnh tiêu chảy cấp PED và viêm ruột truyền nhiễm',
      description: 'Bệnh thiếu máu do vi khuẩn M. suis thường bị gọi nhầm là bệnh...',
      progressPercent: 100,
      publishedDate: '12/09/2023',
      isPrivate: false
    },
    {
      imageUrl: '',
      name: 'Bệnh tiêu chảy cấp PED và viêm ruột truyền nhiễm',
      description: 'Bệnh thiếu máu do vi khuẩn M. suis thường bị gọi nhầm là bệnh...',
      progressPercent: 56,
      publishedDate: '12/09/2023',
      isPrivate: true
    },
    {
      imageUrl: '',
      name: 'Bệnh tiêu chảy cấp PED và viêm ruột truyền nhiễm',
      description: 'Bệnh thiếu máu do vi khuẩn M. suis thường bị gọi nhầm là bệnh...',
      progressPercent: 90,
      publishedDate: '12/09/2023',
      isPrivate: false
    },
    {
      imageUrl: '',
      name: 'Bệnh tiêu chảy cấp PED và viêm ruột truyền nhiễm',
      description: 'Bệnh thiếu máu do vi khuẩn M. suis thường bị gọi nhầm là bệnh...',
      progressPercent: 32,
      publishedDate: '12/09/2023',
      isPrivate: false
    },
    {
      imageUrl: '',
      name: 'Bệnh tiêu chảy cấp PED và viêm ruột truyền nhiễm',
      description: 'Bệnh thiếu máu do vi khuẩn M. suis thường bị gọi nhầm là bệnh...',
      progressPercent: 77,
      publishedDate: '12/09/2023',
      isPrivate: true
    },
    {
      imageUrl: '',
      name: 'Bệnh tiêu chảy cấp PED và viêm ruột truyền nhiễm',
      description: 'Bệnh thiếu máu do vi khuẩn M. suis thường bị gọi nhầm là bệnh...',
      progressPercent: 45,
      publishedDate: '12/09/2023',
      isPrivate: true
    },
    {
      imageUrl: '',
      name: 'Bệnh tiêu chảy cấp PED và viêm ruột truyền nhiễm',
      description: 'Bệnh thiếu máu do vi khuẩn M. suis thường bị gọi nhầm là bệnh...',
      progressPercent: 55,
      publishedDate: '12/09/2023',
      isPrivate: false
    },
    {
      imageUrl: '',
      name: 'Bệnh tiêu chảy cấp PED và viêm ruột truyền nhiễm',
      description: 'Bệnh thiếu máu do vi khuẩn M. suis thường bị gọi nhầm là bệnh...',
      progressPercent: 67,
      publishedDate: '12/09/2023',
      isPrivate: true
    },
    {
      imageUrl: '',
      name: 'Bệnh tiêu chảy cấp PED và viêm ruột truyền nhiễm',
      description: 'Bệnh thiếu máu do vi khuẩn M. suis thường bị gọi nhầm là bệnh...',
      progressPercent: 10,
      publishedDate: '12/09/2023',
      isPrivate: false
    },
    {
      imageUrl: '',
      name: 'Bệnh tiêu chảy cấp PED và viêm ruột truyền nhiễm',
      description: 'Bệnh thiếu máu do vi khuẩn M. suis thường bị gọi nhầm là bệnh...',
      progressPercent: 23,
      publishedDate: '12/09/2023',
      isPrivate: true
    },
    {
      imageUrl: '',
      name: 'Bệnh tiêu chảy cấp PED và viêm ruột truyền nhiễm',
      description: 'Bệnh thiếu máu do vi khuẩn M. suis thường bị gọi nhầm là bệnh...',
      progressPercent: 80,
      publishedDate: '12/09/2023',
      isPrivate: true
    },
    {
      imageUrl: '',
      name: 'Bệnh tiêu chảy cấp PED và viêm ruột truyền nhiễm',
      description: 'Bệnh thiếu máu do vi khuẩn M. suis thường bị gọi nhầm là bệnh...',
      progressPercent: 69,
      publishedDate: '12/09/2023',
      isPrivate: true
    },
    {
      imageUrl: '',
      name: 'Bệnh tiêu chảy cấp PED và viêm ruột truyền nhiễm',
      description: 'Bệnh thiếu máu do vi khuẩn M. suis thường bị gọi nhầm là bệnh...',
      progressPercent: 100,
      publishedDate: '12/09/2023',
      isPrivate: true
    },
    {
      imageUrl: '',
      name: 'Bệnh tiêu chảy cấp PED và viêm ruột truyền nhiễm',
      description: 'Bệnh thiếu máu do vi khuẩn M. suis thường bị gọi nhầm là bệnh...',
      progressPercent: 42,
      publishedDate: '12/09/2023',
      isPrivate: false
    },
    {
      imageUrl: '',
      name: 'Bệnh tiêu chảy cấp PED và viêm ruột truyền nhiễm',
      description: 'Bệnh thiếu máu do vi khuẩn M. suis thường bị gọi nhầm là bệnh...',
      progressPercent: 0,
      publishedDate: '12/09/2023',
      isPrivate: false
    },
    {
      imageUrl: '',
      name: 'Bệnh tiêu chảy cấp PED và viêm ruột truyền nhiễm',
      description: 'Bệnh thiếu máu do vi khuẩn M. suis thường bị gọi nhầm là bệnh...',
      progressPercent: 80,
      publishedDate: '12/09/2023',
      isPrivate: false
    },
    {
      imageUrl: '',
      name: 'Bệnh tiêu chảy cấp PED và viêm ruột truyền nhiễm',
      description: 'Bệnh thiếu máu do vi khuẩn M. suis thường bị gọi nhầm là bệnh...',
      progressPercent: 100,
      publishedDate: '12/09/2023',
      isPrivate: false
    },
    {
      imageUrl: '',
      name: 'Bệnh tiêu chảy cấp PED và viêm ruột truyền nhiễm',
      description: 'Bệnh thiếu máu do vi khuẩn M. suis thường bị gọi nhầm là bệnh...',
      progressPercent: 56,
      publishedDate: '12/09/2023',
      isPrivate: true
    },
    {
      imageUrl: '',
      name: 'Bệnh tiêu chảy cấp PED và viêm ruột truyền nhiễm',
      description: 'Bệnh thiếu máu do vi khuẩn M. suis thường bị gọi nhầm là bệnh...',
      progressPercent: 90,
      publishedDate: '12/09/2023',
      isPrivate: false
    },
    {
      imageUrl: '',
      name: 'Bệnh tiêu chảy cấp PED và viêm ruột truyền nhiễm',
      description: 'Bệnh thiếu máu do vi khuẩn M. suis thường bị gọi nhầm là bệnh...',
      progressPercent: 32,
      publishedDate: '12/09/2023',
      isPrivate: false
    },
    {
      imageUrl: '',
      name: 'Bệnh tiêu chảy cấp PED và viêm ruột truyền nhiễm',
      description: 'Bệnh thiếu máu do vi khuẩn M. suis thường bị gọi nhầm là bệnh...',
      progressPercent: 77,
      publishedDate: '12/09/2023',
      isPrivate: true
    },
    {
      imageUrl: '',
      name: 'Bệnh tiêu chảy cấp PED và viêm ruột truyền nhiễm',
      description: 'Bệnh thiếu máu do vi khuẩn M. suis thường bị gọi nhầm là bệnh...',
      progressPercent: 45,
      publishedDate: '12/09/2023',
      isPrivate: true
    },
    {
      imageUrl: '',
      name: 'Bệnh tiêu chảy cấp PED và viêm ruột truyền nhiễm',
      description: 'Bệnh thiếu máu do vi khuẩn M. suis thường bị gọi nhầm là bệnh...',
      progressPercent: 55,
      publishedDate: '12/09/2023',
      isPrivate: false
    },
    {
      imageUrl: '',
      name: 'Bệnh tiêu chảy cấp PED và viêm ruột truyền nhiễm',
      description: 'Bệnh thiếu máu do vi khuẩn M. suis thường bị gọi nhầm là bệnh...',
      progressPercent: 67,
      publishedDate: '12/09/2023',
      isPrivate: true
    },
    {
      imageUrl: '',
      name: 'Bệnh tiêu chảy cấp PED và viêm ruột truyền nhiễm',
      description: 'Bệnh thiếu máu do vi khuẩn M. suis thường bị gọi nhầm là bệnh...',
      progressPercent: 10,
      publishedDate: '12/09/2023',
      isPrivate: false
    },
    {
      imageUrl: '',
      name: 'Bệnh tiêu chảy cấp PED và viêm ruột truyền nhiễm',
      description: 'Bệnh thiếu máu do vi khuẩn M. suis thường bị gọi nhầm là bệnh...',
      progressPercent: 23,
      publishedDate: '12/09/2023',
      isPrivate: true
    },
    {
      imageUrl: '',
      name: 'Bệnh tiêu chảy cấp PED và viêm ruột truyền nhiễm',
      description: 'Bệnh thiếu máu do vi khuẩn M. suis thường bị gọi nhầm là bệnh...',
      progressPercent: 80,
      publishedDate: '12/09/2023',
      isPrivate: true
    },
    {
      imageUrl: '',
      name: 'Bệnh tiêu chảy cấp PED và viêm ruột truyền nhiễm',
      description: 'Bệnh thiếu máu do vi khuẩn M. suis thường bị gọi nhầm là bệnh...',
      progressPercent: 69,
      publishedDate: '12/09/2023',
      isPrivate: true
    },
    {
      imageUrl: '',
      name: 'Bệnh tiêu chảy cấp PED và viêm ruột truyền nhiễm',
      description: 'Bệnh thiếu máu do vi khuẩn M. suis thường bị gọi nhầm là bệnh...',
      progressPercent: 100,
      publishedDate: '12/09/2023',
      isPrivate: true
    },
    {
      imageUrl: '',
      name: 'Bệnh tiêu chảy cấp PED và viêm ruột truyền nhiễm',
      description: 'Bệnh thiếu máu do vi khuẩn M. suis thường bị gọi nhầm là bệnh...',
      progressPercent: 42,
      publishedDate: '12/09/2023',
      isPrivate: false
    },
    {
      imageUrl: '',
      name: 'Bệnh tiêu chảy cấp PED và viêm ruột truyền nhiễm',
      description: 'Bệnh thiếu máu do vi khuẩn M. suis thường bị gọi nhầm là bệnh...',
      progressPercent: 0,
      publishedDate: '12/09/2023',
      isPrivate: false
    },
    {
      imageUrl: '',
      name: 'Bệnh tiêu chảy cấp PED và viêm ruột truyền nhiễm',
      description: 'Bệnh thiếu máu do vi khuẩn M. suis thường bị gọi nhầm là bệnh...',
      progressPercent: 80,
      publishedDate: '12/09/2023',
      isPrivate: false
    },
    {
      imageUrl: '',
      name: 'Bệnh tiêu chảy cấp PED và viêm ruột truyền nhiễm',
      description: 'Bệnh thiếu máu do vi khuẩn M. suis thường bị gọi nhầm là bệnh...',
      progressPercent: 100,
      publishedDate: '12/09/2023',
      isPrivate: false
    },
    {
      imageUrl: '',
      name: 'Bệnh tiêu chảy cấp PED và viêm ruột truyền nhiễm',
      description: 'Bệnh thiếu máu do vi khuẩn M. suis thường bị gọi nhầm là bệnh...',
      progressPercent: 56,
      publishedDate: '12/09/2023',
      isPrivate: true
    },
    {
      imageUrl: '',
      name: 'Bệnh tiêu chảy cấp PED và viêm ruột truyền nhiễm',
      description: 'Bệnh thiếu máu do vi khuẩn M. suis thường bị gọi nhầm là bệnh...',
      progressPercent: 90,
      publishedDate: '12/09/2023',
      isPrivate: false
    },
    {
      imageUrl: '',
      name: 'Bệnh tiêu chảy cấp PED và viêm ruột truyền nhiễm',
      description: 'Bệnh thiếu máu do vi khuẩn M. suis thường bị gọi nhầm là bệnh...',
      progressPercent: 32,
      publishedDate: '12/09/2023',
      isPrivate: false
    },
    {
      imageUrl: '',
      name: 'Bệnh tiêu chảy cấp PED và viêm ruột truyền nhiễm',
      description: 'Bệnh thiếu máu do vi khuẩn M. suis thường bị gọi nhầm là bệnh...',
      progressPercent: 77,
      publishedDate: '12/09/2023',
      isPrivate: true
    },
    {
      imageUrl: '',
      name: 'Bệnh tiêu chảy cấp PED và viêm ruột truyền nhiễm',
      description: 'Bệnh thiếu máu do vi khuẩn M. suis thường bị gọi nhầm là bệnh...',
      progressPercent: 45,
      publishedDate: '12/09/2023',
      isPrivate: true
    },
    {
      imageUrl: '',
      name: 'Bệnh tiêu chảy cấp PED và viêm ruột truyền nhiễm',
      description: 'Bệnh thiếu máu do vi khuẩn M. suis thường bị gọi nhầm là bệnh...',
      progressPercent: 55,
      publishedDate: '12/09/2023',
      isPrivate: false
    },
    {
      imageUrl: '',
      name: 'Bệnh tiêu chảy cấp PED và viêm ruột truyền nhiễm',
      description: 'Bệnh thiếu máu do vi khuẩn M. suis thường bị gọi nhầm là bệnh...',
      progressPercent: 67,
      publishedDate: '12/09/2023',
      isPrivate: true
    },
    {
      imageUrl: '',
      name: 'Bệnh tiêu chảy cấp PED và viêm ruột truyền nhiễm',
      description: 'Bệnh thiếu máu do vi khuẩn M. suis thường bị gọi nhầm là bệnh...',
      progressPercent: 10,
      publishedDate: '12/09/2023',
      isPrivate: false
    },
    {
      imageUrl: '',
      name: 'Bệnh tiêu chảy cấp PED và viêm ruột truyền nhiễm',
      description: 'Bệnh thiếu máu do vi khuẩn M. suis thường bị gọi nhầm là bệnh...',
      progressPercent: 23,
      publishedDate: '12/09/2023',
      isPrivate: true
    },
    {
      imageUrl: '',
      name: 'Bệnh tiêu chảy cấp PED và viêm ruột truyền nhiễm',
      description: 'Bệnh thiếu máu do vi khuẩn M. suis thường bị gọi nhầm là bệnh...',
      progressPercent: 80,
      publishedDate: '12/09/2023',
      isPrivate: true
    },
    {
      imageUrl: '',
      name: 'Bệnh tiêu chảy cấp PED và viêm ruột truyền nhiễm',
      description: 'Bệnh thiếu máu do vi khuẩn M. suis thường bị gọi nhầm là bệnh...',
      progressPercent: 69,
      publishedDate: '12/09/2023',
      isPrivate: true
    },
    {
      imageUrl: '',
      name: 'Bệnh tiêu chảy cấp PED và viêm ruột truyền nhiễm',
      description: 'Bệnh thiếu máu do vi khuẩn M. suis thường bị gọi nhầm là bệnh...',
      progressPercent: 100,
      publishedDate: '12/09/2023',
      isPrivate: true
    },
    {
      imageUrl: '',
      name: 'Bệnh tiêu chảy cấp PED và viêm ruột truyền nhiễm',
      description: 'Bệnh thiếu máu do vi khuẩn M. suis thường bị gọi nhầm là bệnh...',
      progressPercent: 42,
      publishedDate: '12/09/2023',
      isPrivate: false
    },
    {
      imageUrl: '',
      name: 'Bệnh tiêu chảy cấp PED và viêm ruột truyền nhiễm',
      description: 'Bệnh thiếu máu do vi khuẩn M. suis thường bị gọi nhầm là bệnh...',
      progressPercent: 0,
      publishedDate: '12/09/2023',
      isPrivate: false
    },
    {
      imageUrl: '',
      name: 'Bệnh tiêu chảy cấp PED và viêm ruột truyền nhiễm',
      description: 'Bệnh thiếu máu do vi khuẩn M. suis thường bị gọi nhầm là bệnh...',
      progressPercent: 80,
      publishedDate: '12/09/2023',
      isPrivate: false
    },
    {
      imageUrl: '',
      name: 'Bệnh tiêu chảy cấp PED và viêm ruột truyền nhiễm',
      description: 'Bệnh thiếu máu do vi khuẩn M. suis thường bị gọi nhầm là bệnh...',
      progressPercent: 100,
      publishedDate: '12/09/2023',
      isPrivate: false
    },
  ];

  listOfDataCompleted: Lesson[] = [
    {
      imageUrl: '',
      name: 'Bệnh tiêu chảy cấp PED và viêm ruột truyền nhiễm',
      description: 'Bệnh thiếu máu do vi khuẩn M. suis thường bị gọi nhầm là bệnh...',
      progressPercent: 100,
      publishedDate: '12/09/2023',
      isPrivate: true
    },
    {
      imageUrl: '',
      name: 'Bệnh tiêu chảy cấp PED và viêm ruột truyền nhiễm',
      description: 'Bệnh thiếu máu do vi khuẩn M. suis thường bị gọi nhầm là bệnh...',
      progressPercent: 100,
      publishedDate: '12/09/2023',
      isPrivate: false
    },
    {
      imageUrl: '',
      name: 'Bệnh tiêu chảy cấp PED và viêm ruột truyền nhiễm',
      description: 'Bệnh thiếu máu do vi khuẩn M. suis thường bị gọi nhầm là bệnh...',
      progressPercent: 100,
      publishedDate: '12/09/2023',
      isPrivate: true
    },
    {
      imageUrl: '',
      name: 'Bệnh tiêu chảy cấp PED và viêm ruột truyền nhiễm',
      description: 'Bệnh thiếu máu do vi khuẩn M. suis thường bị gọi nhầm là bệnh...',
      progressPercent: 100,
      publishedDate: '12/09/2023',
      isPrivate: false
    },
  ];

  constructor(iconsLibrary: NbIconLibraries,
    private router: Router,
    private changeTitleService: ChangeTitleService
  ) {
    iconsLibrary.registerFontPack('fa', { packClass: 'fa', iconClassPrefix: 'fa' });
    iconsLibrary.registerFontPack('far', { packClass: 'far', iconClassPrefix: 'fa' });
    iconsLibrary.registerFontPack('ion', { iconClassPrefix: 'ion' });

    this.changeTitleService.setDataTitle('Khóa học của tôi')
  }

  viewLesson() {
    this.router.navigate(['pages','my-lessons','view'], { queryParams: { id: 1 } });
  }
}
