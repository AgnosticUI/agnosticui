import { OnInit, Component, ViewEncapsulation } from '@angular/core';
import { usePagination } from 'agnostic-helpers/dist/index.esm';
@Component({
  selector: 'ag-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // We're using some globals in example so don't apply encapsulation
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  title = 'examples';

  paging = usePagination({ offset: 2 });
  page: number = 1;
  totalPages: number = 50;
  pages: any[] = [];

  ngOnInit() {
    this.pages = this.paging.generate(this.page, this.totalPages)
  }

  public onPageChange(pageNumber: number) {
    this.page = pageNumber;
    this.pages = this.paging.generate(this.page, this.totalPages)
  }

}
