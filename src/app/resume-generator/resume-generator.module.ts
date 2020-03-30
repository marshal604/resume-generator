import { NgModule } from '@angular/core';

import { SharedModule } from '@shared/shared.module';
import { ResumeGeneratorComponent } from './resume-generator.component';
import { ResumePreviewComponent } from './resume-preview/resume-preview.component';
import { ResumeEditComponent } from './resume-edit/resume-edit.component';
import { ResumeGeneratorRoutingModule } from './resume-generator-routing.module';
import { ResumeEditAboutMeComponent } from './resume-edit/resume-edit-about-me/resume-edit-about-me.component';

@NgModule({
  imports: [SharedModule, ResumeGeneratorRoutingModule],
  declarations: [ResumeGeneratorComponent, ResumePreviewComponent, ResumeEditComponent, ResumeEditAboutMeComponent]
})
export class ResumeGeneratorModule {}
