import React from 'react';
import data from '../dataMahasiswa.json';
import { MapPin, Eye, ExternalLink } from 'lucide-react';

export default function Profile() {
  const { profile, statistics } = data;

  return (
    <div className="profile-card">
      <div className="profile-header">
        {/* Gambar */}
        <img src={profile.photo_url} alt={profile.full_name} className="profile-img" />
        
        <div className="profile-info">
          <h1>{profile.full_name}</h1>
          <p className="profile-headline">{profile.headline}</p>
          
          <div className="tag-container">
            <span className="glass-tag">{profile.nim}</span>
            <span className="glass-tag">{profile.prodi}</span>
            <span className="glass-tag">{profile.angkatan}</span>
          </div>

          <div className="profile-meta">
            <div className="meta-item">
              <MapPin size={16} /> {profile.location}
            </div>
            <div className="meta-item">
              <Eye size={16} /> {statistics.views_count} views
            </div>
          </div>
        </div>
      </div>

      <div className="profile-body">
        <p style={{ color: '#475569', lineHeight: '1.6' }}>{profile.short_bio}</p>
        
        <a href={profile.portfolio_url} target="_blank" rel="noreferrer" className="btn-portfolio">
          <ExternalLink size={18} />
          Lihat Portfolio
        </a>
      </div>
    </div>
  );
}