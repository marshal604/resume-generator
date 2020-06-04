import { ResumeEditAboutMeFormData } from './resume-edit-about-me/resume-edit-about-me.component.model';
import { ResumeEditEducationFormData } from './resume-edit-education/resume-edit-education.component.model';
import { ResumeEditProfileFormData } from './resume-edit-profile/resume-edit-profile.component.model';
import { ResumeEditExperienceFormData } from './resume-edit-experience/resume-edit-experience.component.model';
import { ResumeEditPortfolioFormData } from './resume-edit-portfolio/resume-edit-portfolio.component.model';

export enum ResumeEditFormProperties {
  AboutMe = 'aboutMe',
  Education = 'education',
  Profile = 'profile',
  Experience = 'experience',
  Portfolio = 'portfolio'
}
export interface ResumeEditFormData {
  [ResumeEditFormProperties.AboutMe]: ResumeEditAboutMeFormData;
  [ResumeEditFormProperties.Education]: ResumeEditEducationFormData;
  [ResumeEditFormProperties.Profile]: ResumeEditProfileFormData;
  [ResumeEditFormProperties.Experience]: ResumeEditExperienceFormData;
  [ResumeEditFormProperties.Portfolio]: ResumeEditPortfolioFormData;
}
