/* eslint-disable @next/next/no-img-element */
import { useRouter } from "next/router"
import { useContext } from "react"
import { AppContext } from "@/pages/_app"

const Subheader = ()=> {
    let page = useRouter().pathname.substring(1)
    let project = useRouter()

    let { isScrollUp } = useContext(AppContext)

    console.log("RUTA", page)

    const toZahir = ()=> {
        project.push('/projects/zahir')
    }

    const toPromptify = ()=> {
        project.push('/projects/promptify')
    }

    const toWordsBattle = ()=> {
        project.push('/projects/wordsBattle')
    }

    const toPortfolio = ()=> {
        project.push('/projects/portfolio')
    }

     return (
        <div id={isScrollUp? 'sub-header hidden' : 'sub-header' } className={isScrollUp ? "header hidden" : "header"}>
            <div id="s-header-left" className="header-left">
                <div>CLAUSSIMAR RODRíGUEZ</div>
            </div>
            <div id="s-header-right" className="header-right">
                <div className={page.startsWith('projects')? page.startsWith('projects/zahir')? "submenu-item-visible pointer selectedS" : "submenu-item-visible pointer" : "submenu-item-hidden pointer"} onClick={toZahir}>ZAHIR</div>
                <div className={page.startsWith('projects')? page.startsWith('projects/promptify')? "submenu-item-visible pointer selectedS" : "submenu-item-visible pointer" : "submenu-item-hidden pointer"} onClick={toPromptify}>PROMPTIFY</div>
                <div className={page.startsWith('projects')? page.startsWith('projects/wordsBattle')? "submenu-item-visible pointer selectedS" : "submenu-item-visible pointer" : "submenu-item-hidden pointer"} onClick={toWordsBattle}>WORDS BATTLE</div>
                <div className={page.startsWith('projects')? page.startsWith('projects/portfolio')? "submenu-item-visible pointer selectedS" : "submenu-item-visible pointer" : "submenu-item-hidden pointer"} onClick={toPortfolio}>PORTFOLIO</div>
            </div>
        </div>
    )
}

export default Subheader