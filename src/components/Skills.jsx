import React from 'react';

const skills = [
  { name: 'HTML5', point: '80%' },
  { name: 'CSS3', point: '70%' },
  { name: 'JavaScript', point: '80%' },
  { name: 'PHP', point: '100%' },
  { name: 'Laravel Lumen', point: '80%' },
  { name: 'Codeigniter', point: '90%' },
  { name: 'Vue Js', point: '60%' },
  { name: 'Flutter', point: '30%' }
];

const Skills = () => {
  return (
    <div className="skill">
      <h1 className="title">Mis Habilidades</h1>
      <div className="listSkill">
        {skills.map(skill => (
          <div className="item" key={skill.name}>
            <div className="name">{skill.name}</div>
            <div className="evaluate" style={{ '--point': skill.point }}></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;