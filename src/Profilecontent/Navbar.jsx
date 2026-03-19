function Navbar({ setActive, active }) {
    return (
      <nav className="navbar fade-in">
        <button
          className={active === "home" ? "active-tab" : ""}
          onClick={() => setActive("home")}
        >
          Home
        </button>
        <button
          className={active === "skills" ? "active-tab" : ""}
          onClick={() => setActive("skills")}
        >
          Skills
        </button>
        <button
          className={active === "projects" ? "active-tab" : ""}
          onClick={() => setActive("projects")}
        >
          Projects
        </button>
        <button
          className={active === "reflection" ? "active-tab" : ""}
          onClick={() => setActive("reflection")}
        >
          Reflection
        </button>
      </nav>
    );
  }
  
  export default Navbar;