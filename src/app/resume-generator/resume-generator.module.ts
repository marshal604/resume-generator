import { NgModule } from '@angular/core';

import { SharedModule } from '@shared/shared.module';
import { ResumeGeneratorComponent } from './resume-generator.component';
import { ResumePreviewComponent } from './resume-preview/resume-preview.component';
import { ResumeEditComponent } from './resume-edit/resume-edit.component';
import { ResumeGeneratorRoutingModule } from './resume-generator-routing.module';
import { ResumeEditAboutMeComponent } from './resume-edit/resume-edit-about-me/resume-edit-about-me.component';
import { ResumeEditProfileComponent } from './resume-edit/resume-edit-profile/resume-edit-profile.component';
import { ResumeEditEducationComponent } from './resume-edit/resume-edit-education/resume-edit-education.component';

@NgModule({
  imports: [SharedModule, ResumeGeneratorRoutingModule],
  declarations: [
    ResumeGeneratorComponent,
    ResumePreviewComponent,
    ResumeEditComponent,
    ResumeEditAboutMeComponent,
    ResumeEditProfileComponent,
    ResumeEditEducationComponent
  ]
})
export class ResumeGeneratorModule {}
