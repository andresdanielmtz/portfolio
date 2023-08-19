// @ts-ignore
import Project from "./ProjTemplate";

export default function Projects() {
  return (
    <section className="bg-black dark:bg-gray-900 pt-12">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="max-w-screen-lg text-gray-500 sm:text-lg dark:text-gray-400">
          <h2 className="mb-4 text-4xl tracking-tight font-bold text-gray-900 dark:text-white">
            Projects{" "}
          </h2>
          <h5 className="py-5">
            {" "}
            Some of the works I've done... <br /> (´ ∀ ` *)
          </h5>

          <div className="flex flex-col space-y-4">
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
            <Project
              title="Project 1"
              date="August 2022 - September 2023"
              url="https://github.com/andresdanielmtz/Projectile-Kinematic-Simulation-Engine.git"
            >
              This is the description of the project.
            </Project>
          </div>
        </div>
      </div>
    </section>
  );
}
