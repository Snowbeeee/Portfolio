export const es = {
  nav: {
    home: 'Inicio',
    about: 'Sobre Mí',
  },
  home: {
    title: 'Mis Proyectos',
    github: 'Ver en GitHub',
    technologies: 'Tecnologías',
    moreInfo: 'Más información',
    groupProjectNote:
      'Este proyecto fue desarrollado en grupo en el contexto de las asignaturas del Grado en Ingeniería del Software de la Universidad de Málaga.',
  },
  about: {
    title: 'Sobre Mí',
    role: 'Ingeniero de Software',
    education: {
      title: 'Formación',
      degree: 'Grado en Ingeniería del Software',
      university: 'Universidad de Málaga',
      year: '2021-2026',
    },
    languages: {
      title: 'Idiomas',
      spanish: 'Español',
      spanishLevel: 'Nativo',
      english: 'Inglés',
      englishHighlight: 'Fluido',
      englishLevel: '— oral y escrita en entornos técnicos y profesionales',
    },
    skills: { title: 'Tecnologías' },
    links: {
      title: 'Contacto',
      github: 'GitHub',
      linkedin: 'LinkedIn',
    },
  },
  projects: {
    kalendas: {
      name: 'Kalendas',
      duration: '2025 · 3 meses',
      description:
        'Plataforma web de gestión de calendarios y eventos con funciones colaborativas. Implementa arquitectura de microservicios con API Gateway como punto de entrada único. Incluye autenticación OAuth segura (Google y GitHub), importación de Google Calendar, persistencia en MongoDB Atlas, gestión multimedia con Cloudinary y geolocalización de eventos con OpenStreetMap (Nominatim).',
      modules: [
        {
          title: 'Arquitectura basada en microservicios',
          items: [
            'Separación del backend en servicios independientes por dominio funcional',
            'Comunicación centralizada mediante API Gateway',
            'Aislamiento de responsabilidades y escalabilidad modular',
          ],
        },
        {
          title: 'API Gateway y seguridad interna',
          items: [
            'Punto único de acceso al backend',
            'Protección de microservicios mediante API Key interna',
            'Prevención de acceso directo a servicios individuales',
          ],
        },
        {
          title: 'Integración OAuth y Google Calendar',
          items: [
            'Autenticación segura mediante Google y GitHub',
            'Importación directa de calendarios de Google Calendar',
            'Mapeo y sincronización de datos externos al sistema interno',
          ],
        },
        {
          title: 'Gestión de eventos y geolocalización',
          items: [
            'Sistema completo CRUD para calendarios y eventos',
            'Geocodificación mediante OpenStreetMap (Nominatim)',
            'Renderizado de mapas interactivos con OpenLayers',
          ],
        },
        {
          title: 'Persistencia y servicios externos',
          items: [
            'Persistencia centralizada en MongoDB Atlas',
            'Almacenamiento multimedia optimizado mediante Cloudinary',
            'Microservicio independiente para envío de correos con Brevo API',
          ],
        },
      ],
    },
    battleclickerrpg: {
      name: 'BattleClickerRPG',
      duration: '2025 · 3 meses',
      description:
        'Videojuego RPG de tipo clicker para Android. Combina mecánicas de clic con elementos RPG tradicionales como jefes, habilidades y estadísticas persistentes. Arquitectura modular con sistema de audio centralizado, base de datos SQLite con migraciones por versión y modo inmersivo a pantalla completa.',
      modules: [
        {
          title: 'Arquitectura y estructura del proyecto',
          items: [
            'Estructura modular dividida en capas: UI (Activities y Fragments), lógica de juego y acceso a datos',
            'Patrón DAO para abstracción del acceso a SQLite',
            'Gestión centralizada del estado del juego mediante clases dedicadas',
          ],
        },
        {
          title: 'Sistema de combate y progresión RPG',
          items: [
            'Mecánica de clics con cálculo de daño basado en estadísticas del jugador',
            'Sistema de jefes con puntos de vida, ataques y recompensas escalonadas',
            'Árbol de habilidades con efectos, cooldowns y niveles de mejora',
          ],
        },
        {
          title: 'Persistencia con SQLite',
          items: [
            'Base de datos local con sistema de migraciones por versión',
            'Guardado automático del progreso, estadísticas e inventario del jugador',
            'Inicialización de datos del juego desde ficheros en assets',
          ],
        },
        {
          title: 'Sistema de audio',
          items: [
            'Gestor centralizado con SoundPool para efectos de sonido sin bloqueo de UI',
            'Control dinámico de volumen y reproducción de múltiples pistas simultáneas',
            'Separación entre música de fondo y efectos de combate',
          ],
        },
        {
          title: 'Interfaz y experiencia de usuario',
          items: [
            'Modo inmersivo a pantalla completa con ocultación de barras del sistema',
            'Feedback visual animado durante el combate',
            'Soporte multilenguaje integrado en el sistema Android',
          ],
        },
      ],
    },
    movievibes: {
      name: 'MovieVibes',
      duration: '2024 · 3 meses',
      description:
        'Red social de películas desarrollada como proyecto universitario. Permite a los usuarios valorar y compartir películas. Arquitectura full-stack con backend en Spring Boot, persistencia en MySQL, vistas con JSP y despliegue mediante Docker.',
      modules: [
        {
          title: 'Arquitectura full-stack MVC',
          items: [
            'Backend implementado con Spring Boot siguiendo el patrón Modelo-Vista-Controlador',
            'Renderizado de vistas en servidor mediante JSP',
            'Contenerización y despliegue con Docker y Docker Compose',
          ],
        },
        {
          title: 'Autenticación y gestión de usuarios',
          items: [
            'Sistema de registro e inicio de sesión con validación de formularios',
            'Gestión de sesiones de usuario con seguridad básica',
            'Perfiles de usuario con información personalizable',
          ],
        },
        {
          title: 'Catálogo y búsqueda de películas',
          items: [
            'Navegación y filtrado del catálogo de películas',
            'Página de detalle con información completa de cada título',
            'Búsqueda por título, género y otros criterios',
          ],
        },
        {
          title: 'Sistema de valoraciones y reseñas',
          items: [
            'Puntuación individual de películas por usuario',
            'Publicación, edición y eliminación de reseñas',
            'Cálculo y visualización de la valoración media',
          ],
        },
        {
          title: 'Persistencia con MySQL',
          items: [
            'Diseño de base de datos relacional normalizada',
            'Gestión de entidades y relaciones con JPA/Hibernate',
            'Consultas optimizadas y control de transacciones',
          ],
        },
      ],
    },
    eurodle: {
      name: 'Eurodle',
      duration: '2025 · 3 meses',
      description:
        'Juego de adivinanza de canciones de Eurovisión inspirado en Wordle. Frontend desarrollado en React con datos recopilados y procesados mediante R. Desplegado en Netlify con Docker.',
      modules: [
        {
          title: 'Mecánica de juego estilo Wordle',
          items: [
            'Adivinanza de canciones de Eurovisión en un número limitado de intentos',
            'Sistema de pistas visual por categorías: país, año, género, posición y más',
            'Feedback en tiempo real con código de colores por proximidad de la respuesta',
          ],
        },
        {
          title: 'Recopilación y procesamiento de datos',
          items: [
            'Datos obtenidos de Kaggle y del repositorio público Spijkervet/eurovision-dataset',
            'Procesamiento, limpieza y filtrado de finalistas hasta 2025 mediante scripts en R',
            'Exportación a JSON estructurado para su consumo en el frontend',
          ],
        },
        {
          title: 'Frontend en React',
          items: [
            'Interfaz responsiva construida con componentes reutilizables',
            'Gestión del estado del juego mediante hooks de React',
            'Animaciones de feedback visual en cada intento',
          ],
        },
        {
          title: 'Estilos y diseño visual',
          items: [
            'Diseño responsivo con CSS y Bootstrap',
            'Tematización visual inspirada en la estética de Eurovisión',
            'Adaptación para distintos tamaños de pantalla',
          ],
        },
        {
          title: 'Infraestructura y despliegue',
          items: [
            'Contenedorización con Docker para entorno de desarrollo reproducible',
            'Despliegue continuo en Netlify con configuración de rutas client-side',
          ],
        },
      ],
    },
  },
};
