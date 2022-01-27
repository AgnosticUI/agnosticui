import { OnInit, Component, ViewEncapsulation } from '@angular/core';
import { usePagination } from 'agnostic-helpers/dist/index.esm';
@Component({
  selector: 'ag-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // We're using some globals in example so don't apply encapsulation
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent implements OnInit {
  title = 'examples';
  dialogInstance!: any;
  paging = usePagination({ offset: 2 });
  page = 1;
  totalPages = 50;
  pages: any[] = [];
  customLabels = {
    previous: 'Previa',
    next: 'Siguiente',
    first: 'Primera',
    last: 'Última',
  };
  public get customNavigationLabels() {
    return this.customLabels;
  }

  ngOnInit() {
    this.pages = this.paging.generate(this.page, this.totalPages)
  }

  public onPageChange(pageNumber: number) {
    this.page = pageNumber;
    this.pages = this.paging.generate(this.page, this.totalPages)
  }

  openDialog() {
    this.dialogInstance.show();
  }

  assignDialogInstance(instance: any) {
    this.dialogInstance = instance;
  };

}
