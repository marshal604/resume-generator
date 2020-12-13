export enum ResumeEditPortfolioFormProperties {
  Portfolio = 'portfolio'
}

export enum ResumeEditPortfolioFormArrayProperties {
  PhotoCount = 'photoCount',
  Photos = 'photos',
  Title = 'title',
  SkillTags = 'skillTags',
  Description = 'description'
}

export interface ResumeEditPortfolioFormDataItem {
  [ResumeEditPortfolioFormArrayProperties.PhotoCount]: number;
  [ResumeEditPortfolioFormArrayProperties.Photos]: string[];
  [ResumeEditPortfolioFormArrayProperties.Title]: string;
  [ResumeEditPortfolioFormArrayProperties.SkillTags]: string;
  [ResumeEditPortfolioFormArrayProperties.Description]: string;
}

export type ResumeEditPortfolioFormData = {
  [P in ResumeEditPortfolioFormProperties]: ResumeEditPortfolioFormDataItem[];
};
