import { Component } from '@angular/core';
import { FormBuilder, FormArray, FormGroup } from '@angular/forms';

import { createValueAccessor, CvaBase } from '@shared/base/cva.base';
import {
  ResumeEditEducationFormData,
  ResumeEditEducationFormProperties,
  ResumeEditEducationFormArrayProperties
} from './resume-edit-education.component.model';

@Component({
  selector: 'yur-resume-edit-education',
  templateUrl: './resume-edit-education.component.html',
  styleUrls: ['./resume-edit-education.component.scss'],
  providers: [createValueAccessor(ResumeEditEducationComponent)]
})
export class ResumeEditEducationComponent extends CvaBase<ResumeEditEducationFormData> {
  formProp = ResumeEditEducationFormProperties;
  formArrayProp = ResumeEditEducationFormArrayProperties;
  constructor(private fb: FormBuilder) {
    super();
  }

  get educationFormArrayItem(): FormGroup {
    return this.fb.group({
      [ResumeEditEducationFormArrayProperties.School]: '',
      [ResumeEditEducationFormArrayProperties.Department]: '',
      [ResumeEditEducationFormArrayProperties.Period]: ''
    });
  }

  writeValue(val: ResumeEditEducationFormData) {
    if (!val) {
      return;
    }
    const formArrayLength = (this.form.get(ResumeEditEducationFormProperties.Education) as FormArray).length;
    const parentFormArrayLength = val.education.length;
    if (formArrayLength !== parentFormArrayLength) {
      this.form.setControl(
        ResumeEditEducationFormProperties.Education,
        this.fb.array(val.education.map(() => this.educationFormArrayItem))
      );
      this.form.setValue(val, { emitEvent: true });
      return;
    }

    this.form.setValue(val, { emitEvent: false });
  }

  initForm() {
    this.form = this.fb.group({
      [ResumeEditEducationFormProperties.Education]: this.fb.array([this.educationFormArrayItem, this.educationFormArrayItem])
    });
  }

  onAddEducation() {
    (this.form.get(ResumeEditEducationFormProperties.Education) as FormArray).insert(0, this.educationFormArrayItem);
  }

  onRemoveEducation(index: number) {
    (this.form.get(ResumeEditEducationFormProperties.Education) as FormArray).removeAt(index);
  }
}
