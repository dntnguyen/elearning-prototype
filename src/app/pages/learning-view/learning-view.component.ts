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
  constructor() { }


  listLessonVideos = [{
    id:1,
    name: "Bài 1: Tổng quan về khóa học",
    time: "00:20:19",
    isLearned: true
  },
  {
    id:2,
    name: "Bài 2: ELANCO PIG ACADEMY là gì?",
    time: "00:25:03",
    isLearned: false
  },
  {
    id:3,
    name: "Bài 3: Các dấu hiệu bệnh",
    time: "00:20:54",
    isLearned: false
  },
  {
    id:4,
    name: "Bài 4: Phương pháp chữa trị",
    time: "00:15:16",
    isLearned: false
  },
  {
    id:5,
    name: "Bài 5: Cách thức phòng ngừa",
    time: "00:10:04",
    isLearned: false
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
  getActive(item){
    console.log(item.id)
    this.valueOfClick = item.id
  }
}
