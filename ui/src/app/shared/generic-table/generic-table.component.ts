import {AfterViewInit, Component, EventEmitter, Input, Output, ViewChild} from '@angular/core';
import {MatPaginator} from "@angular/material/paginator";
import {MatTableDataSource, MatTableDataSourcePaginator} from "@angular/material/table";
import {MatSort,Sort} from "@angular/material/sort";
import {SelectionModel} from "@angular/cdk/collections";

@Component({
  selector: 'app-generic-table',
  templateUrl: './generic-table.component.html',
  styleUrls: ['./generic-table.component.css']
})
export class GenericTableComponent implements AfterViewInit {
  pageSizeOptions: number[] = [25, 50, 75, 100];
  @ViewChild(MatPaginator, { static: false }) paginator!: MatTableDataSourcePaginator;
  @ViewChild(MatSort, { static: false }) sort!: MatSort;
  @Input() dataSource!: MatTableDataSource<any>;
  @Input() columns!: string[];
  @Input() columnHeaders!: string[];
  @Input() selection!: SelectionModel<any>;
  @Output() selectionChanged: EventEmitter<SelectionModel<any>> = new EventEmitter<SelectionModel<any>>();

  constructor() {}

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  handleSelect(event: Event, row: any): void {
    this.selection.toggle(row);
    this.selectionChanged.emit(this.selection);
    event.stopPropagation();
  }

  sortData(event: Sort): void {
    if (!event.active || event.direction === '') {
      return;
    }

    const sortField: string = event.active;
    const sortDirection: 'asc' | 'desc' = event.direction;

    this.dataSource.data.sort((a: any, b: any): number => {
      const valA = this.getColumnValue(a, sortField);
      const valB = this.getColumnValue(b, sortField);

      if (valA === valB) {
        return 0;
      }

      let directionFactor: number;
      switch (sortDirection) {
        case 'desc':
          directionFactor = -1;
          break;
        default:
          directionFactor = 1;
          break;
      }

      return this.compareValues(valA, valB) * directionFactor;
    });
  }

  getColumnValue(row: any, field: string): any {
    if (Array.isArray(row[field])) {
      return row[field][0];
    }
    else {
      return row[field];
    }
  }

  compareValues(a: any, b: any): number {
    if (a === null || a === undefined) {
      return 0;
    }
    else if (typeof a === 'number') {
      return a - b;
    }
    else {
      return a.toString().localeCompare(b, undefined, {numeric: true});
    }
  }
}
