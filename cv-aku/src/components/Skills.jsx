import React from 'react';
import data from '../dataMahasiswa.json';

export default function Skills() {
  const { skills } = data;

  // Helper untuk hitung lebar bar berdasarkan level
  const getWidth = (level) => {
    switch(level) {
      case 'advanced': return '100%';
      case 'intermediate': return '65%';
      case 'beginner': return '30%';
      default: return '50%';
    }
  };

  return (
    <div className="section-wrapper">
      <h2 className="section-title">Skills & Expertise</h2>
      <div className="skills-grid">
        {skills.map(skill => (
          <div key={skill.id} className="skill-card">
            <div className="skill-header">
              <div className="skill-icon-box">
                <img src={skill.icon_url} alt={skill.name} />
                <div>
                  <h3 style={{fontSize:'1rem', fontWeight:'600', margin:0}}>{skill.name}</h3>
                  <small style={{color:'#94a3b8'}}>{skill.years_of_experience} years exp</small>
                </div>
              </div>
              {skill.is_main && <span className="badge-main">MAIN</span>}
            </div>

            <div style={{display:'flex', justifyContent:'space-between', fontSize:'0.8rem', color:'#64748b'}}>
              <span style={{textTransform:'capitalize'}}>{skill.level}</span>
              <span>{getWidth(skill.level)}</span>
            </div>

            <div className="progress-bg">
              <div className="progress-fill" style={{ width: getWidth(skill.level) }}></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}