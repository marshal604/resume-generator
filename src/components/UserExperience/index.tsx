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
      <h2 style={{ textAlign: 'center' }}>Experience</h2>
      <hr />
      {experiences.map((exp, index) => (
        <div key={index}>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div>
              <p>{exp.title}, {exp.company}</p>
            </div>
            <div>
              <p>{exp.start_at.toLocaleDateString()} - {exp.end_at ? exp.end_at.toLocaleDateString() : 'Present'}</p>
            </div>
          </div>
          <ul>
            {exp.achievements.map((ach, idx) => (
              <li key={idx}>{ach}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
};

export default UserExperience;