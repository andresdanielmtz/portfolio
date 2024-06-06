import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      About: "About Me",
      Hello: "Hello! I am Andrés Martínez, a Second-Year CS Student @ ITESM.",
      Location:
        "Based in Hermosillo, Sonora, I've been able to learn and develop my skills in various areas such as Web Development, Mobile Development and Systems Engineering. As well as working with different UNIX-based systems like Ubuntu, Mint and Debian, among others.",
      // ... Other translations ...
      Currently:
        "I am currently open to work and looking for an internship. If you are interested in working with me, please contact me at",
      Email: "this email",
      Title: "Nice to meet you, I am",
      Grade: "Second-Year CS Student",
      ProjectLink: "Link to the project",
      ProjectFinal: "To see the rest of my projects, visit my ",
      ProjectFinal2: "page or check out my ",
      Project_Title: "Projects",
      Project_Subtitle: "Some of the works I've done...",
      ProjectTop_Title: "Video Streaming App",
      ProjectTop_First:
        "Developed an app that stores and displays episode information about various T.V. and Movie shows in a text-based format.",
      ProjectTop_Second:
        "The app is developed in C++, Typescript and NodeJS were used for testing and development purposes.",
      ProjectTop_Third:
        "The app was uploaded to Github as a public and open-source repository, as well as collaborated on using Git.",

      Project_MedicalLab: "Medical Laboratory Website",
      Project_MedicalLab_First:
        "Developed a website for Laboratorios Obregon, a big medical laboratory focused on research and healthcare.",
      Project_MedicalLab_Second:
        "The website shows the current position of the laboratory by a virtual map by using an open-source map API.",
      Project_MedicalLab_Third:
        "Served as a way of learning about APIs, Vite, and overall Fullstack development.",

      Project_DataAnalysis: "Data Analysis Toolkit",
      Project_DataAnalysis_First:
        "Collaborated in pairs, to develop a series of tools that can help analyse and identify different types of virus genome based on their DNA.",
      Project_DataAnalysis_Second:
        "This toolkit was completely developed in the R Language and R Studio environment.",
      Project_DataAnalysis_Third:
        "Served as an introduction of Biology in the Computer Science field and how these two interact with each other.",

      Project_SpaceApp: "The Webb Interactive Project",
      Project_SpaceApp_First:
        "Collaborated with a team to create a videogame and a quiz website that showed the capabilities of the James Webb Space Telescope.",
      Project_SpaceApp_Second:
        "Used as an entrance to the NASA Space App Challenge in-campus competition.",
      Project_SpaceApp_Third:
        "Served as an introduction to Hackathon events as well as practice for communication of technical terms. It was developed in Pygame using Python 3.8.",

      Project_Seatrack: "Seatrack",
      Project_Seatrack_First:
        "Developed a web application focused on tracking Marine Debris in real time on a global scale.",
      Project_Seatrack_Second:
        "Used in React, employed Flask and SQLite to store and retrieve data for authentication and visualization purposes. Used OpenLayers to graphically show data in real time.",
      Project_Seatrack_Third:
        "Deployed in Amazon Web Services, using Nginx and Gunicorn. Acted as a means of integrating statistical analysis in a real-world scenario.",

      Project_BazApp: "BazApp",
      Project_BazApp_First:
        "Developed a mobile application that allows users to find and buy products from different local stores.",
      Project_BazApp_Second:
        "Used React Native, Firebase and Google Maps to develop the application.",
      Project_BazApp_Third:
        "Served as a way of learning about Mobile development through React Native as well as learning about Databases and API fundamentals.",

      Project_SpaceSymphony: "Space Symphony",
      Project_SpaceSymphony_First:
        "Developed an interactive webapp that analyzes NASA’s Space Videos and designs and creates melodies based on its different components and elements.",
      Project_SpaceSymphony_Second:
        "Deployed in Netlify. Served as a way of comprehending new ways of implementing accesibility and combining technical with artistical skills in a fast-paced environment",
      Project_SpaceSymphony_Third:
        "Served as a way of learning about Game Development through Unity and C#.",
    },
  },
  es: {
    translation: {
      About: "Sobre Mí",
      Hello:
        "¡Hola! Soy Andrés Martínez, un estudiante de segundo año de CS @ ITESM.",
      Location:
        "Actualmente viviendo en Hermosillo, Sonora, he podido aprender y desarrollar mis habilidades en varias áreas como Desarrollo Web, Desarrollo Móvil e Ingeniería de Sistemas. Así como trabajar con diferentes sistemas basados en UNIX como Ubuntu, Mint y Debian, entre otros.",
      Currently:
        "Ahora mismo estoy abierto a trabajar y estoy buscado una internship. Así que si estás interesado en trabajar conmigo, por favor contáctame en",
      Email: "este correo",
      Title: "Mucho gusto, mi nombre es",
      Grade:
        "Estudiante de segundo año en Ingeniería en Tecnologías Computacionales",
      ProjectLink: "Link al proyecto",
      ProjectFinal: "Para ver el resto de mis proyectos, visita mi página de ",
      ProjectFinal2: "ó checa mí",
      Project_Title: "Proyectos",
      Project_Subtitle: "Algunos de los trabajos que he hecho...",
      ProjectTop_Title: "Aplicación de Streaming de Video",
      ProjectTop_First:
        "Desarrollé una aplicación que guarda y muestra información sobre diferentes episodios de diferentes películas y series de televisión en un formato de texto.",
      ProjectTop_Second:
        "La aplicación está desarrollada en C++, se usó Typescript y NodeJS para propósitos de testing y desarrollo.",
      ProjectTop_Third:
        "La aplicación fue subida a Github como un repositorio público y de código abierto, así como se colaboró en el utilizando Git.",
      Project_MedicalLab: "Sitio Web de Laboratorio Médico",
      Project_MedicalLab_First:
        "Desarrollé un sitio web para Laboratorios Obregón, una empresa de laboratorios médicos en Cananea, Sonora. Enfocado en investigaciones y salud pública.",
      Project_MedicalLab_Second:
        "El sitio web muestra la localidad de los laboratorios, así como los servicios que ofrecen y los precios de los mismos.",
      Project_MedicalLab_Third:
        "Sirvió como una manera de aprender acerca de APIs, Vite y en general Desarrollo Fullstack.",

      Project_DataAnalysis: "Herramienta de Análisis de Datos",
      Project_DataAnalysis_First:
        "Colaboré en parejas, para desarrollar una serie de herramientas que pueden ayudar a analizar e identificar diferentes tipos de genomas de virus basados en su ADN.",
      Project_DataAnalysis_Second:
        "Esta herramienta fue completamente desarrollada en el lenguaje R y en el entorno de R Studio.",
      Project_DataAnalysis_Third:
        "Sirvió como una introducción de Biología en el campo de la Ciencia de la Computación y cómo estos dos interactúan entre sí.",

      Project_SpaceApp: "El Proyecto Interactivo Webb",
      Project_SpaceApp_First:
        "Colaboré con un equipo para crear un videojuego y un sitio web de preguntas que mostraba las capacidades del Telescopio Espacial James Webb.",
      Project_SpaceApp_Second:
        "Utilizado como una entrada a la competencia de la NASA Space App Challenge en el campus.",
      Project_SpaceApp_Third:
        "Sirvió como una introducción a los eventos de Hackathon, así como una práctica para la comunicación de términos técnicos. Fue desarrollado en Pygame usando Python 3.8.",

      Project_Seatrack: "Seatrack",
      Project_Seatrack_First:
        "Desarrollé una aplicación web enfocada en rastrear la basura marina en tiempo real a nivel global.",
      Project_Seatrack_Second:
        "Se utilizó React, Flask y SQLite para almacenar y recuperar datos para fines de autenticación y visualización. También se utilizó OpenLayers para mostrar gráficamente datos en tiempo real.",
      Project_Seatrack_Third:
        "Implementado en Amazon Web Services, utilizando Nginx y Gunicorn. Actuó como un medio para integrar el análisis estadístico en un escenario del mundo real.",

      Project_BazApp: "BazApp",
      Project_BazApp_First:
        "Desarrollé una aplicación móvil que permite a los usuarios encontrar y comprar productos de diferentes tiendas locales.",
      Project_BazApp_Second:
        "Se utilizó React Native, Firebase y Google Maps para desarrollar la aplicación.",
      Project_BazApp_Third:
        "Sirvió como una forma de aprender sobre el desarrollo móvil a través de React Native, así como aprender sobre los fundamentos de las bases de datos y las API.",

      Project_SpaceSymphony: "Space Symphony",
      Project_SpaceSymphony_First:
        "Desarrollé una aplicación web interactiva que analiza los videos espaciales de la NASA y diseña y crea melodías basadas en sus diferentes componentes y elementos.",
      Project_SpaceSymphony_Second:
        "Implementado en Netlify. Sirvió como una forma de comprender nuevas formas de implementar la accesibilidad y combinar habilidades técnicas con artísticas en un entorno de ritmo rápido.",
      Project_SpaceSymphony_Third:
        "Sirvió como una forma de aprender sobre el desarrollo de juegos a través de Unity y C#.",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
});

export default i18n;
