export enum ResumeEditExperienceFormProperties {
  Experience = 'experience'
}

export enum ResumeEditExperienceFormArrayProperties {
  Period = 'period',
  Company = 'company',
  JobTitle = 'jobTitle',
  SkillTags = 'skillTags',
  JobDescription = 'jobDescription'
}

export interface ResumeEditExperienceFormDataItem {
  period: string;
  company: string;
  jobTitle: string;
  skillTags: string;
  jobDescription: string;
}

export type ResumeEditExperienceFormData = {
  [P in ResumeEditExperienceFormProperties]: ResumeEditExperienceFormDataItem[];
};
