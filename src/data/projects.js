export const technologies = {
  react:       { name: 'React',        icon: '/icons/react.svg' },
  typescript:  { name: 'TypeScript',   icon: '/icons/typescript.svg' },
  javascript:  { name: 'JavaScript',   icon: '/icons/javascript.svg' },
  python:      { name: 'Python',       icon: '/icons/python.svg' },
  fastapi:     { name: 'FastAPI',      icon: '/icons/fastapi.svg' },
  java:        { name: 'Java',         icon: '/icons/java.svg' },
  springboot:  { name: 'Spring Boot',  icon: '/icons/springboot.svg' },
  android:     { name: 'Android',      icon: '/icons/android.svg' },
  mongodb:     { name: 'MongoDB',      icon: '/icons/mongodb.svg' },
  mysql:       { name: 'MySQL',        icon: '/icons/mysql.svg' },
  sqlite:      { name: 'SQLite',       icon: '/icons/sqlite.svg' },
  docker:      { name: 'Docker',       icon: '/icons/docker.svg' },
  git:         { name: 'Git',          icon: '/icons/git.svg' },
  gradle:      { name: 'Gradle',       icon: '/icons/gradle.svg' },
  cloudinary:  { name: 'Cloudinary',   icon: '/icons/cloudinary.svg' },
  oauth:       { name: 'OAuth',        icon: '/icons/oauth.svg' },
  bootstrap:   { name: 'Bootstrap',    icon: '/icons/bootstrap.svg' },
  css3:        { name: 'CSS3',         icon: '/icons/css3.svg' },
  r:           { name: 'R',            icon: '/icons/r.svg' },
  jsp:         { name: 'JSP',          icon: '/icons/jsp.svg' },
};

export const projects = [
  {
    id: 'kalendas',
    githubUrl: 'https://github.com/Snowbeeee/Kalendas',
    images: [
      '/images/kalendas/1.png',
      '/images/kalendas/2.png',
      '/images/kalendas/3.png',
    ],
    technologies: ['react', 'typescript', 'python', 'fastapi', 'mongodb', 'cloudinary', 'oauth', 'docker', 'git'],
  },
  {
    id: 'battleclickerrpg',
    githubUrl: 'https://github.com/Snowbeeee/BattleClickerRPG',
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.kazukidev.battleclickerrpg',
    images: [
      '/images/battleclickerrpg/1.png',
      '/images/battleclickerrpg/2.png',
      '/images/battleclickerrpg/3.png',
    ],
    technologies: ['java', 'android', 'sqlite', 'gradle', 'git'],
  },
  {
    id: 'movievibes',
    githubUrl: 'https://github.com/Snowbeeee/MovieVibes',
    images: [
      '/images/movievibes/1.png',
      '/images/movievibes/2.png',
      '/images/movievibes/3.png',
    ],
    technologies: ['java', 'springboot', 'mysql', 'jsp', 'docker', 'css3', 'git'],
  },
  {
    id: 'eurodle',
    githubUrl: 'https://github.com/Snowbeeee/Eurodle',
    images: [
      '/images/eurodle/1.png',
      '/images/eurodle/2.png',
      '/images/eurodle/3.png',
    ],
    technologies: ['react', 'javascript', 'css3', 'bootstrap', 'r', 'docker', 'git'],
  },
];

export const allSkills = [
  'react', 'typescript', 'javascript', 'css3', 'bootstrap',
  'python', 'fastapi', 'java', 'springboot',
  'android',
  'mongodb', 'mysql', 'sqlite',
  'docker', 'git', 'gradle',
  'r',
];
