import "./Title.css";
import Background from "./Background";
export default function Title() {
  return (
    <div id="title" className="flex items-center justify-center h-screen">
      <div id="title-content" className="text-center">
        <div className="flex flex-col items-center">
          <h4 className="text-2xl font-bold dark:text-white">
            Nice to meet you, I am
          </h4>
          <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
            Andrés Martínez
          </h1>
          <p className="mb-1 text-base font-normal text-gray-200 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
            Sophomore CS Student @ ITESM
          </p>
        </div>
      </div>
      <div id="title-bg">
        <Background />
      </div>
    </div>
  );
}
