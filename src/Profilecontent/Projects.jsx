import { useState } from "react";

function Projects() {
  const projects = [
    {
      title: "Barangay Profiling System",
      description: "Manages residents and announcements.",
      role: "Developer",
      tech: "PHP, MySQL",
    },
    {
      title: "Bus Tracking System",
      description: "Real-time bus location tracker.",
      role: "Developer",
      tech: "JavaScript, Google Maps API",
    },
    {
      title: "Food Ordering App",
      description: "Order food online with delivery tracking.",
      role: "Designer & Developer",
      tech: "React.js, CSS, Firebase",
    },
    {
      title: "Study Portal",
      description: "Online platform for students and teachers.",
      role: "Developer",
      tech: "HTML, CSS, PHP, MySQL",
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const nextProject = () => {
    setActiveIndex((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setActiveIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <section className="card projects-section">
      <h2>Projects 🚀</h2>

      <div className="carousel-container">
        {projects.map((proj, index) => {
          const isActive = index === activeIndex;
          const offset = index - activeIndex;

          return (
            <div
              key={index}
              className={`project-card ${isActive ? "active" : ""}`}
              style={{
                transform: `translateX(${offset * 40}px) translateZ(${-Math.abs(offset) * 20}px)`,
                zIndex: projects.length - Math.abs(offset)
              }}
            >
              <div className="project-info">
                <h3>{proj.title}</h3>
                <p>{proj.description}</p>
                <p><b>Role:</b> {proj.role}</p>
                <p><b>Technologies:</b> {proj.tech}</p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="carousel-buttons">
        <button onClick={prevProject}>◀ Previous</button>
        <button onClick={nextProject}>Next ▶</button>
      </div>
    </section>
  );
}

export default Projects;