export interface ResumePreviewData {
  /* about me */
  jobTitle: string;
  chineseName: string;
  englishName: string;
  age: string;
  photo: string;
  blog: string;
  email: string;
  phone: string;
  github: string;
  codePen: string;
  /* profile */
  profile: string;
  /* education */
  education: {
    school: string;
    department: string;
    period: string;
  }[];
  /* experience */
  experience: {
    period: string;
    company: string;
    jobTitle: string;
    skillTags: string[];
    jobDescription: string;
  }[];
}
