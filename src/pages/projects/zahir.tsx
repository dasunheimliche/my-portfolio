import Link from 'next/link'
import { useContext, useEffect, useRef, useState } from 'react'
import { AppContext } from '../_app'

import { useRouter } from 'next/router'
import useSwipeDirection from '@/hooks/useSwipeDirection'
import useScrollDirection from '@/hooks/isScrollingUp'


// import useWheelDown from '@/hooks/isWheelDown'

import style from '../../styles/projects.module.css'
import zahir_desk from '../../images/zahir-desktop.jpg'
import url from '../../icons/url1.png'
import git from '../../icons/github.png'

const Zahir = ()=> {
    const {isRecruiter, setIsScrollUp, setLoading } = useContext(AppContext)

    const elementRef = useRef(null);
    const isScrollingDown = useScrollDirection(elementRef);

    const swipeDirection = useSwipeDirection();
    let page = useRouter()


    // let [locked, setLocked] = useState(false) 
    // let isWheelDown = useWheelDown() 
    // console.log("TEST", locked)

  

    // useEffect(() => {
    //     setLocked(false)
    //     if (isWheelDown) {
    //         setLocked(true)
    //         setTimeout(()=>{
    //             setLocked(false)
    //         },1)
    //     } else {
    //         setLocked(false)
    //     }
    // }, [isWheelDown]);

    useEffect(()=> {
        if (swipeDirection === null) {
            return
        }
        if (swipeDirection === false ) {
            page.push('/projects/promptify')
        } 
        if (swipeDirection === true) {
            page.push('/skills')
        }

    }, [swipeDirection])

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
            <div ref={elementRef} className={`${style.container}`}>
            {/* <div ref={elementRef} className={locked? `${style.container} ${style.locked}` : style.container} > */}
                <div className={style.project}>
                    <div className={`${style.text} ${style.post} ${style.fade1}`}>
                        <div className={style.title}>Concept: My ideal Tumblr. A different social network.</div>
                        <div className={style.content}>
                            <p>Zahir is a social network whose objective is to store and share multimedia content that has marked the user in a lasting and meaningful way. In contrast to the rest of the content, which may generate a great impact but quickly fades from the user's thoughts.</p><br />
                            <p>It is a social network strongly inspired by Tumblr but with a more specific orientation and purpose. Users' posts offer glimpses into their obsessions, aesthetic and intellectual pursuits, or safe havens they repeatedly return to.</p><br />
                            <p>Zahir is an expression from 16th-century Islamic mythology that means <i>"something that, once seen, can never be forgotten."</i></p>
                        </div>
                    </div>
                    <img src={zahir_desk.src} className={`${style.post} ${style.fade2}`} alt="" />
                    <div className={`${style.text} ${style.post} ${style.fade3}`}>
                        <div className={style.title}>Used technologies</div>
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
                        <div className={style.title}>Functionality</div>
                        <div className={style.content}>
                            <p>Zahir has all the basic functionalities of a multimedia social network. It allows users to register, login, post text, images, videos (both by URL and file), comments, likes, as well as follow other users and be followed, among other things.</p><br></br>
                            <p>Images from a URL are stored on a private host, so link expiration is not a problem. The image will always be available.</p>
                        </div>
                    </div>
                    <div className={`${style.text} ${style.post} ${style.fade5}`}>
                        <div className={style.title}>Upcoming features</div>
                        <div className={style.content}>
                            <ul className={style.list}>
                                <li>Moods: a system that allows grouping posts into collections related to different moods or aesthetics</li>
                                <li>Live notifications</li>
                                <li>Playlist: allow the videos of a moods collection to be played in a pop-up window. Especially useful for collections with multiple music videos</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Zahir