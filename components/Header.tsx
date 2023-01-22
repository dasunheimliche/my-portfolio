/* eslint-disable @next/next/no-img-element */

const Header = ()=> {
    return (
        <div className="header">
            <div className="header-left">
                <img src="/image.jpg" alt="logo" className="header-logotype"/>
                <div className="header-project-name">my-portfolio</div>
                <div className="header-project-version">v 0.1</div>
            </div>
            <div id="main-header" className="header-right">
                <div className="menu-item">HOME</div>
                <div className="menu-item">SKILLS</div>
                <div className="menu-item">PROJECTS</div>
                <div className="menu-item">CONTACT ME</div>
            </div>
        </div>
    )
}

export default Header