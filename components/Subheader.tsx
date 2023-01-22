/* eslint-disable @next/next/no-img-element */

const Subheader = ()=> {
    return (
        <div className="header">
            <div className="header-left">
                <img src="/image.jpg" alt="logo" className="header-logo"/>
            </div>
            <div id="sub-header" className="header-right">
                <div className="submenu-item">ZAHIR</div>
                <div className="submenu-item">CALCULATOR</div>
                <div className="submenu-item">CHAT APP</div>
                <div className="submenu-item">TTODO APP</div>
            </div>
        </div>
    )
}

export default Subheader