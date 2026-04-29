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
  pyqt:          { name: 'PyQt6',          icon: '/icons/pyqt.svg' },
  libretro:      { name: 'libretro',       icon: '/icons/libretro.svg' },
  screenscraper: { name: 'ScreenScraper',  icon: '/icons/screenscraper.svg' },
};

// Each item in `media` can be:
//   - a string              → image path, e.g. '/images/foo/1.png'
//   - { type: 'youtube', id: 'VIDEO_ID' } → YouTube embed
export const projects = [
  {
    id: 'gamelibrary',
    githubUrl: 'https://github.com/Snowbeeee/TFG',
    media: [
      { type: 'youtube', id: 'uajW833dH60' },
      '/images/gamelibrary/1.png',
      '/images/gamelibrary/2.png',
      '/images/gamelibrary/3.png',
      '/images/gamelibrary/4.png',
      '/images/gamelibrary/5.png',
      '/images/gamelibrary/6.png',
    ],
    technologies: ['python', 'pyqt', 'libretro', 'screenscraper', 'git'],
  },
  {
    id: 'kalendas',
    githubUrl: 'https://github.com/Snowbeeee/Kalendas',
    media: [
      { type: 'youtube', id: 'g7EeH8uFPoU' },
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
    media: [
      { type: 'youtube', id: 'wTAKEyOOfVk' },
      '/images/battleclickerrpg/1.jpeg',
      '/images/battleclickerrpg/2.jpg',
      '/images/battleclickerrpg/3.jpeg',
    ],
    technologies: ['java', 'android', 'sqlite', 'gradle', 'git'],
  },
  {
    id: 'movievibes',
    githubUrl: 'https://github.com/Snowbeeee/MovieVibes',
    media: [
      { type: 'youtube', id: 'sXD6P-HpNjI' },
      '/images/movievibes/1.png',
      '/images/movievibes/2.png',
      '/images/movievibes/3.png',
      '/images/movievibes/4.png',
      '/images/movievibes/5.png',
    ],
    technologies: ['java', 'springboot', 'mysql', 'jsp', 'docker', 'css3', 'git'],
  },
  {
    id: 'eurodle',
    githubUrl: 'https://github.com/Snowbeeee/Eurodle',
    media: [
      '/images/eurodle/1.png',
      '/images/eurodle/2.png',
      '/images/eurodle/3.png',
      '/images/eurodle/4.png',
      '/images/eurodle/5.png',
      '/images/eurodle/6.png',
      '/images/eurodle/7.png',
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
