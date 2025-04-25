import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';

// Translations resources (English only)
const resources = {
  en: {
    translation: {
      "Contact Us": "Contact Us",
      "Email": "Email",
      "Phone": "Phone",
      "Address": "Address",
      "If you have any questions or suggestions, feel free to contact us in any convenient way": 
        "If you have any questions or suggestions, feel free to contact us in any convenient way",
      "75 Park Avenue, Suite 1200": "75 Park Avenue, Suite 1200",
      "New York, NY 10016": "New York, NY 10016"
    }
  }
};

i18n
  // load translation using http (can be also setup to load from a file or database)
  .use(Backend)
  // detect user language
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next
  .use(initReactI18next)
  // init i18next
  .init({
    resources,
    lng: 'en', // Force English language
    fallbackLng: 'en',
    debug: process.env.NODE_ENV === 'development',
    
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
    }
  });

export default i18n; 