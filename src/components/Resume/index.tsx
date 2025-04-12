// src/components/common/Resume/Resume.tsx
import React from 'react';
import UserInfo from '@components/UserInfo';
import UserAboutMe from '@/components/UserAboutMe';
import UserExperience from '@components/UserExperience';
import UserEducation from '@components/UserEducation';

interface ResumeProps {
  userInfo: {
    address: string;
    email: string;
    phone: string;
    name: string;
    linkedin: string;
    github: string;
    codepen: string;
  };
  aboutMe: string;
  experiences: {
    title: string;
    company: string;
    start_at: Date;
    end_at: Date | null;
    achievements: string[];
  }[];
  education: {
    school: string;
    degree: string;
    start_at: Date;
    end_at: Date;
    address: string;
  }[];
}

const Resume: React.FC<ResumeProps> = ({ userInfo, aboutMe, experiences, education }) => {
  return (
    <div>
      <UserInfo {...userInfo} />
      <UserAboutMe aboutMe={aboutMe} />
      <UserExperience experiences={experiences} />
      <UserEducation education={education} />
    </div>
  );
};

export default Resume;