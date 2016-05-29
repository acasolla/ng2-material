import { Component, ViewEncapsulation } from '@angular/core';
import {MATERIAL_DIRECTIVES} from "ng2-material";

import {bookDatas} from './pagination-datas';

@Component({
  moduleId: module.id,
  selector: 'pagination-split-usage',
  templateUrl: 'pagination-split-usage.component.html',
  styleUrls: ['pagination-split-usage.component.css'],
  directives: [MATERIAL_DIRECTIVES],
  encapsulation: ViewEncapsulation.None
})
export class PaginationSplitUsageComponent {
  pages: Array<string> = bookDatas;

  pagination: any = {
    currentPage: 1,
    itemsPerPage: 2,
    totalItems: 6
  };

  rangeFormat: string = ` 
    <span flex="50" layout="column" class="page-number">{start}</span>
    <span flex="50" layout="column" class="page-number">{end}</span>
  `;

  displayedPages: Array<string> = [];

  constructor() {
    this.refreshPages();
  }

  refreshPages() {
    let start = (this.pagination.currentPage - 1) * this.pagination.itemsPerPage,
      end = start + this.pagination.itemsPerPage;
    this.displayedPages = this.pages.slice(start, end);
  }

  detectChange(event) {
    if (event !== undefined && event.name === 'pagination_changed' && event.pagination !== undefined) {
      this.pagination = event.pagination;
      this.refreshPages();
    }
  }
}
