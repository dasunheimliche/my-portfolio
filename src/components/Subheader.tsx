/* eslint-disable @next/next/no-img-element */
import {Props} from '../types'

const Subheader = ({page}:Props)=> {
    return (
        <div id='sub-header' className="header">
            <div id="s-header-left" className="header-left">
                <div>Claussimar</div>
            </div>
            <div id="s-header-right" className="header-right">
                <div className={page === "projects"? "submenu-item-visible pointer" : "submenu-item-hidden pointer"}>ZAHIR</div>
                <div className={page === "projects"? "submenu-item-visible pointer" : "submenu-item-hidden pointer"}>CALCULATOR</div>
                <div className={page === "projects"? "submenu-item-visible pointer" : "submenu-item-hidden pointer"}>CHAT APP</div>
                <div className={page === "projects"? "submenu-item-visible pointer" : "submenu-item-hidden pointer"}>TODO APP</div>
            </div>
        </div>
    )
}

export default Subheader