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
      Title: "Nice to meet you, I am",
      Grade: "Sophomore CS Student",
      ProjectLink: "Link to the project", 
      ProjectFinal: "To see the rest of my projects, visit my ",
      ProjectFinal2: "page or check out my ",
      Project_Title: "Projects", 
      Project_Subtitle: "Some of the works I've done...",
      ProjectTop_Title: "Video Streaming App", 
      ProjectTop_First: "Developed an app that stores and displays episode information about various T.V. and Movie shows in a text-based format.",
      ProjectTop_Second: "The app is developed in C++, Typescript and NodeJS were used for testing and development purposes.",
      ProjectTop_Third: "The app was uploaded to Github as a public and open-source repository, as well as collaborated on using Git.",

      Project_MedicalLab: "Medical Laboratory Website",
      Project_MedicalLab_First: "Developed a website for Laboratorios Obregon, a big medical laboratory focused on research and healthcare.",
      Project_MedicalLab_Second: "The website shows the current position of the laboratory by a virtual map by using an open-source map API.",
      Project_MedicalLab_Third: "Served as a way of learning about APIs, Vite, and overall Fullstack development.",

      Project_DataAnalysis: "Data Analysis Toolkit", 
      Project_DataAnalysis_First: "Collaborated in pairs, to develop a series of tools that can help analyse and identify different types of virus genome based on their DNA.",
      Project_DataAnalysis_Second: "This toolkit was completely developed in the R Language and R Studio environment.",
      Project_DataAnalysis_Third: "Served as an introduction of Biology in the Computer Science field and how these two interact with each other.",

      Project_SpaceApp: "The Webb Interactive Project",
      Project_SpaceApp_First: "Collaborated with a team to create a videogame and a quiz website that showed the capabilities of the James Webb Space Telescope.",
      Project_SpaceApp_Second: "Used as an entrance to the NASA Space App Challenge in-campus competition.",
      Project_SpaceApp_Third: "Served as an introduction to Hackathon events as well as practice for communication of technical terms. It was developed in Pygame using Python 3.8.",


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
      Title: "Mucho gusto, mi nombre es",
      Grade:
        "Estudiante de segundo año en Ingeniería en Tecnologías Computacionales",
      ProjectLink: "Link al proyecto", 
      ProjectFinal: "Para ver el resto de mis proyectos, visita mi página de ",
      ProjectFinal2: "ó checa mí",
      Project_Title: "Proyectos",
      Project_Subtitle: "Algunos de los trabajos que he hecho...",
      ProjectTop_Title: "Aplicación de Streaming de Video",
      ProjectTop_First : "Desarrollé una aplicación que guarda y muestra información sobre diferentes episodios de diferentes películas y series de televisión en un formato de texto.", 
      ProjectTop_Second: "La aplicación está desarrollada en C++, se usó Typescript y NodeJS para propósitos de testing y desarrollo.", 
      ProjectTop_Third: "La aplicación fue subida a Github como un repositorio público y de código abierto, así como se colaboró en el utilizando Git.",
      Project_MedicalLab: "Sitio Web de Laboratorio Médico",
      Project_MedicalLab_First: "Desarrollé un sitio web para Laboratorios Obregón, una empresa de laboratorios médicos en Cananea, Sonora. Enfocado en investigaciones y salud pública.",
      Project_MedicalLab_Second: "El sitio web muestra la localidad de los laboratorios, así como los servicios que ofrecen y los precios de los mismos.",
      Project_MedicalLab_Third: "Sirvió como una manera de aprender acerca de APIs, Vite y en general Desarrollo Fullstack.",

      Project_DataAnalysis: "Herramienta de Análisis de Datos",
      Project_DataAnalysis_First: "Colaboré en parejas, para desarrollar una serie de herramientas que pueden ayudar a analizar e identificar diferentes tipos de genomas de virus basados en su ADN.",
      Project_DataAnalysis_Second: "Esta herramienta fue completamente desarrollada en el lenguaje R y en el entorno de R Studio.",
      Project_DataAnalysis_Third: "Sirvió como una introducción de Biología en el campo de la Ciencia de la Computación y cómo estos dos interactúan entre sí.",

      Project_SpaceApp: "El Proyecto Interactivo Webb",
      Project_SpaceApp_First: "Colaboré con un equipo para crear un videojuego y un sitio web de preguntas que mostraba las capacidades del Telescopio Espacial James Webb.",
      Project_SpaceApp_Second: "Utilizado como una entrada a la competencia de la NASA Space App Challenge en el campus.",
      Project_SpaceApp_Third: "Sirvió como una introducción a los eventos de Hackathon, así como una práctica para la comunicación de términos técnicos. Fue desarrollado en Pygame usando Python 3.8.",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
});

export default i18n;
