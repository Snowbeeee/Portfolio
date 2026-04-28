import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import TechBadge from '../components/TechBadge';
import { allSkills } from '../data/projects';

export default function About() {
  const { t } = useLanguage();
  const ab = t.about;

  return (
    <main className="page-about">

      {/* Hero */}
      <section className="about-hero">
        <div className="about-name-row">
          <h1 className="about-name">Eduardo García Rivas</h1>
          <div className="about-hero-links">
            <a
              href="https://github.com/Snowbeeee"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-social-link"
            >
              <img src="/icons/github.svg" alt="GitHub" className="hero-social-icon" />
              <span>{ab.links.github}</span>
            </a>
            <a
              href="https://www.linkedin.com/in/eduardo-garcia-rivas-ab147b289/"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-social-link"
            >
              <img src="/icons/linkedin.svg" alt="LinkedIn" className="hero-social-icon" />
              <span>{ab.links.linkedin}</span>
            </a>
          </div>
        </div>
        <p className="about-role">{ab.role}</p>
      </section>

      {/* Education + Languages */}
      <div className="about-row">
        <section className="about-section">
          <h2 className="section-title">{ab.education.title}</h2>
          <div className="info-card edu-card">
            <img src="/icons/uma-logo.jpeg" alt="Universidad de Málaga" className="edu-logo" />
            <div>
              <p className="info-primary">{ab.education.degree}</p>
              <p className="info-secondary">{ab.education.university} · {ab.education.year}</p>
            </div>
          </div>
        </section>

        <section className="about-section">
          <h2 className="section-title">{ab.languages.title}</h2>
          <div className="info-card languages-card">
            <div className="lang-row">
              <span className="lang-name">{ab.languages.spanish}</span>
              <span className="lang-level native">{ab.languages.spanishLevel}</span>
            </div>
            <div className="lang-row">
              <span className="lang-name">{ab.languages.english}</span>
              <span className="lang-level">
                <span className="native">{ab.languages.englishHighlight}</span>
                {' '}{ab.languages.englishLevel}
              </span>
            </div>
          </div>
        </section>
      </div>

      {/* Skills */}
      <section className="about-section">
        <h2 className="section-title">{ab.skills.title}</h2>
        <div className="skills-grid">
          {allSkills.map((skill) => (
            <TechBadge key={skill} techId={skill} />
          ))}
        </div>
      </section>

    </main>
  );
}
