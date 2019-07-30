import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BindingcardComponent } from './bindingcard.component';

describe('BindingcardComponent', () => {
  let component: BindingcardComponent;
  let fixture: ComponentFixture<BindingcardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BindingcardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BindingcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
