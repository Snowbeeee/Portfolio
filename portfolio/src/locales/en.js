export const en = {
  nav: {
    home: 'Home',
    about: 'About Me',
  },
  home: {
    title: 'My Projects',
    github: 'View on GitHub',
    technologies: 'Technologies',
    moreInfo: 'More Info',
    groupProjectNote:
      'This project was developed in a team as part of the Software Engineering degree coursework at the University of Malaga.',
  },
  about: {
    title: 'About Me',
    role: 'Software Engineer',
    education: {
      title: 'Education',
      degree: "Bachelor's Degree in Software Engineering",
      university: 'University of Malaga',
      year: '2025',
    },
    languages: {
      title: 'Languages',
      spanish: 'Spanish',
      spanishLevel: 'Native',
      english: 'English',
      englishHighlight: 'Fluent',
      englishLevel: '— oral and written communication in technical and professional environments',
    },
    skills: { title: 'Technologies' },
    links: {
      title: 'Connect',
      github: 'GitHub',
      linkedin: 'LinkedIn',
    },
  },
  projects: {
    kalendas: {
      name: 'Kalendas',
      duration: '2025 · 3 months',
      description:
        'Web platform for calendar and event management with collaborative features. Implements a microservices architecture using an API Gateway as a single entry point. Includes secure OAuth authentication (Google & GitHub), Google Calendar data import, MongoDB Atlas persistence, multimedia management through Cloudinary, and event geolocation using OpenStreetMap (Nominatim).',
      modules: [
        {
          title: 'Microservices architecture',
          items: [
            'Backend split into independent services by functional domain',
            'Centralized communication through API Gateway',
            'Separation of responsibilities and modular scalability',
          ],
        },
        {
          title: 'API Gateway & internal security',
          items: [
            'Single entry point to the entire backend',
            'Microservice protection via internal API Key',
            'Prevention of direct access to individual services',
          ],
        },
        {
          title: 'OAuth & Google Calendar integration',
          items: [
            'Secure authentication via Google and GitHub',
            'Direct Google Calendar import',
            'Mapping and synchronization of external data into the internal system',
          ],
        },
        {
          title: 'Event management & geolocation',
          items: [
            'Full CRUD system for calendars and events',
            'Geocoding via OpenStreetMap (Nominatim)',
            'Interactive map rendering with OpenLayers',
          ],
        },
        {
          title: 'Persistence & external services',
          items: [
            'Centralized persistence in MongoDB Atlas',
            'Optimized multimedia storage via Cloudinary',
            'Independent microservice for email delivery with Brevo API',
          ],
        },
      ],
    },
    battleclickerrpg: {
      name: 'BattleClickerRPG',
      duration: '2024 · 3 months',
      description:
        'Android clicker RPG game combining clicking mechanics with traditional RPG elements such as bosses, skills, and persistent stat tracking. Modular architecture with a centralized audio management system, SQLite database with version-based migrations, and immersive fullscreen mode.',
      modules: [
        {
          title: 'Architecture & project structure',
          items: [
            'Modular structure divided into layers: UI (Activities & Fragments), game logic, and data access',
            'DAO pattern for SQLite data abstraction',
            'Centralized game state management through dedicated classes',
          ],
        },
        {
          title: 'Combat & RPG progression system',
          items: [
            'Click mechanics with damage calculation based on player stats',
            'Boss system with health points, attacks, and tiered rewards',
            'Skill tree with effects, cooldowns, and upgrade levels',
          ],
        },
        {
          title: 'SQLite persistence',
          items: [
            'Local database with version-based migration system',
            'Automatic saving of player progress, stats, and inventory',
            'Game data initialization from asset files',
          ],
        },
        {
          title: 'Audio system',
          items: [
            'Centralized SoundPool manager for non-blocking sound effects',
            'Dynamic volume control and simultaneous multi-track playback',
            'Separation between background music and combat sound effects',
          ],
        },
        {
          title: 'User interface & experience',
          items: [
            'Immersive fullscreen mode with system bar hiding',
            'Animated visual feedback during combat',
            'Built-in Android multilanguage support',
          ],
        },
      ],
    },
    movievibes: {
      name: 'MovieVibes',
      duration: '2024 · 3 months',
      description:
        'Movie social network developed as a university project. Allows users to rate and share movies. Full-stack architecture with a Spring Boot backend, MySQL persistence, JSP templating, and Docker deployment.',
      modules: [
        {
          title: 'Full-stack MVC architecture',
          items: [
            'Backend built with Spring Boot following the Model-View-Controller pattern',
            'Server-side view rendering with JSP',
            'Containerization and deployment with Docker and Docker Compose',
          ],
        },
        {
          title: 'Authentication & user management',
          items: [
            'Registration and login system with form validation',
            'Session management with basic security',
            'Customizable user profiles',
          ],
        },
        {
          title: 'Movie catalog & search',
          items: [
            'Catalog browsing and filtering',
            'Movie detail page with complete information',
            'Search by title, genre, and other criteria',
          ],
        },
        {
          title: 'Rating & review system',
          items: [
            'Individual movie scoring per user',
            'Post, edit, and delete reviews',
            'Average rating calculation and display',
          ],
        },
        {
          title: 'MySQL persistence',
          items: [
            'Normalized relational database design',
            'Entity and relationship management with JPA/Hibernate',
            'Optimized queries and transaction control',
          ],
        },
      ],
    },
    eurodle: {
      name: 'Eurodle',
      duration: '2025 · 3 months',
      description:
        'Eurovision song guessing game inspired by Wordle. React frontend with data collected and processed using R. Deployed on Netlify with Docker.',
      modules: [
        {
          title: 'Wordle-style game mechanics',
          items: [
            'Eurovision song guessing in a limited number of attempts',
            'Visual hint system by category: country, year, genre, ranking, and more',
            'Real-time color-coded feedback based on answer proximity',
          ],
        },
        {
          title: 'Data collection & processing',
          items: [
            'Data sourced from Kaggle and the public Spijkervet/eurovision-dataset repository',
            'Processing, cleaning, and filtering of finalists through 2025 using R scripts',
            'Export to structured JSON for frontend consumption',
          ],
        },
        {
          title: 'React frontend',
          items: [
            'Responsive interface built with reusable components',
            'Game state management using React hooks',
            'Animated visual feedback on each guess',
          ],
        },
        {
          title: 'Styling & visual design',
          items: [
            'Responsive design with CSS and Bootstrap',
            'Visual theming inspired by Eurovision aesthetics',
            'Adaptation for different screen sizes',
          ],
        },
        {
          title: 'Infrastructure & deployment',
          items: [
            'Docker containerization for a reproducible development environment',
            'Continuous deployment on Netlify with client-side routing configuration',
          ],
        },
      ],
    },
  },
};
