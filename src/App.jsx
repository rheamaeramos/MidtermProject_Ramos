import { useState } from "react";
import Frontpage from "./Profilecontent/Frontpage";
import Navbar from "./Profilecontent/Navbar";
import Home from "./Profilecontent/Home";
import Skills from "./Profilecontent/Skills";
import Projects from "./Profilecontent/Projects";
import Reflection from "./Profilecontent/Reflection";
import "./App.css";

function App() {
  const [started, setStarted] = useState(false);
  const [activeSection, setActiveSection] = useState("home"); // default Home

  return (
    <div>
      {/* FRONT PAGE */}
      {!started && <Frontpage onStart={() => setStarted(true)} />}

      {/* PORTFOLIO PAGE */}
      {started && (
        <div>
          {/* Navbar with handler */}
          <Navbar setActive={setActiveSection} active={activeSection} />

          {/* Only render active section */}
          <div className="section-container">
            {activeSection === "home" && <Home />}
            {activeSection === "skills" && <Skills />}
            {activeSection === "projects" && <Projects />}
            {activeSection === "reflection" && <Reflection />}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;