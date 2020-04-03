import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';

import { CvaBase, createValueAccessor } from '@shared/base/cva.base';
import {
  ResumeEditExperienceFormData,
  ResumeEditExperienceFormProperties,
  ResumeEditExperienceFormArrayProperties
} from './resume-edit-experience.component.model';

@Component({
  selector: 'yur-resume-edit-experience',
  templateUrl: './resume-edit-experience.component.html',
  styleUrls: ['./resume-edit-experience.component.scss'],
  providers: [createValueAccessor(ResumeEditExperienceComponent)]
})
export class ResumeEditExperienceComponent extends CvaBase<ResumeEditExperienceFormData> {
  formProp = ResumeEditExperienceFormProperties;
  formArrayProp = ResumeEditExperienceFormArrayProperties;
  constructor(private fb: FormBuilder) {
    super();
  }

  get experienceFormArrayItem(): FormGroup {
    return this.fb.group({
      [ResumeEditExperienceFormArrayProperties.Period]: '',
      [ResumeEditExperienceFormArrayProperties.Company]: '',
      [ResumeEditExperienceFormArrayProperties.JobTitle]: '',
      [ResumeEditExperienceFormArrayProperties.SkillTags]: '',
      [ResumeEditExperienceFormArrayProperties.JobDescription]: ''
    });
  }

  initForm() {
    this.form = this.fb.group({
      [ResumeEditExperienceFormProperties.Experience]: this.fb.array([this.experienceFormArrayItem, this.experienceFormArrayItem])
    });
  }

  onAddExperience() {
    (this.form.get(ResumeEditExperienceFormProperties.Experience) as FormArray).push(this.experienceFormArrayItem);
  }

  onRemoveExperience(index: number) {
    (this.form.get(ResumeEditExperienceFormProperties.Experience) as FormArray).removeAt(index);
  }
}
