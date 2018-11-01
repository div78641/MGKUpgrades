import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { ViewUpgradesDataSource } from './view-upgrades-datasource';

@Component({
  selector: 'app-view-upgrades',
  templateUrl: './view-upgrades.component.html',
  styleUrls: ['./view-upgrades.component.scss'],
})
export class ViewUpgradesComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: ViewUpgradesDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name'];

  ngOnInit() {
    this.dataSource = new ViewUpgradesDataSource(this.paginator, this.sort);
  }
}
