import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";
import React from "react";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        "Welcome to React": "This is epic",
      },
    },
  },
  lng: "en", // if you're using a language detector, do not define the lng option
  fallbacking: "en",
  interpolation: {
    escapeValue: false,
  },
});
export default function example() {
  const { t } = useTranslation();
  return (
    <div>
      <h1> {t('Welcome to React')} </h1>
      <button> Thing </button>
    </div>
  );
}
