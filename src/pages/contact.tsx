import style from '../styles/contact.module.css'
import mailIcon from '../icons/mail3.png'
import git from '../icons/github.png'
import whatsapp from '../icons/whatsapp.png'
import linkedin from '../icons/linkedin.png'

import { useContext, useEffect } from 'react'
import { AppContext } from './_app'

import { useRouter } from 'next/router'
import useSwipeDirection from '@/hooks/useSwipeDirection'


const Contact = ()=> {
    const {isRecruiter, setLoading} = useContext(AppContext)

    const swipeDirection = useSwipeDirection();
    let page = useRouter()

    useEffect(()=> {
        if (swipeDirection === null) {
            return
        }
        if (swipeDirection === false ) {
            return
        } 
        if (swipeDirection === true) {
            page.push('/projects/portfolio')
        }

    }, [swipeDirection])

    useEffect(()=>{
        setLoading(false)
    }, [])

    console.log("CONTACT CONTEXT", isRecruiter)

    return (
        <>
            <div className={style.container}>
                <div className={style.list}>
                    <ul>
                        <li id={style.first}>
                            <a href="https://wa.me/541157739126" target="_blank" rel="noopener noreferrer">
                                <span>11 5773 9126</span>
                                <img src={whatsapp.src} alt="whatsapp" />
                            </a>
                        </li>
                        {isRecruiter && <li id={style.second}>
                            <a href="https://github.com/dasunheimliche" target="_blank" rel="noopener noreferrer">
                                <span>/dasunheimliche</span>
                                <img src={git.src} alt="github" />
                            </a>
                        </li>}
                        <li id={style.third}>
                            <a href="mailto:clrdriguez89@gmail.com" target="_blank" rel="noopener noreferrer">
                                <span>clrdriguez89@gmail.com</span>
                                <img src={mailIcon.src} alt="email" />
                            </a>
                        </li>
                        <li id={style.fourth}> 
                            <a href='https://linkedin.com/in/clau-rodríguez-209277275' target="_blank" rel="noopener noreferrer">
                                <span>/clau-rodríguez-209277275</span>
                                <img src={linkedin.src} alt="linkedin" />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Contact