import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumePreviewLayout1Component } from './resume-preview-layout1.component';

describe('ResumePreviewLayout1Component', () => {
  let component: ResumePreviewLayout1Component;
  let fixture: ComponentFixture<ResumePreviewLayout1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ResumePreviewLayout1Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumePreviewLayout1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
