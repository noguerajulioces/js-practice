import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import * as Localization from 'expo-localization';

import es from './locales/es/translation.json';
import en from './locales/en/translation.json';


const fallbackLng = 'en';
const deviceLanguage = Localization.locale.split('-')[0];

i18n
  .use(initReactI18next)
  .init({
    resources: {
      es: { translation: es },
      en: { translation: en }
    },
    lng: ['en', 'es'].includes(deviceLanguage) ? deviceLanguage : fallbackLng,
    fallbackLng, 
    debug: false,
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
