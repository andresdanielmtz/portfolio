import { useTranslation } from "react-i18next";
import PropTypes from "prop-types";

interface ProjectProps {
  title: string;
  date: string;
  url: string;
  children: React.ReactNode;
}

const Project: React.FC<ProjectProps> = (props) => {
  Project.propTypes = {
    title: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
  };

  const { t } = useTranslation();

  return (
    <div className="w-full md:w-100 bg-black bg-opacity-25 border border-gray p-4">
      <div className="text-sm text-right text-gray-500 sm:text-sm italic">
        {props.date}
      </div>
      <h2 className="text-2xl font-bold">{props.title}</h2>

      <p className="text-small">{props.children}</p>

      <a
        className="font-medium text-primary-600 hover:text-primary-800 dark:text-primary-500 dark:hover:text-primary-700"
        href={props.url}
        target="_blank"
        rel="noopener noreferrer"
      >
        {t("ProjectLink")}
      </a>
    </div>
  );
};

export default Project;
