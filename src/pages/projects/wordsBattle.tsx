import Link from 'next/link'
import { useContext, useEffect, useRef } from 'react'
import { AppContext } from '../_app'

import useScrollDirection from '@/hooks/isScrollingUp'

import style from '../../styles/projects.module.css'
import words_battle_desk from '../../images/words_battle_desktop.jpg'
import url from '../../icons/url1.png'
import git from '../../icons/github.png'

const WordsBattle = ()=> {
    const {isRecruiter, setIsScrollUp} = useContext(AppContext)

    const elementRef = useRef(null);
    const isScrollingDown = useScrollDirection(elementRef);

    useEffect(()=> {
        setIsScrollUp(isScrollingDown)
    }, [isScrollingDown])

    return (
        <>
            <div className={style.header}>
                <div className={`${style['words-battle']} ${style.logo}`}>Words Battle</div>
                <Link href={"https://words-battle.vercel.app/"} target='_blank'><img src={url.src} alt="url" /></Link>
                {isRecruiter && <Link href={"https://github.com/dasunheimliche/words-battle"} target='_blank'><img src={git.src} alt="github" /></Link>}
            </div>
            <div ref={elementRef} className={style.container}>
                <div className={style.project}>
                    <div className={`${style.text} ${style.post} ${style.fade1}`}>
                        <div className={style.title}>Concepto</div>
                        <div className={style.content}>
                        Words Battle es un juego en linea que permite a dos jugadores poner a prueba sus habilidades de formación de palabras. Estos tendrán que conectar letras para formar palabras que infligen daño a la barra del vida del otro jugador. Mientras mas larga la palabra, o mientas mas letras raras contenga, mayor será el daño.  
                        </div>
                    </div>
                    <img src={words_battle_desk.src} className={`${style.post} ${style.fade2}`} alt="" />
                    <div className={`${style.text} ${style.post} ${style.fade3}`}>
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
                                    <li>Vite</li>
                                    <li>Axios</li>
                                    <li>Socket.io Client</li>
                                </ul>
                            </div>
                            <div>
                                <div className={style.subtitle}>Backend</div>
                                <ul className={style.list}>
                                    <li>NodeJS</li>
                                    <li>Socket.io</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className={`${style.text} ${style.post} ${style.fade4}`}>
                        <div className={style.title}>Funcionalidad</div>
                        <div className={style.content}>
                        <p>La aplicación tiene las funciones básicas de un juego online. Este permite crear una sala de juego y permitir que otro usuario se una. Durante el turno de cada jugador, el otro tendrá determinadas funciones deshabilitadas.</p><br></br>
                        <p>Del lado del servidor, el nombre de la sala quedará reservado para que nadie pueda crear una sala con el mismo nombre. Una vez que el host haya finalizado la sesión, el nombre volverá a estar disponible.</p><br></br>
                        <p>La definición de cada palabra formada aparecera en la pantalla para evacuar cualquier duda de su validez. De todos modos, si la palabra no es válida, no se podra realizar el daño.</p>
                        </div>
                    </div>
                    <div className={`${style.text} ${style.post} ${style.fade5}`}>
                        <div className={style.title}>Próximas implementaciones</div>
                        <div className={style.content}>
                            <ul className={style.list}>
                                <li>Red social: permitir a los usuarios compartir sus prompts o agregar prompts creados por otros usuarios, así como seguirlos</li>
                                <li>Opciones específicas optimizadas para cada IA</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default WordsBattle