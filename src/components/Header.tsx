/* eslint-disable @next/next/no-img-element */
import { Props, MenuItem } from '../types'

const Header = ({ page, setPage } : Props)=> {

    const changeItem = (item: MenuItem)=> {
        setPage && setPage(item);
    }

    return (
        <div className="header">
            <div id="h-header-left" className="header-left">
                {/* <img src="/image.jpg" alt="logo" className="header-logotype"/> */}
                <div className="header-project-name">{"my-portfolio"}</div>
                <div className="header-project-version">{"v 1.0"}</div>
            </div>
            <div className="header-right-container">
                <div className="separator-background">
                    <div className="separator"></div>
                </div>
                <div id="h-header-right" className="header-right">
                    <div className="menu-item pointer" onClick={()=>changeItem('home')}>HOME</div>
                    <div className="menu-item pointer" onClick={()=>changeItem('skills')}>SKILLS</div>
                    <div className="menu-item pointer" onClick={()=>changeItem('projects')}>PROJECTS</div>
                    <div className="menu-item pointer" onClick={()=>changeItem('contact')}>CONTACT ME</div>
                </div>
            </div>
        </div>
    )
}

export default Header