import Link from 'next/link'
import { useContext, useEffect, useRef } from 'react'
import { AppContext } from '../_app'

import { useRouter } from 'next/router'
import useSwipeDirection from '@/hooks/useSwipeDirection'
import useScrollDirection from '@/hooks/isScrollingUp'

import style from '../../styles/projects.module.css'
import promptify_desk from '../../images/promptify_desktop.jpg'
import url from '../../icons/url1.png'
import git from '../../icons/github.png'

const Promptify = ()=> {
    const {isRecruiter, setIsScrollUp, setLoading} = useContext(AppContext)

    const elementRef = useRef(null);
    const isScrollingDown = useScrollDirection(elementRef);

    const swipeDirection = useSwipeDirection();
    let page = useRouter()

    useEffect(()=> {
        if (swipeDirection === null) {
            return
        }
        if (swipeDirection === false ) {
            page.push('/projects/wordsBattle')
        } 
        if (swipeDirection === true) {
            page.push('/projects/zahir')
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
                <div className={`${style.promptify} ${style.logo}`}>Promptify</div>
                <Link href={"https://promptify-steel.vercel.app/login"} target='_blank'><img src={url.src} alt="url" /></Link>
                {isRecruiter && <Link href={"https://github.com/dasunheimliche/promptify/"} target='_blank'><img src={git.src} alt="github" /></Link>}
            </div>
            <div ref={elementRef} className={style.container}>
            <div className={style.project}>
                    <div className={`${style.text} ${style.post} ${style.fade1}`}>
                        <div className={style.title}>Concept: I needed a prompt organizer, so I made one!</div>
                        <div className={style.content}>
                        Promptify is a fullstack prompt organizer inspired by ordinary note organizers, but with functionalities aimed at organizing and saving prompts and prompt chains.                        </div>
                    </div>
                    <img src={promptify_desk.src} className={`${style.post} ${style.fade2}`} alt="" />
                    <div className={`${style.text} ${style.post} ${style.fade3}`}>
                        <div className={style.title}>Technologies used</div>
                        <div className={`${style.content} ${style.flexed}`}>
                            <div>
                                <div className={style.subtitle}>Language</div>
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
                                    <li>GraphQL</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className={`${style.text} ${style.post} ${style.fade4}`}>
                        <div className={style.title}>Functionality</div>
                        <div className={style.content}>
                        <p>Promptify allows users to create cards that can consist of either a single prompt or a chain of prompts for more complex instructions. These prompts are organized by AI and specific topics and can be edited once created, including the ability to add new prompts to cards that originally consisted of only one. </p><br></br>
                        <p>Clicking on a card opens a panel that allows each prompt to be edited to fit each situation, and easily copy the instruction to use it directly in the often uncomfortable interface of the AI. </p><br></br>
                        <p>If the card contains a chain of prompts, copying an instruction to the clipboard automatically advances the panel to the next instruction in the chain.</p><br></br>
                        <p>Both AIs, topics, and cards can be marked as favorites for easier access.</p>
                        </div>
                    </div>
                    <div className={`${style.text} ${style.post} ${style.fade5}`}>
                        <div className={style.title}>Upcoming Implementations</div>
                        <div className={style.content}>
                            <ul className={style.list}>
                                <li>Social network: allow users to share their prompts or add prompts created by other users, as well as follow them</li>
                                <li>Specific options optimized for each AI</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Promptify