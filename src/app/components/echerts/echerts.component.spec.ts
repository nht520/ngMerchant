import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EchertsComponent } from './echerts.component';

describe('EchertsComponent', () => {
  let component: EchertsComponent;
  let fixture: ComponentFixture<EchertsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EchertsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EchertsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
