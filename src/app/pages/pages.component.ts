import { Component } from '@angular/core';

import { MENU_ITEMS } from './pages-menu';
import { NbIconConfig, NbMenuItem } from '@nebular/theme';
import { Params, QueryParamsHandling } from '@angular/router';
import { NbMenuBadgeConfig } from '@nebular/theme/components/menu/menu.service';

class CustomNbMenuItem implements NbMenuItem {
  title: string;
  link?: string;
  url?: string;
  icon?: string | NbIconConfig;
  expanded?: boolean;
  badge?: NbMenuBadgeConfig;
  children?: NbMenuItem[];
  target?: string;
  hidden?: boolean;
  pathMatch?: 'full' | 'prefix';
  home?: boolean;
  group?: boolean;
  skipLocationChange?: boolean;
  queryParams?: Params;
  queryParamsHandling?: QueryParamsHandling;
  parent?: NbMenuItem;
  selected?: boolean;
  data?: any;
  fragment?: string;
  preserveFragment?: boolean;
  ariaRole?: string;
  viewAs?: string
}

@Component({
  selector: 'ngx-pages',
  styleUrls: ['pages.component.scss'],
  templateUrl: './pages.component.html',
})
export class PagesComponent {

  menu = MENU_ITEMS as CustomNbMenuItem[];

  viewAs: string = 'admin'

  constructor(
  ) {
    const valueViewAs = localStorage.getItem("viewAs")
    if (valueViewAs) {
      this.viewAs = valueViewAs
    } else {
      this.viewAs = 'admin'
    }

    if (this.viewAs === 'admin') {
      for (let i = 0; i < this.menu.length; i++) {
        if (this.menu[i].link === '/pages/my-lessons') {
          this.menu.splice(i, 1)
        }
        if (this.menu[i].link === '/pages/new-lessons') {
          this.menu.splice(i, 1)
        }
      }
    } else if (this.viewAs === 'user') {
      for (let i = this.menu.length - 1; i >= 0; i--) {
        if (this.menu[i].link !== '/pages/my-lessons'
          && this.menu[i].link !== '/pages/new-lessons'
          && this.menu[i].link !== '/pages/dashboard') {
          this.menu.splice(i, 1)
        }
      }
    }
  }
}
