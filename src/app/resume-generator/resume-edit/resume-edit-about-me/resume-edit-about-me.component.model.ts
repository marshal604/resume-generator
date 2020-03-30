export enum ResumeEditAboutMeFormProperties {
  JobTitle = 'jobTitle',
  ChineseName = 'chineseName',
  EnglishName = 'englishName',
  Age = 'age',
  Photo = 'photo',
  Blog = 'blog',
  Email = 'email',
  Phone = 'phone',
  Github = 'github',
  CodePen = 'codePen'
}
export type ResumeEditAboutMeFormData = {
  [P in ResumeEditAboutMeFormProperties]: string;
};

export const RESUME_EDIT_ABOUT_ME_FORM_GROUP = {
  [ResumeEditAboutMeFormProperties.JobTitle]: '',
  [ResumeEditAboutMeFormProperties.ChineseName]: '',
  [ResumeEditAboutMeFormProperties.EnglishName]: '',
  [ResumeEditAboutMeFormProperties.Photo]: [{ value: '', disabled: true }],
  [ResumeEditAboutMeFormProperties.Age]: '',
  [ResumeEditAboutMeFormProperties.Blog]: '',
  [ResumeEditAboutMeFormProperties.Email]: '',
  [ResumeEditAboutMeFormProperties.Phone]: '',
  [ResumeEditAboutMeFormProperties.Github]: '',
  [ResumeEditAboutMeFormProperties.CodePen]: ''
};
