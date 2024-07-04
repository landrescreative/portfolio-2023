import i18next from "i18next";
import Backend from "i18next-http-backend";
import { initReactI18next } from "react-i18next";
import en from "../locales/en/global.json";
import es from "../locales/es/global.json";
import detector from "i18next-browser-languagedetector";

i18next
  .use(detector)
  .use(initReactI18next)
  .init({
    detection: {
      order: ["path", "navigator"],
      lookupQuerystring: "lng",
    },
    fallbackLng: "en",
    debug: true,
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: {
        translation: en,
      },
      es: {
        translation: es,
      },
    },
  });
