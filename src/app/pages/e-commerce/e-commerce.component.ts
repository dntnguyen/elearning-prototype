import { Component } from '@angular/core';
import { ChangeTitleService } from '../../change-title.service';

@Component({
  selector: 'ngx-ecommerce',
  templateUrl: './e-commerce.component.html',
})
export class ECommerceComponent {
  constructor(private changeTitleService: ChangeTitleService) {
    this.changeTitleService.setDataTitle("Trang chủ")
  }
}
