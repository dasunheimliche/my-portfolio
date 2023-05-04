/* eslint-disable @next/next/no-img-element */

import Link from 'next/link'
import { useRouter } from 'next/router'

const Header = ()=> {
    let page = useRouter().pathname.substring(1)
    
    return (
        <div className="header">
            <div id="h-header-left" className="header-left">
                <div className="header-project-name">{"my-portfolio v 1.0"}</div>
                {/* <div className="header-project-version">{"v 1.0"}</div> */}
            </div>
            <div className="header-right-container">
                <div className="separator-background">
                    <div className="separator"></div>
                </div>
                <div id="h-header-right" className="header-right">
                    <Link className={page === "home"? "noLink pointer selectedM" : "."} href={page !== "home"? "/home" : {} }>
                        <div className="menu-item pointer" >HOME</div>
                    </Link>
                    <Link className={page === "skills"? "noLink pointer selectedM" : "."} href={"/skills"}>
                        <div className="menu-item pointer" >SKILLS</div>
                    </Link>
                    <Link className={page.startsWith('projects')? "noLink pointer selectedM" : "."} href={"/projects/zahir"}>
                        <div className="menu-item pointer" >PROJECTS</div>
                    </Link>
                    <Link className={page === "contact"? "noLink pointer selectedM" : "."} href={"/contact"}>
                        <div className="menu-item pointer" >CONTACT</div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Header