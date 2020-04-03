import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeEditExperienceComponent } from './resume-edit-experience.component';

describe('ResumeEditExperienceComponent', () => {
  let component: ResumeEditExperienceComponent;
  let fixture: ComponentFixture<ResumeEditExperienceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ResumeEditExperienceComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumeEditExperienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
