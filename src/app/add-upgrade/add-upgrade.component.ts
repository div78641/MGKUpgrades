import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'app-add-upgrade',
  templateUrl: './add-upgrade.component.html',
  styleUrls: ['./add-upgrade.component.scss']
})
export class AddUpgradeComponent implements OnInit {

  upgrade: any = { date: new Date()};
  constructor(private db: AngularFireDatabase) { }

  ngOnInit() {
  }

  onSubmit() {
    this.upgrade.date = new Date(this.upgrade.date).valueOf();
    this.db.list('upgrades').push(this.upgrade)
      .then(_ => {
        this.upgrade = {};
        console.log('success');
      });
  }
}
