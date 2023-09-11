// @ts-ignore
import Project from "./ProjTemplate";
import { useTranslation } from "react-i18next";
import Resume from "../../assets/resume.pdf";
import "./Projects.css"
export default function Projects() {
  const { t } = useTranslation();
  return (
    <section className="bg-black dark:bg-gray-900 pt-12 no-scrollbar overflow-y-hidden">
      <div className ="remove-scrollbar"> 
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="max-w-screen-lg text-gray-500 sm:text-lg dark:text-gray-400">
          <h2 className="mb-4 text-4xl tracking-tight font-bold text-gray-900 dark:text-white">
            {t("Project_Title")}{" "}
          </h2>
          <h5 className="py-5">
            {" "}
<<<<<<< HEAD
            {t("Project_Subtitle")}<br /> (´ ∀ ` *)
=======
            {t("Project_Subtitle")} <br /> (´ ∀ ` *)
>>>>>>> e74e0e6 (fixed navbar left movement when going to /projects)
          </h5>

          <div className="flex flex-col space-y-4">
            <Project
              title= {t("ProjectTop_Title")}
              date="April 2023 - June 2023"
              url="https://github.com/andresdanielmtz/Projectile-Kinematic-Simulation-Engine.git"
            >
              <ul className="ps-10 list-disc">
                <li>
                  {" "}
                  Developed an app that stores and displays episode information
                  about various T.V. and Movie shows in a text-based format.{" "}
                </li>
                <li>
                  {" "}
                  Developed mostly in C++, used Typescript and NodeJS for
                  development and testing purposes.{" "}
                </li>
                <li>
                  {" "}
                  Deployed the app as an open-source project by Github and
                  collaborated in teams using Git.{" "}
                </li>
              </ul>
            </Project>
            <Project
              title="Project 1"
              date="August 2022 - September 2023"
              url="https://github.com/andresdanielmtz/Projectile-Kinematic-Simulation-Engine.git"
            >
              This is the description of the project.
            </Project>
            <Project
              title="Project 1"
              date="August 2022 - September 2023"
              url="https://github.com/andresdanielmtz/Projectile-Kinematic-Simulation-Engine.git"
            >
              This is the description of the project.
            </Project>
          </div>
          <p className="py-10">
            {t("ProjectFinal")}
            <a target="_blank" href="https://github.com/andresdanielmtz">
              github
            </a>{" "}
            {t("ProjectFinal2")}{" "}
            <a target="_blank" href={Resume}>
              {" "}
              resume
            </a>
            .{" "}
          </p>
        </div>
      </div>
      </div>
    </section>
  );
}
