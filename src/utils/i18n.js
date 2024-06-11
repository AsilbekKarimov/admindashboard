import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import english from 'src/utils/languages/en.json';
import russian from 'src/utils/languages/ru.json';
import uzbek from 'src/utils/languages/uz.json';

const resources = {
  en: {
    translation: english,
  },
  ru: {
    translation: russian,
  },
  uz: {
    translation: uzbek,
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'ru', // язык по умолчанию
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
