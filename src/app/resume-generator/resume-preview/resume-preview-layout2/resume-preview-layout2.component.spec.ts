import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumePreviewLayout2Component } from './resume-preview-layout2.component';

describe('ResumePreviewLayout2Component', () => {
  let component: ResumePreviewLayout2Component;
  let fixture: ComponentFixture<ResumePreviewLayout2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ResumePreviewLayout2Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumePreviewLayout2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
