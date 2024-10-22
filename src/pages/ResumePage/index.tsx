import React from 'react';
import Resume from '@components/Resume';

const ResumePage: React.FC = () => {
  const userInfo = {
    address: '123 Main St, Anytown, USA',
    email: 'john.doe@example.com',
    phone: '123-456-7890',
    name: 'John Doe',
    linkedin: 'https://linkedin.com/in/johndoe',
    github: 'https://github.com/johndoe',
    codepen: 'https://codepen.io/johndoe',
  };
  const skills = ['React', 'Node.js', 'Express', 'MongoDB'];
  const experiences = [
    { title: 'Software Engineer', company: 'Tech Corp', start_at: new Date('2020-01-01'), end_at: new Date('2022-01-01'), achievements: ['Achievement 1', 'Achievement 2'] },
  ];
  const education = [
    { school: 'University of Anytown', degree: 'Bachelor of Science', start_at: new Date('2016-01-01'), end_at: new Date('2020-01-01'), address: 'Anytown, USA' },
  ];
  return (
    <div>
      <Resume userInfo={userInfo} skills={skills} experiences={experiences} education={education} />
    </div>
  );
};

export default ResumePage;
