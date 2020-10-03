import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutTaskComponent } from './layout-task.component';

describe('LayoutTaskComponent', () => {
  let component: LayoutTaskComponent;
  let fixture: ComponentFixture<LayoutTaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LayoutTaskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
