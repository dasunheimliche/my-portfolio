import Link from 'next/link'
import { useContext, useEffect, useRef } from 'react'
import { AppContext } from '../_app'

import { useRouter } from 'next/router'
import useSwipeDirection from '@/hooks/useSwipeDirection'
import useScrollDirection from '@/hooks/isScrollingUp'

import style from '../../styles/projects.module.css'
import words_battle_desk from '../../images/words_battle_desktop.jpg'
import url from '../../icons/url1.png'
import git from '../../icons/github.png'

const WordsBattle = ()=> {
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
            page.push('/projects/portfolio')
        } 
        if (swipeDirection === true) {
            page.push('/projects/promptify')
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
                <div className={`${style.promptify} ${style.logo}`}>Words Battle</div>
                <Link href={"https://words-battle.vercel.app/"} target='_blank'><img src={url.src} alt="url" /></Link>
                {isRecruiter && <Link href={"https://github.com/dasunheimliche/words-battle"} target='_blank'><img src={git.src} alt="github" /></Link>}
            </div>
            <div ref={elementRef} className={style.container}>
                <div className={style.project}>
                    <div className={`${style.text} ${style.post} ${style.fade1}`}>
                        <div className={style.title}>Concept</div>
                        <div className={style.content}>
                        Words Battle is an online game that allows two players to test their word-forming skills. They will have to connect letters to form words that inflict damage to the other player's health bar. The longer the word, or the more rare letters it contains, the greater the damage. 
                        </div>
                    </div>
                    <img src={words_battle_desk.src} className={`${style.post} ${style.fade2}`} alt="" />
                    <div className={`${style.text} ${style.post} ${style.fade3}`}>
                        <div className={style.title}>Technologies Used</div>
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
                        <div className={style.title}>Functionality</div>
                        <div className={style.content}>
                        <p>The application has the basic functions of an online game. It allows creating a game room and allowing another user to join. During each player's turn, certain functions will be disabled for the other player.</p><br></br>
                        <p>On the server side, the name of the room will be reserved so that no one can create a room with the same name. Once the host has finished the session, the name will become available again.</p><br></br>
                        <p>The definition of each formed word will appear on the screen to clarify any doubts about its validity. However, if the word is not valid, the damage cannot be dealt.</p>
                        </div>
                    </div>
                    <div className={`${style.text} ${style.post} ${style.fade5}`}>
                        <div className={style.title}>Upcoming Implementations</div>
                        <div className={style.content}>
                            <ul className={style.list}>
                                <li>Create user accounts: You can create an account and keep track of battle history with your friends</li>
                                <li>English language version: You can play the game by forming words in English</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default WordsBattle