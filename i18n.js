import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import * as Localization from 'expo-localization';

import AsyncStorage from '@react-native-async-storage/async-storage';

import es from './locales/es/translation.json';
import en from './locales/en/translation.json';


const fallbackLng = 'en';
const deviceLanguage = Localization.locale.split('-')[0];

(async () => {
  const savedLanguage = await AsyncStorage.getItem('language');
  const defaultLanguage = savedLanguage || fallbackLng;

  i18n
    .use(initReactI18next)
    .init({
      resources: {
        es: { translation: es },
        en: { translation: en },
      },
      lng: defaultLanguage,
      fallbackLng: deviceLanguage || fallbackLng,
      debug: false,
      interpolation: {
        escapeValue: false,
      },
    });
})();

export default i18n;
