import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import * as Localization from 'expo-localization';

import AsyncStorage from '@react-native-async-storage/async-storage';

import es from './locales/es/translation.json';
import en from './locales/en/translation.json';
import fr from './locales/fr/translation.json';
import ja from '@/locales/ja/translation.json';
import ru from '@/locales/ru/translation.json';
import it from '@/locales/it/translation.json';
import de from '@/locales/de/translation.json';
import hi from '@/locales/hi/translation.json';
import zh from '@/locales/zh/translation.json';
import pt from '@/locales/pt/translation.json';

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
        fr: { translation: fr },
        ja: { translation: ja },
        ru: { translation: ru },
        it: { translation: it },
        de: { translation: de },
        hi: { translation: hi },
        zh: { translation: zh },
        pt: { translation: pt }
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
