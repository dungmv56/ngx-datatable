import { Component, ElementRef, Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { CorporateEmployee } from "./model/corporate-employee";

const companyData = require('../../assets/data/company.json');

class PagedData<T> {
  data: T[];
}

/**
 * A server used to mock a paged data result from a server
 */
@Injectable()
export class MockServerResultsService {

  public getResults(offset: number, limit: number): Observable<PagedData<CorporateEmployee>> {
    return Observable.of(companyData.slice(offset, offset + limit))
      .delay(new Date(Date.now() + 500))
      .map(data => ({ data }));
  }
}

@Component({
  selector: 'server-scrolling-demo',
  providers: [
      MockServerResultsService
  ],
  template: `
    <div>
      <h3>
        Server-side Scrolling
        <small>
          <a href="https://github.com/swimlane/ngx-datatable/blob/master/demo/paging/scrolling-server.component.ts" target="_blank">
            Source
          </a>
        </small>
      </h3>
      <ngx-datatable
<<<<<<< HEAD
        class="material"
=======
        class="material server-scrolling-demo"
>>>>>>> 9e918305d8b1c12e10b273ef8864a0d9caff3cb2
        [rows]="rows"
        [columns]="[{name:'Name'},{name:'Gender'},{name:'Company'}]"
        [columnMode]="'force'"
        [headerHeight]="headerHeight"
        [rowHeight]="rowHeight"
        [loadingIndicator]="isLoading"
        [scrollbarV]="true"
        (scroll)="onScroll($event.offsetY)"
      ></ngx-datatable>
    </div>
  `,
  styleUrls: ['./scrolling-server.component.css'],
})
export class ServerScrollingComponent {

  readonly headerHeight = 50;
  readonly rowHeight = 50;
  readonly pageLimit = 10;

  rows: CorporateEmployee[] = [];
  isLoading: boolean;

  constructor(private serverResultsService: MockServerResultsService, private el: ElementRef) { }

  ngOnInit() {
    this.onScroll(0);
  }

  onScroll(offsetY: number) {
    // total height of all rows in the viewport
    const viewHeight = this.el.nativeElement.getBoundingClientRect().height - this.headerHeight;

    // check if we scrolled to the end of the viewport
    if (!this.isLoading && offsetY + viewHeight >= this.rows.length * this.rowHeight) {

      // total number of results to load
      let limit = this.pageLimit;

      // check if we haven't fetched any results yet
      if (this.rows.length === 0) {

        // calculate the number of rows that fit within viewport
        const pageSize = Math.ceil(viewHeight / this.rowHeight);

        // change the limit to pageSize such that we fill the first page entirely
        // (otherwise, we won't be able to scroll past it)
        limit = Math.max(pageSize, this.pageLimit);
      }
      this.loadPage(limit);
    }
  }

  private loadPage(limit: number) {
    // set the loading flag, which serves two purposes:
    // 1) it prevents the same page from being loaded twice
    // 2) it enables display of the loading indicator
    this.isLoading = true;

    this.serverResultsService.getResults(this.rows.length, limit).subscribe(results => {
      this.rows.push(...results.data);
      this.isLoading = false;
    });
  }
}
