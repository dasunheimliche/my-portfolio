import Link from "next/link";

const HomePage = () => {
  return (
    <div className="main-home">
      <div className="main-content">
        <h1 className="main-title neonText fade2">WELCOME TO MY PORTFOLIO</h1>
        <div className="main-subtitle fade3">
          Hello, I'm Claussimar Rodríguez, a frontend-focused full-stack web
          developer. The projects showcased here are ones I use daily and were
          conceived to fulfill an unmet need left by existing apps. I hope you
          can see in your visit through my portfolio my commitment to creating
          visually appealing and user-friendly experiences.
        </div>
        <div className="main-content-buttons desktop">
          <Link href={"/skills"}>
            <button className="main-button arrow fade4">{"SKILLS"}</button>
          </Link>
          <Link href={"/projects"}>
            <button className="main-button arrow fade4">{"PROJECTS"}</button>
          </Link>
          <Link href={"/contact"}>
            <button className="main-button arrow fade4">{"CONTACT"}</button>
          </Link>
        </div>
        <div className="main-content-buttons mobile">
          <button className="main-button arrow fade1">
            {"SWIPE TO NAVIGATE"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
