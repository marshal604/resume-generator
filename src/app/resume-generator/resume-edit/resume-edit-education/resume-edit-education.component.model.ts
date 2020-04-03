export enum ResumeEditEducationFormProperties {
  Education = 'education'
}

export enum ResumeEditEducationFormArrayProperties {
  School = 'school',
  Department = 'department',
  Period = 'period'
}

export interface ResumeEditEducationFormDataItem {
  school: string;
  department: string;
  period: string;
}

export type ResumeEditEducationFormData = {
  [P in ResumeEditEducationFormProperties]: ResumeEditEducationFormDataItem[];
};
