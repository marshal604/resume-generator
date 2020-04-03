import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import { createValueAccessor, CvaBase } from '@shared/base/cva.base';
import {
  ResumeEditProfileFormData,
  RESUME_EDIT_PROFILE_FORM_GROUP,
  ResumeEditProfileFormProperties
} from './resume-edit-profile.component.model';
@Component({
  selector: 'yur-resume-edit-profile',
  templateUrl: './resume-edit-profile.component.html',
  styleUrls: ['./resume-edit-profile.component.scss'],
  providers: [createValueAccessor(ResumeEditProfileComponent)]
})
export class ResumeEditProfileComponent extends CvaBase<ResumeEditProfileFormData> {
  formProp = ResumeEditProfileFormProperties;
  constructor(private fb: FormBuilder) {
    super();
  }

  initForm() {
    this.form = this.fb.group(RESUME_EDIT_PROFILE_FORM_GROUP);
  }
}
