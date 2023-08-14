import "./App.css";
import Title from "./components/title/Title";
import About from "./components/about/About";
import Navbar from "./components/navbar/Navbar";
import Projects from './components/projects/Projects'
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
          path = "/projects"
          element = { 
            <div> 
              <Projects /> 
              </div> 
          }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
