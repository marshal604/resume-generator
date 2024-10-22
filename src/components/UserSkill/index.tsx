// src/components/common/Resume/Skill.tsx
import React from 'react';

interface UserSkillProps {
  skills: string[];
}

const UserSkill: React.FC<UserSkillProps> = ({ skills }) => {
  return (
    <section>
      <h2>Skill</h2>
      <p>{skills.join(', ')}</p>
    </section>
  );
};

export default UserSkill;