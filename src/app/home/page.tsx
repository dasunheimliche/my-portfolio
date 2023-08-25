import Link from "next/link";

const HomePage = () => {
  return (
    <div className="main-home">
      <div className="main-content">
        <h1 className="main-title neonText fade2">WELCOME TO MY PORTFOLIO</h1>
        <div className="main-subtitle fade3">
          Hello, I'm <b>Claussimar Rodriguez</b>, a <b>fullstack</b> web
          developer with a focus on the frontend. Here, I present{" "}
          <b>three original fullstack projects</b>, built from the ground up,
          aimed at addressing an unmet need compared to a similar application.{" "}
          <b>Zahir</b>, a multimedia social network, <b>Promptify</b>, an
          AI-prompts organizer, and <b>Words Battle</b>, an online multiplayer
          game.
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
