// src/components/common/Resume/Education.tsx
import React from 'react';

interface Education {
  school: string;
  degree: string;
  start_at: Date;
  end_at: Date;
  address: string;
}

interface UserEducationProps {
  education: Education[];
}

const UserEducation: React.FC<UserEducationProps> = ({ education }) => {
  return (
    <section>
      <h2 style={{ textAlign: 'center' }}>Education</h2>
      <hr />
      {education.map((edu, index) => (
        <div key={index}>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <p>{edu.school}</p>
            <p>{edu.start_at.toLocaleDateString()} - {edu.end_at.toLocaleDateString()}</p>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <p>{edu.degree}</p>
            <p>{edu.address}</p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default UserEducation;