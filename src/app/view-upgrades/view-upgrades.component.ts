import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { ViewUpgradesDataSource, ViewUpgradesItem } from './view-upgrades-datasource';
import { Subscription } from 'rxjs';
import { AngularFireDatabase } from 'angularfire2/database';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-view-upgrades',
  templateUrl: './view-upgrades.component.html',
  styleUrls: ['./view-upgrades.component.scss'],
})
export class ViewUpgradesComponent implements OnInit, OnDestroy {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: ViewUpgradesDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['date', 'type', 'name', 'level', 'amount'];
  subscription: Subscription;

  constructor(private db: AngularFireDatabase) {}

  ngOnInit() {
    this.subscription = this.db.list<ViewUpgradesItem>('upgrades').valueChanges().pipe(first()).subscribe(d => {
      console.log('data streaming');
      this.dataSource = new ViewUpgradesDataSource(this.paginator, this.sort);
      this.dataSource.data = d;
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
