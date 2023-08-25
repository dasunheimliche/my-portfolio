import TabButton from "@/components/TabButton";

const Header = () => {
  return (
    <div className="header">
      <div id="h-header-left" className="header-left">
        <div className="header-project-name">{"my-portfolio v1.0"}</div>
      </div>
      <div className="header-right-container">
        <div className="separator-background">
          <div className="separator"></div>
        </div>
        <div id="h-header-right" className="header-right">
          <TabButton label={"HOME"} href={"/home"} />
          <TabButton label={"SKILLS"} href={"/skills"} />
          <TabButton label={"PROJECTS"} href={"/projects/zahir"} />
          <TabButton label={"CONTACT"} href={"/contact"} />
        </div>
      </div>
    </div>
  );
};

export default Header;
