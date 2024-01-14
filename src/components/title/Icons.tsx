import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function Icons() {
  return (
    <div className="flex items-center justify-center mt-3">
      {/* GitHub icon */}
      <a
        href="https://github.com/andresdanielmtz"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-blue-200 mx-2"
      >
        <FontAwesomeIcon icon={faGithub} size="2x" />
      </a>

      {/* LinkedIn icon */}
      <a
        href="https://www.linkedin.com/in/andresdanielmtz/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 dark:text-blue-300 hover:text-blue-700 dark:hover:text-blue-200 mx-2"
      >
        <FontAwesomeIcon icon={faLinkedin} size="2x" />
      </a>
    </div>
  );
}
