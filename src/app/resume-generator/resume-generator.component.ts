import { Component, OnInit } from '@angular/core';

import { ResumeEditFormData } from './resume-edit/resume-edit.component.model';

import { ResumePreviewData } from './resume-preview/resume-preview.component.model';

@Component({
  selector: 'yur-resume-generator',
  templateUrl: './resume-generator.component.html',
  styleUrls: ['./resume-generator.component.scss', './resume-generator.component.print.scss']
})
export class ResumeGeneratorComponent implements OnInit {
  previewData: ResumePreviewData;

  constructor() {}

  ngOnInit() {}

  onValueChange(data: ResumeEditFormData) {
    this.previewData = {
      /* about me */
      jobTitle: data.aboutMe.jobTitle,
      chineseName: data.aboutMe.chineseName,
      englishName: data.aboutMe.englishName,
      age: data.aboutMe.age,
      photo: data.aboutMe.photo,
      blog: data.aboutMe.blog,
      email: data.aboutMe.email,
      phone: data.aboutMe.phone,
      github: data.aboutMe.github,
      codePen: data.aboutMe.codePen,
      /* profile */
      profile: data.profile.profile,
      /* education */
      education: data.education.education || [],
      /* experience */
      experience: (data.experience.experience || []).map(item => ({
        ...item,
        skillTags: item.skillTags ? item.skillTags.split(',') : []
      })),
      /* portfolio */
      portfolio: data.portfolio.portfolio || []
    };
  }
}
