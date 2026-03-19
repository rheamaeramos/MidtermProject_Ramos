import profile from "../assets/profile.jpg";

function Frontpage({ onStart }) {
  return (
    <section className="frontpage">
      <div className="front-text">
        <h3>Hi!</h3>
        <h1>
          I'm <span className="highlight">Rhea Mae Noble Ramos</span>
        </h1>
        <p>
          "I'm motivated by a profound passion for technology and a strong 
          willingness to learn."
        </p>
        <button className="btn-get-started" onClick={onStart}>
          Get Started 🚀
        </button>
      </div>

      <div className="front-image">
        <img src={profile} alt="Rhea Mae" />
      </div>


      
    </section>
    
  );
}

export default Frontpage;