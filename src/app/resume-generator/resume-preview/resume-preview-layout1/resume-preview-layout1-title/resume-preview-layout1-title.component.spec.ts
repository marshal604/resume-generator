import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumePreviewLayout1TitleComponent } from './resume-preview-layout1-title.component';

describe('ResumePreviewLayout1TitleComponent', () => {
  let component: ResumePreviewLayout1TitleComponent;
  let fixture: ComponentFixture<ResumePreviewLayout1TitleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ResumePreviewLayout1TitleComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumePreviewLayout1TitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
