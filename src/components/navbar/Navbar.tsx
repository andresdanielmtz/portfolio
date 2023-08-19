import { Link } from "react-router-dom";
import { useState } from "react";
import { ToggleLanguage } from "./ToggleLang";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div>
      <nav className="bg-black dark:bg-black bg-opacity-100 dark:bg-opacity-100 flex items-center fixed w-full z-20 top-0 left-0">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          {/* ... */}
          <div className="flex md:order-2">
            <button
              onClick={toggleMobileMenu}
              data-collapse-toggle="navbar-sticky"
              type="button"
              className="md:hidden inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg hover:bg-black focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-sticky"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5 md:hidden"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
            <ToggleLanguage></ToggleLanguage>
          </div>
          {/* ... */}
          <div
            className={`items-center justify-between ${
              isMobileMenuOpen ? "flex" : "hidden"
            } w-full md:flex md:w-auto md:order-1`}
            id="navbar-sticky"
          >
            <ul style={{ backgroundColor: "rgba(7, 7, 7, 1)" }} className="bg-black md:order-2 opacity-100 md:bg-opacity-100 md:bg-black md:bg-slate-900 flex flex-col p-4 md:p-0 mt-4 font-medium bg-opacity-100 dark:bg-opacity-100 border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-black dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <Link to="/" onClick={toggleMobileMenu}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" onClick={toggleMobileMenu}>
                  About
                </Link>
              </li>
              <li>
                <Link to="/projects" onClick={toggleMobileMenu}>
                  Project
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className={`py-${20}`}> </div>
    </div>
  );
}
