const ABOUT = '/'
const LOGIN = '/login'
const CV = '/cv'
const BLOG = '/blog'
const MUSIQUE = '/musique'
const CONTACT = '/#contact'
const IMPRINT = '/imprint'

export const SHORTCUTS = [
  { name: 'About', url: ABOUT },
  { name: 'Blog', url: BLOG },
  { name: 'Cv', url: CV },
  { name: 'Musique', url: MUSIQUE },
  { name: 'Contact', url: CONTACT },
  { name: 'Imprint', url: IMPRINT },
  { name: 'Login', url: LOGIN }
];

export const ROUTES = {
  login: LOGIN,
  blog: BLOG,
  cv: CV,
  musique: MUSIQUE,
  contact: CONTACT,
  about: ABOUT,
  imprint: IMPRINT
}