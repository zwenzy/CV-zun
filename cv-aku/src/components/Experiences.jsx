import React from 'react';
import data from '../dataMahasiswa.json';
import { Briefcase, Building, Users } from 'lucide-react';

export default function Experiences() {
  // Sort: Yang 'current' paling atas, sisanya urut tanggal
  const sortedExp = [...data.experiences].sort((a, b) => {
    if (a.is_current) return -1;
    return new Date(b.start_date) - new Date(a.start_date);
  });

  return (
    <div className="section-wrapper">
      <h2 className="section-title">Experiences</h2>
      <div className="timeline">
        {sortedExp.map((item, index) => (
          <div key={item.id} className="timeline-item">
            
            {/* Garis vertikal (hanya muncul jika BUKAN item terakhir) */}
            {index !== sortedExp.length - 1 && <div className="timeline-line"></div>}

            {/* Icon Bulat di Kiri */}
            <div className="timeline-icon">
              {item.experience_type === 'organization' ? <Users size={18}/> : 
               item.experience_type === 'internship' ? <Building size={18}/> : <Briefcase size={18}/>}
            </div>

            {/* Konten Card di Kanan */}
            <div className="timeline-content">
              <div className="exp-header">
                <div>
                  <h3 style={{fontSize:'1rem', fontWeight:'bold', margin:0}}>{item.title}</h3>
                  <p style={{margin:0, fontSize:'0.9rem', color:'#64748b'}}>{item.organization}</p>
                </div>
                <span className={`exp-badge ${item.experience_type}`}>{item.experience_type}</span>
              </div>

              <span className="exp-date">
                {item.start_date} - {item.is_current ? 'Present' : item.end_date}
              </span>

              <p style={{fontSize:'0.9rem', color:'#334155', marginBottom:'0.5rem'}}>
                {item.description}
              </p>

              {/* Tags Teknologi */}
              {item.technologies && (
                <div className="tech-stack">
                  {item.technologies.map((tech, i) => (
                    <span key={i} className="tech-tag">{tech}</span>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}