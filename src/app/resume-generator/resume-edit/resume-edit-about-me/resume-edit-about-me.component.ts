import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import {
  ResumeEditAboutMeFormData,
  ResumeEditAboutMeFormProperties,
  RESUME_EDIT_ABOUT_ME_FORM_GROUP
} from './resume-edit-about-me.component.model';
import { createValueAccessor, CvaBase } from '@shared/base/cva.base';

@Component({
  selector: 'yur-resume-edit-about-me',
  templateUrl: './resume-edit-about-me.component.html',
  styleUrls: ['./resume-edit-about-me.component.scss'],
  providers: [createValueAccessor(ResumeEditAboutMeComponent)]
})
export class ResumeEditAboutMeComponent extends CvaBase<ResumeEditAboutMeFormData> {
  formProp = ResumeEditAboutMeFormProperties;
  constructor(private fb: FormBuilder) {
    super();
  }

  onSrcChange(src: string) {
    this.form.patchValue({
      [ResumeEditAboutMeFormProperties.Photo]: src
    });
  }

  initForm() {
    this.form = this.fb.group(RESUME_EDIT_ABOUT_ME_FORM_GROUP);
  }
}
