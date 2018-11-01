import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUpgradeComponent } from './add-upgrade.component';

describe('AddUpgradeComponent', () => {
  let component: AddUpgradeComponent;
  let fixture: ComponentFixture<AddUpgradeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddUpgradeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddUpgradeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
