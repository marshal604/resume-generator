import { ResumeEditAboutMeFormData } from './resume-edit-about-me/resume-edit-about-me.component.model';

export enum DataType {
  Category = 1,
  Text,
  File
}

export interface DataItem {
  type: DataType.Category;
  label: string;
  children?: DataChildItem[];
}

export interface DataChildItem {
  id: string;
  type: DataType.File | DataType.Text;
  label: string;
  value: string;
  hint?: string;
  placeholder?: string;
}

export interface ResumeEditFormData {
  aboutMe: ResumeEditAboutMeFormData;
}
