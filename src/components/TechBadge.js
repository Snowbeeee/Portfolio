import React, { useState } from 'react';
import { technologies } from '../data/projects';

export default function TechBadge({ techId }) {
  const tech = technologies[techId];
  const [imgError, setImgError] = useState(false);

  if (!tech) return null;

  return (
    <div className="tech-badge">
      {!imgError ? (
        <img
          src={tech.icon}
          alt={tech.name}
          className="tech-icon"
          draggable={false}
          onError={() => setImgError(true)}
        />
      ) : (
        <div className="tech-icon-fallback" aria-hidden="true">
          {tech.name.charAt(0)}
        </div>
      )}
      <span className="tech-name">{tech.name}</span>
    </div>
  );
}
