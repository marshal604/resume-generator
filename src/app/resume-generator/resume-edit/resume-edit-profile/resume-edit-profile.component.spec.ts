import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeEditProfileComponent } from './resume-edit-profile.component';

describe('ResumeEditProfileComponent', () => {
  let component: ResumeEditProfileComponent;
  let fixture: ComponentFixture<ResumeEditProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ResumeEditProfileComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumeEditProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
