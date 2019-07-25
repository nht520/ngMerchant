import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusstatisticsComponent } from './busstatistics.component';

describe('BusstatisticsComponent', () => {
  let component: BusstatisticsComponent;
  let fixture: ComponentFixture<BusstatisticsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusstatisticsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusstatisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
