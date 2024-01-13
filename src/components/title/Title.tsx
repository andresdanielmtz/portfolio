import "./Title.css";
import Background from "./Background";
import Icons from "./Icons";
import { useTranslation } from "react-i18next";




export default function Title() {
  const { t } = useTranslation();
  return (
    <>
      <div id="title" className="flex items-center justify-center h-screen">
        <div id="title-content" className="text-center">
          <div className="flex flex-col items-center">
            <h4 className="text-2xl font-bold dark:text-white">
              {t("Title")}
            </h4>
            <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
              Andrés Martínez
            </h1>
            <p className="mb-1 text-base font-normal text-gray-200 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
              {t("Grade")} @ ITESM
            </p>
          </div>
          <Icons />
        </div>
        <div id="title-bg">
          <Background />
        </div>
      </div>
    </>
  );
}
