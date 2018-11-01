import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-upgrade',
  templateUrl: './add-upgrade.component.html',
  styleUrls: ['./add-upgrade.component.scss']
})
export class AddUpgradeComponent implements OnInit {

  upgrade: any = {};

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.upgrade);
  }
}
