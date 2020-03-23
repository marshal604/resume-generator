import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

import { ResumeGeneratorComponent } from './resume-generator.component';
import { ResumeEditComponent } from './resume-edit/resume-edit.component';
import { ResumePreviewComponent } from './resume-preview/resume-preview.component';

const routes: Routes = [
  { path: 'generator', component: ResumeGeneratorComponent },
  { path: 'edit', component: ResumeEditComponent },
  { path: 'preview', component: ResumePreviewComponent },
  { path: '**', redirectTo: 'generator' }
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResumeGeneratorRoutingModule {}
