import { Component } from '@angular/core';
import { ChangeTitleService } from '../../change-title.service';

@Component({
  selector: 'ngx-my-user-dashboard',
  templateUrl: './my-user-dashboard.component.html',
})
export class MyUserDashboardComponent {
  constructor(private changeTitleService: ChangeTitleService) {
    this.changeTitleService.setDataTitle("Trang chủ")
  }
}
