import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeEditAboutMeComponent } from './resume-edit-about-me.component';

describe('ResumeEditAboutMeComponent', () => {
  let component: ResumeEditAboutMeComponent;
  let fixture: ComponentFixture<ResumeEditAboutMeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ResumeEditAboutMeComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumeEditAboutMeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
