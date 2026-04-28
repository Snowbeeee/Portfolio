import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/projects';

export default function Home() {
  const { t } = useLanguage();

  return (
    <main className="page-home">
      <div className="page-header">
        <h1 className="page-title">{t.home.title}</h1>
      </div>
      <div className="projects-grid">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </main>
  );
}
