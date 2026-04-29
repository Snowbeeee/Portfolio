import React, { useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import TechBadge from './TechBadge';

export default function Modal({ project, onClose }) {
  const { t } = useLanguage();
  const proj = t.projects[project.id];

  useEffect(() => {
    const handleKey = (e) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-box" onClick={(e) => e.stopPropagation()} role="dialog" aria-modal="true">

        <div className="modal-header">
          <div className="modal-title-row">
            <h2 className="modal-title">{proj.name}</h2>
            <span className="modal-duration">{proj.duration}</span>
          </div>
          <button className="modal-close" onClick={onClose} aria-label="Cerrar">✕</button>
        </div>

        <div className="modal-tech-row">
          {project.technologies.map((tech) => (
            <TechBadge key={tech} techId={tech} />
          ))}
        </div>

        <div className="modal-modules">
          {proj.modules.map((mod, i) => (
            <div key={i} className="modal-module">
              <h3 className="module-title">
                <span className="module-arrow" aria-hidden="true">▶</span>
                {mod.title}
              </h3>
              <ul className="module-items">
                {mod.items.map((item, j) => (
                  <li key={j}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="modal-group-note">
          <p>{proj.note || t.home.groupProjectNote}</p>
        </div>

        <div className="modal-footer">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-github"
          >
            <img src="/icons/github.svg" alt="GitHub" className="btn-icon" />
            {t.home.github}
          </a>
        </div>

      </div>
    </div>
  );
}
