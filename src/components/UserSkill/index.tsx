// src/components/common/Resume/Skill.tsx
import React from 'react';

interface UserSkillProps {
  skills: string[];
}

const UserSkill: React.FC<UserSkillProps> = ({ skills }) => {
  return (
    <section>
      <h2 style={{ textAlign: 'center' }}>Skill</h2>
      <hr />
      <p style={{ textAlign: 'center' }}>{skills.join(', ')}</p>
    </section>
  );
};

export default UserSkill;