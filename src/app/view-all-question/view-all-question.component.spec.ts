import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAllQuestionComponent } from './view-all-question.component';

describe('ViewAllQuestionComponent', () => {
  let component: ViewAllQuestionComponent;
  let fixture: ComponentFixture<ViewAllQuestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewAllQuestionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAllQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
