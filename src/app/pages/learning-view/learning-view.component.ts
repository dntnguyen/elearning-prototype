import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-learning-view',
  templateUrl: './learning-view.component.html',
  styleUrls: ['./learning-view.component.scss']
})
export class LearningViewComponent {
  valueOfClick: any
  visible = false;
  size: 'large' | 'default' = 'large';
  valueOfComment: string;
  currentSelectedLesson: any

  constructor() {
    this.currentSelectedLesson = this.listLessonVideos.find(item => item.id === 2)
  }

  listLessonVideos = [{
    id:1,
    name: "Bài 1: Tổng quan về khóa học",
    time: "3:00",
    isLearned: true,
    isSelected: false,
  },
  {
    id:2,
    name: "Bài 2: ELANCO PIG ACADEMY là gì?",
    time: "10:23",
    isLearned: false,
    isSelected: true,
  },
  {
    id:3,
    name: "Bài 3: Các dấu hiệu bệnh",
    time: "6:21",
    isLearned: false,
    isSelected: false,
  },
  {
    id:4,
    name: "Bài 4: Phương pháp chữa trị",
    time: "4:00",
    isLearned: false,
    isSelected: false,
  },
  {
    id:5,
    name: "Bài 5: Cách thức phòng ngừa",
    time: "3:04",
    isLearned: false,
    isSelected: false,
  },
  ]

  listOfCommentInLesson = [
    { name: 'Martha', comment: 'Bài học hữu ích.', avatarUrl: 'https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(4).webp', upVote: 3, liked: true },
    { name: 'Johny', comment: 'Bài học hữu ích.', avatarUrl: 'https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(32).webp', upVote: 2, liked: false },
    { name: 'Mary Kate', comment: 'Bài học hữu ích.', avatarUrl: 'https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(31).webp', upVote: 5, liked: true },
    { name: 'Johny', comment: 'Bài học hữu ích.', avatarUrl: 'https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(32).webp', upVote: 0, liked: false },
    { name: 'Martha', comment: 'Bài học hữu ích.', avatarUrl: 'https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(4).webp', upVote: 3, liked: true },
    { name: 'Johny', comment: 'Bài học hữu ích.', avatarUrl: 'https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(32).webp', upVote: 2, liked: false },
    { name: 'Mary Kate', comment: 'Bài học hữu ích.', avatarUrl: 'https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(31).webp', upVote: 5, liked: true },
    { name: 'Johny', comment: 'Bài học hữu ích.', avatarUrl: 'https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(32).webp', upVote: 0, liked: false },
  ]

  open(): void {
    this.visible = true;
  }

  close(): void {
    this.visible = false;
  }
  onClickLesson(item) {
    if (item.isLearned == true) {
      return 'active'
    }
  }
  onEnterAddComment(e) {
    this.listOfCommentInLesson =
      [...this.listOfCommentInLesson,
      { name: 'Super admin', comment: e.target.value, avatarUrl: '../../../assets/images/nick.png', upVote: 0, liked: false }
      ]
  }
  setActive(item){
    for (let index in this.listLessonVideos) {
      if (this.listLessonVideos[index].id === item.id) {
        this.listLessonVideos[index].isSelected = true
        this.currentSelectedLesson = this.listLessonVideos[index]
      } else {
        this.listLessonVideos[index].isSelected = false
      }
    }
  }

  getSelectedLessonClass(isSelected: boolean) {
    if (isSelected) {
      return 'selected-lesson-bg-color'
    } else {
      return 'unselected-lesson-bg-color'
    }
  }
  getSelectedLessonClassOrderedNumber(isSelected: boolean) {
    if (isSelected) {
      return 'selected-lesson-bg-color-ordered-number'
    } else {
      return 'unselected-lesson-bg-color-ordered-number'
    }
  }
}
