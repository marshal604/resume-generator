import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Subscription } from 'rxjs';

import {
  ResumeEditAboutMeFormData,
  ResumeEditAboutMeFormProperties,
  RESUME_EDIT_ABOUT_ME_FORM_GROUP
} from './resume-edit-about-me.component.model';
import { createValueAccessor } from '@shared/base/cva.base';
import { ResumeEditCVABase } from '@shared/base/resume-edit-cva.base';
import { DataItem, DataType } from '@shared/base/resume-edit-cva.base';

@Component({
  selector: 'yur-resume-edit-about-me',
  templateUrl: './resume-edit-about-me.component.html',
  styleUrls: ['./resume-edit-about-me.component.scss'],
  providers: [createValueAccessor(ResumeEditAboutMeComponent)]
})
export class ResumeEditAboutMeComponent extends ResumeEditCVABase<ResumeEditAboutMeFormData> implements OnInit, OnDestroy {
  formProp = ResumeEditAboutMeFormProperties;
  constructor(private fb: FormBuilder) {
    super();
  }

  ngOnInit() {
    super.ngOnInit();
  }
  ngOnDestroy() {
    super.ngOnDestroy();
  }

  onSrcChange(src: string) {
    this.form.patchValue({
      [ResumeEditAboutMeFormProperties.Photo]: src
    });
  }

  initForm() {
    this.form = this.fb.group(RESUME_EDIT_ABOUT_ME_FORM_GROUP);
  }

  initMappingList() {
    this.formMappingList = [
      {
        label: 'Job Title',
        type: DataType.Category,
        children: [
          {
            id: ResumeEditAboutMeFormProperties.JobTitle,
            type: DataType.Text,
            label: 'Job Title',
            hint: 'write your job title.',
            value: this.form.value[ResumeEditAboutMeFormProperties.JobTitle]
          }
        ]
      },
      {
        label: 'Name',
        type: DataType.Category,
        children: [
          {
            id: ResumeEditAboutMeFormProperties.ChineseName,
            type: DataType.Text,
            label: 'Chinese Name',
            hint: 'write your chinese name.',
            value: this.form.value[ResumeEditAboutMeFormProperties.ChineseName]
          },
          {
            id: ResumeEditAboutMeFormProperties.EnglishName,
            type: DataType.Text,
            label: 'English Name',
            hint: 'write your english name.',
            value: this.form.value[ResumeEditAboutMeFormProperties.EnglishName]
          }
        ]
      },
      {
        label: 'Photo',
        type: DataType.Category,
        children: [
          {
            id: ResumeEditAboutMeFormProperties.Photo,
            type: DataType.File,
            label: 'Photo',
            placeholder: 'Upload Photo',
            hint: 'upload your personal photo.',
            value: this.form.value[ResumeEditAboutMeFormProperties.Photo]
          },
          {
            id: ResumeEditAboutMeFormProperties.Age,
            type: DataType.Text,
            label: 'Age',
            hint: 'write your age.',
            value: this.form.value[ResumeEditAboutMeFormProperties.Age]
          }
        ]
      },
      {
        label: 'Link',
        type: DataType.Category,
        children: [
          {
            id: ResumeEditAboutMeFormProperties.Blog,
            type: DataType.Text,
            label: 'Blog',
            hint: 'write your blog link.',
            value: this.form.value[ResumeEditAboutMeFormProperties.Blog]
          },
          {
            id: ResumeEditAboutMeFormProperties.Phone,
            type: DataType.Text,
            label: 'Phone',
            hint: 'write your cell phone.',
            value: this.form.value[ResumeEditAboutMeFormProperties.Phone]
          },
          {
            id: ResumeEditAboutMeFormProperties.Email,
            type: DataType.Text,
            label: 'Email',
            hint: 'write your email.',
            value: this.form.value[ResumeEditAboutMeFormProperties.Email]
          },
          {
            id: ResumeEditAboutMeFormProperties.Github,
            type: DataType.Text,
            label: 'GitHub',
            hint: 'write your GitHub link.',
            value: this.form.value[ResumeEditAboutMeFormProperties.Github]
          },
          {
            id: ResumeEditAboutMeFormProperties.CodePen,
            type: DataType.Text,
            label: 'CodePen',
            hint: 'write your CodePen link.',
            value: this.form.value[ResumeEditAboutMeFormProperties.CodePen]
          }
        ]
      }
    ];
  }
}
