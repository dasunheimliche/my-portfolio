import Link from 'next/link'
import { useContext, useEffect, useRef } from 'react'
import { AppContext } from '../_app'

import useScrollDirection from '@/hooks/isScrollingUp'

import style from '../../styles/projects.module.css'
import zahir_desk from '../../images/zahir-desktop.jpg'
import url from '../../icons/url1.png'
import git from '../../icons/github.png'

const Zahir = ()=> {
    const {isRecruiter, setIsScrollUp, setLoading } = useContext(AppContext)

    const elementRef = useRef(null);
    const isScrollingDown = useScrollDirection(elementRef);

    useEffect(()=>{
        setLoading(false)
    }, [])

    useEffect(()=> {
        setIsScrollUp(isScrollingDown)
    }, [isScrollingDown])

    return (
        <>
            <div className={style.header}>
                <div className={`${style.zahir} ${style.logo}`}>Zahir.</div>
                <Link href={"https://zahir-pink.vercel.app/"} target='_blank'><img src={url.src} alt="url" /></Link>
                {isRecruiter && <Link href={"https://github.com/dasunheimliche/el_zahir"} target='_blank'><img src={git.src} alt="github" /></Link>}
            </div>
            <div ref={elementRef} className={style.container}>
                <div className={style.project}>
                    <div className={`${style.text} ${style.post} ${style.fade1}`}>
                        <div className={style.title}>Concepto</div>
                        <div className={style.content}>
                        Zahir es una red social única que se propone convertirse en un santuario para aquellos que buscan un espacio para guardar y acceder a su contenido multimedia favorito sin ser influenciados por las modas o las tendencias. Esta plataforma permite a los usuarios guardar y proteger sus canciones, imágenes y videos favoritos, y acceder a ellos en cualquier momento sin distracciones innecesarias. 
                        </div>
                    </div>
                    <img src={zahir_desk.src} className={`${style.post} ${style.fade2}`} alt="" />
                    <div className={`${style.text} ${style.post} ${style.fade3}`}>
                        <div className={style.title}>Tecnologías utilizadas</div>
                        <div className={`${style.content} ${style.flexed}`}>
                            <div>
                                <div className={style.subtitle}>Lenguaje</div>
                                <ul className={style.list}>
                                    <li>Javascript</li>
                                </ul>
                            </div>
                            <div>
                                <div className={style.subtitle}>Frontend</div>
                                <ul className={style.list}>
                                    <li>React</li>
                                    <li>React Router</li>
                                    <li>Axios</li>
                                    <li>Redux</li>
                                </ul>
                            </div>
                            <div>
                                <div className={style.subtitle}>Backend</div>
                                <ul className={style.list}>
                                    <li>NodeJS</li>
                                    <li>MongoDB</li>
                                    <li>Express</li>
                                    <li>ImageKit API</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className={`${style.text} ${style.post} ${style.fade4}`}>
                        <div className={style.title}>Funcionalidad</div>
                        <div className={style.content}>
                            <p>Zahir. tiene todas las funcionalidades básicas de una red social multimedia. Permite registrarse, hacer login, postear texto, imagenes, videos (tanto por url como por archivo), comentarios, likes, así como seguir a otros usuarios y ser seguido, entre otras cosas.</p><br></br>
                            <p>Las imagenes provenientes de una url, son almacenadas en un host privado, por lo que la caducación del link no es un problema. La imagen siempre estará disponible.</p>
                        </div>
                    </div>
                    <div className={`${style.text} ${style.post} ${style.fade5}`}>
                        <div className={style.title}>Próximas implementaciones</div>
                        <div className={style.content}>
                            <ul className={style.list}>
                                <li>Moods: un sistema que permita agrupar posts en colecciones relacionadas con estados de ánimo o estéticas diferentes</li>
                                <li>Notificaciones en vivo</li>
                                <li>Playlist: permitir que que los videos de una coleccion de moods se reproduzcan en una ventana emergente. Especialmente util para colecciones con varios videos musicales</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Zahir