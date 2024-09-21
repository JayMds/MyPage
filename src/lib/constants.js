const ABOUT = '/'
const LOGIN = '/login'
const CV = '/cv'
const BLOG = '/blog'
const MUSIQUE = '/musique'
const CONTACT = '/#contact'
const IMPRINT = '/imprint'
const REALISATIONS = '/realisations'

export const SHORTCUTS = [
  { name: 'About', url: ABOUT },
  { name: 'Blog', url: BLOG },
  { name: 'Cv', url: CV },
  { name: 'Musique', url: MUSIQUE },
  { name: 'Contact', url: CONTACT },
  { name: 'Imprint', url: IMPRINT },
  { name: 'Login', url: LOGIN },
  { name: 'Realisations', url: REALISATIONS }
];

export const ROUTES = {
  login: LOGIN,
  blog: BLOG,
  cv: CV,
  musique: MUSIQUE,
  contact: CONTACT,
  about: ABOUT,
  imprint: IMPRINT,
  realisations: REALISATIONS
}

export const OWNER_DATA = {
  nom: 'Mendes Da Veiga',
  prenom: 'Jean Claude',
  mail: 'jean-mendes@live.fr',
  tel: '0612993487',
  git: 'https://github.com/JayMds',
  linkedin: 'https://www.linkedin.com/in/jean-claudemds',
  cvjobs: `
 Au sein d'une équipe pluridisciplinaire composée d'un DBA,
 d'un CTO et de développeurs Delphi, j'ai participé à
 plusieurs projets clients et internes dans le secteur de la
 mutuelle santé. Mes missions incluent :<br>
 - Conception et développement : Création d'une
 application de prise de rendez-vous (physiques et en
 visioconférence) basée sur Jitsi et FullCalendar.js, avec
 une stack PHP, HTML, Bootstrap CSS et Ajax.<br>
 - Développement d'applications : Conception de tunnels
 de souscription en ligne, incluant des fonctionnalités de
 devis et d'adhésion, basés sur SvelteKit (front-end) et
 Slim4 (Web Services), et intégrant la solution Yousign.<br>
 - API et sécurité : Développement d'API en PHP avec une
 attention particulière portée à la cybersécurité, basées
 sur le framework Slim4.<br>
 - Fonctionnalités et maintenance : Développement de
 nouvelles fonctionnalités et maintenance continue pour
 les applications d'Espaces Adhérents, Courtiers et
 Professionnels Résolution de tickets clients (+131 tickets
 résolus).<br>
 - Automatisation et CI/CD : Mise en place de tests
 unitaires, end-to-end et HTTP automatisés, ainsi que
 des scripts CI/CD pour le build et la livraison.<br>
 - Analyse de données : Production de templates Power
 BI, scripts CRON, requêtes SQL et statistiques pour le
 reporting et l’analyse de données.<br>
 Mise en place d’un backend Supabase auto-hébergé via
 des containers Docker`
}

