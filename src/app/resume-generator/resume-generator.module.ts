import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResumeGeneratorComponent } from './resume-generator.component';
import { ResumePreviewComponent } from './resume-preview/resume-preview.component';
import { ResumeEditComponent } from './resume-edit/resume-edit.component';
import { ResumeGeneratorRoutingModule } from './resume-generator-routing.module';

@NgModule({
  imports: [CommonModule, ResumeGeneratorRoutingModule],
  declarations: [ResumeGeneratorComponent, ResumePreviewComponent, ResumeEditComponent]
})
export class ResumeGeneratorModule {}
