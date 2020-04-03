import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeEditEducationComponent } from './resume-edit-education.component';

describe('ResumeEditEducationComponent', () => {
  let component: ResumeEditEducationComponent;
  let fixture: ComponentFixture<ResumeEditEducationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ResumeEditEducationComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumeEditEducationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
