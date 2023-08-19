import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      About: "About Me",
      Hello: "Hello! I am Andrés Martínez, a Sophomore CS Student @ ITESM.",
      Location:
        "Based in Hermosillo, Sonora, I've been able to learn and develop my skills in various areas such as Web Development, Mobile Development and Systems Engineering. As well as working with different UNIX-based systems like Ubuntu, Mint and Debian, among others.",
      // ... Other translations ...
      Currently:
        "I am currently open to work and looking for an internship. If you are interested in working with me, please contact me at",
      Email: "this email",
    },
  },
  es: {
    translation: {
      About: "Sobre Mí",
      Hello:
        "¡Hola! Soy Andrés Martínez, un estudiante de segundo año de CS @ ITESM.",
      Location:
        "Basado en Hermosillo, Sonora, he podido aprender y desarrollar mis habilidades en varias áreas como Desarrollo Web, Desarrollo Móvil e Ingeniería de Sistemas. Así como trabajar con diferentes sistemas basados en UNIX como Ubuntu, Mint y Debian, entre otros.",
      Currently:
        "Ahora mismo estoy abierto a trabajar y estoy buscado una internship. Así que si estás interesado en trabajar conmigo, por favor contáctame en",
      Email: "este correo",
      // ... Other translations ...
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
});

export default i18n;
