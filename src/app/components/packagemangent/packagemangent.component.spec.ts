import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PackagemangentComponent } from './packagemangent.component';

describe('PackagemangentComponent', () => {
  let component: PackagemangentComponent;
  let fixture: ComponentFixture<PackagemangentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PackagemangentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PackagemangentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
