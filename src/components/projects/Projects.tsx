// @ts-ignore
import Project from "./ProjTemplate";
import { useTranslation } from "react-i18next";
import Resume from "../../assets/resume.pdf";
import "./Projects.css";
export default function Projects() {
  const { t } = useTranslation();
  return (
    <section className="bg-black dark:bg-gray-900 pt-12 no-scrollbar overflow-y-hidden">
      <div className="remove-scrollbar">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div className="max-w-screen-lg text-gray-500 sm:text-lg dark:text-gray-400">
            <h2 className="mb-4 text-4xl tracking-tight font-bold text-gray-900 dark:text-white">
              {t("Project_Title")}{" "}
            </h2>
            <h5 className="py-5">
              {" "}
              {t("Project_Subtitle")}
              <br /> (´ ∀ ` *)
            </h5>

            <div className="flex flex-col space-y-4">
              <Project
                title={t("Project_Seatrack")}
                date="January 2021 - May 2021"
                url=""
              >
                <ul className="ps-10 list-disc">
                  <li> {t("Project_Seatrack_First")}</li>
                  <li> {t("Project_Seatrack_Second")}</li>
                  <li> {t("Project_Seatrack_Third")}</li>
                </ul>
              </Project>

              <Project title={t("Project_BazApp")} date="October 2023" url="">
                <ul className="ps-10 list-disc">
                  <li> {t("Project_BazApp_First")}</li>
                  <li> {t("Project_BazApp_Second")}</li>
                  <li> {t("Project_BazApp_Third")}</li>
                </ul>
              </Project>

              <Project
                title={t("Project_SpaceSymphony")}
                date="January 2021 - May 2021"
                url=""
              >
                <ul className="ps-10 list-disc">
                  <li> {t("Project_SpaceSymphony_First")}</li>
                  <li> {t("Project_SpaceSymphony_Second")}</li>
                  <li> {t("Project_SpaceSymphony_Third")}</li>
                </ul>
              </Project>
              <Project
                title={t("ProjectTop_Title")}
                date="April 2023 - June 2023"
                url="https://github.com/andresdanielmtz/TC1030"
              >
                <ul className="ps-10 list-disc">
                  <li> {t("ProjectTop_First")}</li>
                  <li> {t("ProjectTop_Second")}</li>
                  <li> {t("ProjectTop_Third")}</li>
                </ul>
              </Project>
            </div>
            <p className="py-10">
              {t("ProjectFinal")}
              <a target="_blank" href="https://github.com/andresdanielmtz">
                Github
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
