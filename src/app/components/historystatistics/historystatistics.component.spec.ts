import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HistorystatisticsComponent } from './historystatistics.component';

describe('HistorystatisticsComponent', () => {
  let component: HistorystatisticsComponent;
  let fixture: ComponentFixture<HistorystatisticsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistorystatisticsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistorystatisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
