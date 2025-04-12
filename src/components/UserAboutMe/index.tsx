// src/components/common/Resume/Skill.tsx
import React from 'react';

interface UserAboutMeProps {
  aboutMe: string;
}

const UserAboutMe: React.FC<UserAboutMeProps> = ({ aboutMe }) => {
  return (
    <section>
      <h3 style={{ textAlign: 'center' }}>About Me</h3>
      <hr />
      <p style={{ textAlign: 'center' }}>{aboutMe}</p>
    </section>
  );
};

export default UserAboutMe;