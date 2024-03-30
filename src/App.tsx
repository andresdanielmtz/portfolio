import "./App.css";
import Title from "./components/title/Title";
import About from "./components/about/About";
import Navbar from "./components/navbar/Navbar";
import Projects from "./components/projects/Projects";
import Blog from "./components/blog/Blog";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <Title />
              </div>
            }
          />
          <Route
            path="/about"
            element={
              <div>
                <About />
              </div>
            }
          />
          <Route
            path="/projects"
            element={
              <div className="overflow-y-scroll no-scrollbar">
                <Projects />
              </div>
            }
          />
          <Route path="/blog" element={<Blog></Blog>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
