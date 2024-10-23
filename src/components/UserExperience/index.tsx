// src/components/common/Resume/Experience.tsx
import React from 'react';

interface Experience {
  title: string;
  company: string;
  start_at: Date;
  end_at: Date | null;
  achievements: string[];
}

interface UserExperienceProps {
  experiences: Experience[];
}

const UserExperience: React.FC<UserExperienceProps> = ({ experiences }) => {
  return (
    <section>
      <h3 style={{ textAlign: 'center' }}>Experience</h3>
      <hr />
      {experiences.map((exp, index) => (
        <div key={index}>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex' }}>
              <h4>{exp.title}</h4>
              <p>- {exp.company}</p>
            </div>
            <div>
              <p>{exp.start_at.getFullYear()}.{exp.start_at.getMonth() + 1} - {exp.end_at ? `${exp.end_at.getFullYear()}.${exp.end_at.getMonth() + 1}` : 'Present'}</p>
            </div>
          </div>
          <ul>
            {exp.achievements.map((ach, idx) => (
              <li key={idx} style={{ paddingLeft: '8px' }}>● {ach}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
};

export default UserExperience;