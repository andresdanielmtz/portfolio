import "./Title.css";
import Background from "./Background";
import Icons from "./Icons";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";

interface GithubData {
  avatar_url: string;
}

export default function Title() {
  const { t } = useTranslation();
  const [githubData, setGithubData] = useState<GithubData | null>(null);
  const [githubUser, setGithubUser] = useState<string>("andresdanielmtz");

  const fetchData = () => {
    return fetch(`https://api.github.com/users/${githubUser}`)
      .then((response) => response.json())
      .then((data: GithubData) => setGithubData(data))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div id="title" className="flex items-center justify-center h-screen">
        <div id="title-content" className="text-center">
          <div className="flex flex-col items-center">
            {githubData && (
              <img
                src={githubData.avatar_url}
                alt="GitHub Avatar"
                height="100"
                width="100"
                id="gh_av"
              />
            )}
            <h4 className="text-2xl font-bold dark:text-white">{t("Title")}</h4>
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
