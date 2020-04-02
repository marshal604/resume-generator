import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import { createValueAccessor } from '@shared/base/cva.base';
import {
  ResumeEditProfileFormData,
  RESUME_EDIT_PROFILE_FORM_GROUP,
  ResumeEditProfileFormProperties
} from './resume-edit-profile.component.model';
import { DataType, ResumeEditCVABase } from '@shared/base/resume-edit-cva.base';
@Component({
  selector: 'yur-resume-edit-profile',
  templateUrl: './resume-edit-profile.component.html',
  styleUrls: ['./resume-edit-profile.component.scss'],
  providers: [createValueAccessor(ResumeEditProfileComponent)]
})
export class ResumeEditProfileComponent extends ResumeEditCVABase<ResumeEditProfileFormData> {
  constructor(private fb: FormBuilder) {
    super();
  }

  initForm() {
    this.form = this.fb.group(RESUME_EDIT_PROFILE_FORM_GROUP);
  }

  initMappingList() {
    this.formMappingList = [
      {
        label: 'Profile',
        type: DataType.Category,
        children: [
          {
            id: ResumeEditProfileFormProperties.Profile,
            type: DataType.Text,
            label: 'Profile',
            hint: 'write your profile.',
            value: this.form.value[ResumeEditProfileFormProperties.Profile]
          }
        ]
      }
    ];
  }
}
