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
  selectedThemeMenuExampleIndex = 1;
  selectedXlMenuExampleIndex = 4;

  // Example toast toggles
  toast1IsOpen = true;
  toast2IsOpen = true;
  toast3IsOpen = true;
  // Example of a timed toast aka toast with duration
  timedToast = true;
  public get customNavigationLabels() {
    return this.customLabels;
  }

  ngOnInit() {
    this.pages = this.paging.generate(this.page, this.totalPages);
    setTimeout(() => {
      this.timedToast = false;
    }, 10000);
  }

  public onPageChange(pageNumber: number) {
    this.page = pageNumber;
    this.pages = this.paging.generate(this.page, this.totalPages);
  }

  log(msg: any, extra?: any) {
    console.log(msg, extra);
  }

  onClick(ev: Event) {
    console.log({ ev });
  }

  logSingleSelectedItem(event: Event) {
    const selected = (event.target as HTMLSelectElement).value;
    console.log('Single selected item: ', selected);
  }

  logMultiSelectedItems(ev: any) {
    const selectedItems = Array.from(
      ev.target.selectedOptions,
      (item: any) => item.value
    );
    console.log('Multi selected items: ', selectedItems);
  }

  openDialog() {
    this.dialogInstance.show();
  }

  assignDialogInstance(instance: any) {
    this.dialogInstance = instance;
  }
}
