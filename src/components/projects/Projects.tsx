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
                title={t("Project_MedicalLab")}
                date="June 2023 - July 2023"
                url="https://github.com/andresdanielmtz/laboratorios-Obregon"
              >
                <ul className="ps-10 list-disc">
                  <li> {t("Project_MedicalLab_First")}</li>
                  <li> {t("Project_MedicalLab_Second")}</li>
                  <li> {t("Project_MedicalLab_Third")}</li>
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

              <Project
                title={t("Project_DataAnalysis")}
                date="March 2023 - April 2023"
                url="https://github.com/andresdanielmtz/virus-analysis-toolkit"
              >
                <ul className="ps-10 list-disc">
                  <li> {t("Project_DataAnalysis_First")}</li>
                  <li> {t("Project_DataAnalysis_Second")}</li>
                  <li> {t("Project_DataAnalysis_Third")}</li>
                </ul>
              </Project>

              <Project
                title={t("Project_SpaceApp")}
                date="January 2023 - March 2023"
                url="https://github.com/andresdanielmtz/The-Webb-Interactive-Project-">
                <ul className="ps-10 list-disc">
                  <li> {t("Project_SpaceApp_First")}</li>
                  <li> {t("Project_SpaceApp_Second")}</li>
                  <li> {t("Project_SpaceApp_Third")}</li>
                </ul>
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
