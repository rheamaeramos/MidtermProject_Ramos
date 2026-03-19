import profile from "../assets/profile.jpg";

function Home() {
  return (
    <div className="home-card">
      {/* Title */}
      <h2>Home / About Me</h2>

      {/* Photo and Name */}
      <div className="profile-section">
        <img src={profile} alt="Rhea Mae" className="profile-img" />
        <h1>Rhea Mae Noble Ramos</h1>
      </div>

      {/* Personal Introduction */}
      <p className="intro">
        Hi! I'm motivated by a profound passion for technology and a strong willingness to learn.  
        I enjoy exploring new tools and creating solutions that make life easier.
      </p>

      {/* Interests & Goals */}
      <div className="interests">
        <h3>Interests & Goals</h3>
        <ul>
          <li>Biggest accomplishment: Completing my Full-stack React.js portfolio project 💻</li>
          <li>Area of interest: Web Development, Mobile Apps, AI, Backend Systems</li>
          <li>Goal: To become a proficient full-stack developer and contribute to innovative projects</li>
        </ul>
      </div>
    </div>
  );
}

export default Home;