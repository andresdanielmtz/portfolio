import "./About.css"
import Resume from "../../assets/resume.pdf"

const About = () => {
  return (
    <section id = "About" className="bg-white dark:bg-gray-900 pt-12">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="max-w-screen-lg text-gray-500 sm:text-lg dark:text-gray-400">
          <h2 className="mb-4 text-4xl tracking-tight font-bold text-gray-900 dark:text-white">
            About Me{" "}
          </h2>
          <p className="mb-4 font-light">
            Hello! I am Andrés Martínez, a Sophomore CS Student @ ITESM. 

            Based in Hermosillo, Sonora, I've been able to learn and develop my skills in various areas such as Web Development, Mobile Development and Systems Engineering. As well as working with different UNIX-based systems like Ubuntu, Mint and Debian, among others.
          </p>
          <p className="mb-4 font-medium">
            I am currently open to work and looking for an internship. If you
            are interested in working with me, please contact me at{" "}
            <a
              href="mailto:autummata@gmail.com
            "
              className="text-primary-600 hover:text-primary-800 dark:text-primary-500 dark:hover:text-primary-700"
            >
              this email
            </a>
            . 
          </p>
          <a
            href={Resume}
            target = "_blank"
            className="inline-flex items-center font-medium text-primary-600 hover:text-primary-800 dark:text-primary-500 dark:hover:text-primary-700"
          >
            Resume
            <svg
              className="ml-1 w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
