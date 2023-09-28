import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: "root"
})
export class ChangeTitleService {
  private getDataTitle = new BehaviorSubject('Trang chủ');
  currentGetDataTitle$ = this.getDataTitle.asObservable();

  constructor(){ }

  setDataTitle(title: string = 'Trang chủ'){
    this.getDataTitle.next(title)
  }
}
