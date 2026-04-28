import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import TechBadge from './TechBadge';
import Modal from './Modal';
import Carousel from './Carousel';

export default function ProjectCard({ project }) {
  const { t } = useLanguage();
  const proj = t.projects[project.id];
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <article className="project-card">
        <div className="card-accent-bar" />
        <Carousel images={project.images} projectName={proj.name} />
        <div className="card-body">
          <header className="card-header">
            <h2 className="card-title">{proj.name}</h2>
            <span className="card-duration">{proj.duration}</span>
          </header>
          <p className="card-description">{proj.description}</p>
          <div className="card-tech">
            <span className="card-tech-label">{t.home.technologies}</span>
            <div className="tech-list">
              {project.technologies.map((tech) => (
                <TechBadge key={tech} techId={tech} />
              ))}
            </div>
          </div>
          <footer className="card-footer">
            <button
              className="btn-more-info"
              onClick={() => setShowModal(true)}
            >
              {t.home.moreInfo}
            </button>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-github"
            >
              <img src="/icons/github.svg" alt="GitHub" className="btn-icon" />
              {t.home.github}
            </a>
          </footer>
        </div>
      </article>

      {showModal && (
        <Modal project={project} onClose={() => setShowModal(false)} />
      )}
    </>
  );
}
