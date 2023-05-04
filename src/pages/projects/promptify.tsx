import Link from 'next/link'
import { useContext, useEffect, useRef } from 'react'
import { AppContext } from '../_app'

import useScrollDirection from '@/hooks/isScrollingUp'

import style from '../../styles/projects.module.css'
import promptify_desk from '../../images/promptify_desktop.jpg'
import url from '../../icons/url1.png'
import git from '../../icons/github.png'

const Promptify = ()=> {
    const {isRecruiter, setIsScrollUp} = useContext(AppContext)

    const elementRef = useRef(null);
    const isScrollingDown = useScrollDirection(elementRef);

    useEffect(()=> {
        setIsScrollUp(isScrollingDown)
    }, [isScrollingDown])

    return (
        <>
            <div className={style.header}>
                <div className={`${style.promptify} ${style.logo}`}>Promptify</div>
                <Link href={"https://promptify-steel.vercel.app/login"} target='_blank'><img src={url.src} alt="url" /></Link>
                {isRecruiter && <Link href={"https://github.com/dasunheimliche/promptify/"} target='_blank'><img src={git.src} alt="github" /></Link>}
            </div>
            <div ref={elementRef} className={style.container}>
                <div className={style.project}>
                    <div className={`${style.text} ${style.post} ${style.fade1}`}>
                        {/* <div className={style.header}>
                            <div className={style.promptify}>Promptify.</div>
                        </div> */}
                        <div className={style.title}>Concepto</div>
                        <div className={style.content}>
                        Promptify es una plataforma en línea diseñada para ayudar a los usuarios a crear y organizar prompts para proyectos de inteligencia artificial. La herramienta permite a los usuarios crear tarjetas de prompts personalizados que pueden ser utilizados en una variedad de proyectos de IA. Los usuarios pueden crear tanto prompts simples como secuencias de comandos complejas, y luego guardarlos en tarjetas para acceder a ellos rápidamente. Promptify es una solución efectiva para aquellos que buscan mejorar la eficiencia de sus proyectos de IA, ya que la organización de prompts puede ahorrar tiempo y aumentar la productividad. 
                        </div>
                    </div>
                    <img src={promptify_desk.src} className={`${style.post} ${style.fade2}`} alt="" />
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
                                    <li>NextJS</li>
                                    <li>Axios</li>
                                    <li>Apollo Client</li>
                                </ul>
                            </div>
                            <div>
                                <div className={style.subtitle}>Backend</div>
                                <ul className={style.list}>
                                    <li>NodeJS</li>
                                    <li>MongoDB</li>
                                    <li>Graphql</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className={`${style.text} ${style.post} ${style.fade4}`}>
                        <div className={style.title}>Funcionalidad</div>
                        <div className={style.content}>
                        <p>Promptify permite al usuario crear tarjetas que pueden consistir tanto en un único prompt, como en una cadena de prompts para instrucciones mas complejas. Estos prompts se organizan por IA, y topics específicos, y pueden editarse una vez creados pudiendo incluso agregar nuevos prompts a tarjetas que originalmente consistían en una solo. </p><br></br>
                        <p>Al hacer click en una tarjeta se abre un panel que permite editar cada prompt para adaptarla a cada situacion, y copiar la instruccion fácilmente para usarla diréctamente en la interfaz de la IA que suele ser poco cómoda para escribir instrucciones largas. </p><br></br>
                        <p>Si la tarjeta contiene una cadena de prompts, al copiar una instruccion al portapapeles, el panel avanza automáticamente a la siguiente instruccion en la cadena.</p><br></br>
                        <p>Tanto las IA, como los topics y tarjetas pueden marcarse como favoritos para un más fácil acceso a ellas.</p>
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

export default Promptify