export enum ResumeEditPortfolioFormProperties {
  Portfolio = 'portfolio'
}

export enum ResumeEditPortfolioFormArrayProperties {
  PhotoCount = 'photoCount',
  Photos = 'photos',
  Description = 'description'
}

export interface ResumeEditPortfolioFormDataItem {
  [ResumeEditPortfolioFormArrayProperties.PhotoCount]: number;
  [ResumeEditPortfolioFormArrayProperties.Photos]: string[];
  [ResumeEditPortfolioFormArrayProperties.Description]: string;
}

export type ResumeEditPortfolioFormData = {
  [P in ResumeEditPortfolioFormProperties]: ResumeEditPortfolioFormDataItem[];
};
