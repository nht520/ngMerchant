import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DaystatisticsComponent } from './daystatistics.component';

describe('DaystatisticsComponent', () => {
  let component: DaystatisticsComponent;
  let fixture: ComponentFixture<DaystatisticsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DaystatisticsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DaystatisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
