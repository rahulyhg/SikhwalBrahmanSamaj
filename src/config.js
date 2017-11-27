export default {
  apiUrl: 'http://yoursite.com/api/',
};
const siteConfig = {
  siteName: 'Sikhwal Brahman Samaj',
  siteIcon: 'ion-flash',
  footerText: 'Sikhwal Brahman Samaj ©2017 Created by RedQ, Inc',
};

const themeConfig = {
  topbar: 'themedefault',
  sidebar: 'themedefault',
  layout: 'themedefault',
  theme: 'themedefault',
};
const language = 'english';
const AlgoliaSearchConfig = {
  appId: '',
  apiKey: '',
};
const Auth0Config = {
  domain: '',
  clientID: '', //
  options: {
    auth: {
      autoParseHash: true,
      redirect: false,
    },
    languageDictionary: {
      title: 'Sikhwal Brahman Samaj',
      emailInputPlaceholder: 'demo@gmail.com',
      passwordInputPlaceholder: 'demodemo',
    },
    icon: '',
    theme: {
      labeledSubmitButton: true,
      logo: 'https://s3.amazonaws.com/redqteam.com/logo/isomorphic.png',
      primaryColor: '#E14615',
      authButtons: {
        connectionName: {
          displayName: 'Log In',
          primaryColor: '#b7b7b7',
          foregroundColor: '#000000',
          icon: undefined,
        },
      },
    },
  },
};
const firebaseConfig = {
  apiKey: "AIzaSyCO6rpM5LsZGmDgUh7WESO0R33roSDMRsU",
  authDomain: "xtrawish-150b4.firebaseapp.com",
  databaseURL: "https://xtrawish-150b4.firebaseio.com",
  projectId: "xtrawish-150b4",
  storageBucket: "xtrawish-150b4.appspot.com",
  messagingSenderId: "615320304061"
};
const googleConfig = {
  apiKey: '', //
};
const mapboxConfig = {
  tileLayer: '',
  maxZoom: '',
  defaultZoom: '',
  center: [],
};
const youtubeSearchApi = '';
export {
  siteConfig,
  themeConfig,
  language,
  AlgoliaSearchConfig,
  Auth0Config,
  firebaseConfig,
  googleConfig,
  mapboxConfig,
  youtubeSearchApi,
};
