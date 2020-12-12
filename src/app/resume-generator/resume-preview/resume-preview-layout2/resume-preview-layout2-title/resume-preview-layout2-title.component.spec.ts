import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumePreviewLayout2TitleComponent } from './resume-preview-layout2-title.component';

describe('ResumePreviewLayout2TitleComponent', () => {
  let component: ResumePreviewLayout2TitleComponent;
  let fixture: ComponentFixture<ResumePreviewLayout2TitleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ResumePreviewLayout2TitleComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumePreviewLayout2TitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
