import profile from "../assets/profile.jpg";

function Home() {
  return (
    <div className="home-card">
   
      <h2>Home / About Me</h2>

     
      <div className="profile-section">
        <img src={profile} alt="Rhea Mae" className="profile-img" />
        <h1>Rhea Mae Noble Ramos</h1>
      </div>

    
      <p className="intro">
      Hi! I’m deeply passionate about technology and always have eager to learn. 
      I love exploring new tools and finding creative ways to make life a little easier
      </p>

      <div className="interests">
        <h3>Interests & Goals</h3>
        <ul>
          <li>Biggest accomplishment:Passing NCll,
             I had the opportunity to take on a leadership role in our project last semester,  
             Completing my  React.js portfolio project 💻</li>
          <li>Area of interest: Web Development, Backend Systems</li>
          <li>Goal: To become a proficient full-stack developer and contribute to innovative projects</li>
        </ul>
      </div>
    </div>
  );
}

export default Home;