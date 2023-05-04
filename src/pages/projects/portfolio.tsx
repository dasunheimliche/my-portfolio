import style from '../../styles/projects.module.css'
import portfolio_desk from '../../images/portfolio_desk.jpg'
import portfolio_inspi from '../../images/portfolio_inspi.png'
import url from '../../icons/url1.png'
import git from '../../icons/github.png'

const portfolio = ()=> {


    return (
        <>
            <div className={style.header}>
                <div className={`${style.promptify} ${style.logo}`}>Portfolio</div>
                <img src={url.src} alt="url" />
                <img src={git.src} alt="github" />
            </div>
            <div className={style.container}>
                <div className={style.project}>
                    <div className={`${style.text} ${style.post} ${style.fade1}`} >
                        <div className={style.title}>Concepto</div>
                        <div className={style.content}>
                        Este portfolio es un proyecto inspirado en la estética synthwave , el cual es un estilo basado en la música electrónica y los videojuegos de los años 80 y prncipios de los 90. Se caracteriza principalmente por su estilo retro futurista, con colores brillantes y neón.  
                        </div>
                    </div>
                    <img src={portfolio_desk.src} className={`${style.post} ${style.fade2}` } alt="" />
                    <div className={`${style.text} ${style.post} ${style.fade3}`} >
                        <div className={style.title}>Tecnologías utilizadas</div>
                        <div className={`${style.content} ${style.flexed}`}>
                            <div>
                                <div className={style.subtitle}>Lenguaje</div>
                                <ul className={style.list}>
                                    <li>Typescript</li>
                                </ul>
                            </div>
                            <div>
                                <div className={style.subtitle}>Frontend</div>
                                <ul className={style.list}>
                                    <li>NextJS</li>
                                    <li>Midjourney</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className={`${style.text} ${style.post} ${style.fade4}`} >
                        <div className={style.title}>Inspiración</div>
                        <div className={style.content}>
                            <p>Este es mi primer proyecto basado en un resultado de Midjourney. Mi intención no fue necesariamente reproducir el resultado tal cual, sino usarlo de puntapié y punto de partida para conseguir algo que bien podría ser parecido, o bien, totalmente diferente.</p><br></br>
                            <img src={portfolio_inspi.src} alt="portfolio inspiration" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default portfolio