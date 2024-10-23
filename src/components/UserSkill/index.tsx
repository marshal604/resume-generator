// src/components/common/Resume/Skill.tsx
import React from 'react';

interface UserSkillProps {
  skills: string[];
}

const UserSkill: React.FC<UserSkillProps> = ({ skills }) => {
  return (
    <section>
      <h3 style={{ textAlign: 'center' }}>Skills & Tools</h3>
      <hr />
      <p style={{ textAlign: 'center' }}>{skills.join(', ')}</p>
    </section>
  );
};

export default UserSkill;