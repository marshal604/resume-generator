import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { TranslateModule } from '@ngx-translate/core';

import { SharedModule } from '@shared/shared.module';
import { ResumeGeneratorComponent } from './resume-generator.component';
import { ResumePreviewComponent } from './resume-preview/resume-preview.component';
import { ResumeEditComponent } from './resume-edit/resume-edit.component';
import { ResumeGeneratorRoutingModule } from './resume-generator-routing.module';
import { ResumeEditAboutMeComponent } from './resume-edit/resume-edit-about-me/resume-edit-about-me.component';
import { ResumeEditProfileComponent } from './resume-edit/resume-edit-profile/resume-edit-profile.component';
import { ResumeEditEducationComponent } from './resume-edit/resume-edit-education/resume-edit-education.component';
import { ResumeEditExperienceComponent } from './resume-edit/resume-edit-experience/resume-edit-experience.component';
import { ResumePreviewLayout1Component } from './resume-preview/resume-preview-layout1/resume-preview-layout1.component';
import { ResumePreviewLayout1TitleComponent } from './resume-preview/resume-preview-layout1/resume-preview-layout1-title/resume-preview-layout1-title.component';
import { ResumeEditPortfolioComponent } from './resume-edit/resume-edit-portfolio/resume-edit-portfolio.component';
import { ResumePreviewLayout2Component } from './resume-preview/resume-preview-layout2/resume-preview-layout2.component';
import { ResumePreviewLayout2TitleComponent } from './resume-preview/resume-preview-layout2/resume-preview-layout2-title/resume-preview-layout2-title.component';

@NgModule({
  imports: [SharedModule, ResumeGeneratorRoutingModule, HttpClientModule, TranslateModule],
  declarations: [
    ResumeGeneratorComponent,
    ResumePreviewComponent,
    ResumeEditComponent,
    ResumeEditAboutMeComponent,
    ResumeEditProfileComponent,
    ResumeEditEducationComponent,
    ResumeEditExperienceComponent,
    ResumeEditPortfolioComponent,
    ResumePreviewLayout1Component,
    ResumePreviewLayout1TitleComponent,
    ResumePreviewLayout2Component,
    ResumePreviewLayout2TitleComponent
  ]
})
export class ResumeGeneratorModule {}
