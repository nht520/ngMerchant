import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SettlementlistComponent } from './settlementlist.component';

describe('SettlementlistComponent', () => {
  let component: SettlementlistComponent;
  let fixture: ComponentFixture<SettlementlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SettlementlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettlementlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
