import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeEditPortfolioComponent } from './resume-edit-portfolio.component';

describe('ResumeEditPortfolioComponent', () => {
  let component: ResumeEditPortfolioComponent;
  let fixture: ComponentFixture<ResumeEditPortfolioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ResumeEditPortfolioComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumeEditPortfolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
