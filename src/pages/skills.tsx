import { useContext, useEffect } from 'react'
import { AppContext } from './_app'

import { useRouter } from 'next/router'
import useSwipeDirection from '@/hooks/useSwipeDirection'

import style from '../styles/skills.module.css'

import reactIMG from '../icons/react.png'
import vercelIMG from '../icons/vercel.png'
import nodejs from '../icons/nodejs.png'
import express from '../icons/express.png'
import graphql from '../icons/graphql.png'
import socketio from '../icons/socketio.png'
import js from '../icons/js.png'
import ts from '../icons/ts.png'
import mongodb from '../icons/mongodb.png'
import mysql from '../icons/mysql.png'
import git from '../icons/git.png'
import api from '../icons/api.png'
import react_router from '../icons/react_router.png'
import redux from '../icons/redux.png'

import english from '../icons/english.png'


const Skills = ()=> {
    const {setLoading} = useContext(AppContext)

    const swipeDirection = useSwipeDirection();
    let page = useRouter()

    useEffect(()=>{
        setLoading(false)
    }, [])

    useEffect(()=> {
        if (swipeDirection === null) {
            return
        }
        if (swipeDirection === false) {
            page.push('/projects/zahir')
        } 
        if (swipeDirection === true) {
            page.push('/home')
        }

    }, [swipeDirection])


    return (
        <>
            <div className={style.container}>
                <div className={style.row0}>Skills</div>
                <div className={style.row1}>
                    <div className={style.topic2}>
                        <div className={style.title}>Frontend</div>
                        <div className={style.list2}>
                            <div className={style.item}>
                                <div className={style.itemImg}>
                                    <img src={reactIMG.src} alt="react img" />
                                </div>
                                <div className={style.itemTag}>React</div>
                            </div>
                            <div className={style.item}>
                                <div className={style.itemImg}>
                                    <img src={vercelIMG.src} alt="vercel img" />
                                </div>
                                <div className={style.itemTag}>NextJS</div>
                            </div>
                            <div className={style.item}>
                                <div className={style.itemImg}>
                                    <img src={react_router.src} alt="vercel img" />
                                </div>
                                <div className={style.itemTag}>R.Router</div>
                            </div>
                            <div className={style.item}>
                                <div className={style.itemImg}>
                                    <img src={redux.src} alt="vercel img" />
                                </div>
                                <div className={style.itemTag}>Redux</div>
                            </div>
                        </div>
                    </div>
                    <div className={style.topic2}>
                        <div className={style.title}>Backend</div>
                        <div className={style.list2}>
                            <div className={style.item}>
                                <div className={style.itemImg}>
                                    <img src={nodejs.src} alt="react img" />
                                </div>
                                <div className={style.itemTag}>NodeJS</div>
                            </div>
                            <div className={style.item}>
                                <div className={style.itemImg}>
                                    <img src={express.src} alt="vercel img" />
                                </div>
                                <div className={style.itemTag}>Express</div>
                            </div>
                            <div className={style.item}>
                                <div className={style.itemImg}>
                                    <img src={graphql.src} alt="vercel img" />
                                </div>
                                <div className={style.itemTag}>GraphQL</div>
                            </div>
                            <div className={style.item}>
                                <div className={style.itemImg}>
                                    <img src={socketio.src} alt="vercel img" />
                                </div>
                                <div className={style.itemTag}>Socket.io</div>
                            </div>
                        </div>
                    </div>
                    
                </div>
                <div className={style.row2}>
                    <div className={style.topic2}>
                        <div className={style.title}>Languages</div>
                        <div className={style.list2}>
                            <div className={style.item}>
                                <div className={style.itemImg}>
                                    <img src={js.src} alt="react img" />
                                </div>
                                <div className={style.itemTag}>Javascript</div>
                            </div>
                            <div className={style.item}>
                                <div className={style.itemImg}>
                                    <img src={ts.src} alt="vercel img" />
                                </div>
                                <div className={style.itemTag}>Typescript</div>
                            </div>
                        </div>
                    </div>
                    <div className={style.topic2}>
                        <div className={style.title}>Dadabase</div>
                        <div className={style.list2}>
                            <div className={style.item}>
                                <div className={style.itemImg}>
                                    <img src={mongodb.src} alt="react img" />
                                </div>
                                <div className={style.itemTag}>MongoDB</div>
                            </div>
                            <div className={style.item}>
                                <div className={style.itemImg}>
                                    <img src={mysql.src} alt="vercel img" />
                                </div>
                                <div className={style.itemTag}>MySQL</div>
                            </div>
                        </div>
                    </div>
                    <div id={style.others} className={style.topic2}>
                        <div className={style.title}>Others</div>
                        <div className={style.list2}>
                            <div className={style.item}>
                                <div className={style.itemImg}>
                                    <img src={git.src} alt="react img" />
                                </div>
                                <div className={style.itemTag}>Git</div>
                            </div>
                            <div className={style.item}>
                                <div className={style.itemImg}>
                                    <img src={api.src} alt="vercel img" />
                                </div>
                                <div className={style.itemTag}>API's</div>
                            </div>
                            <div className={style.item}>
                                <div className={style.itemImg}>
                                    <img src={english.src} alt="vercel img" />
                                </div>
                                <div className={style.itemTag}>EN (B2)</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={style.row22}>
                    <div className={style.topic2}>
                        <div className={style.title}>Others</div>
                        <div className={style.list2}>
                            <div className={style.item}>
                                <div className={style.itemImg}>
                                    <img src={git.src} alt="react img" />
                                </div>
                                <div className={style.itemTag}>Git</div>
                            </div>
                            <div className={style.item}>
                                <div className={style.itemImg}>
                                    <img src={api.src} alt="vercel img" />
                                </div>
                                <div className={style.itemTag}>API's</div>
                            </div>
                            <div className={style.item}>
                                <div className={style.itemImg}>
                                    <img src={english.src} alt="vercel img" />
                                </div>
                                <div className={style.itemTag}>EN (B2)</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={style.row3}>
                    <div className={style.topic2}>
                        <div className={style.title}>Soft Skills</div>
                        <div className={style.list3}>
                            <ul>
                                <li>Self-taught</li>
                                <li>Committed</li>
                                <li>Participative</li>
                                <li>Creative</li>
                            </ul>
                            <ul>
                                <li>Adaptable</li>
                                <li>Detail-oriented</li>
                                <li>Enthusiastic</li>
                            </ul>
                        </div>

                    </div>
                    <div id={style.academic} className={style.topic2}>
                        <div className={style.title}>Other academic skills</div>
                        <div className={style.list3}>
                            <ul>
                                <li>Mathemathics (I, II, II)</li>
                                <li>Physics (I, II)</li>
                                <li>Microbiology (I, II, III)</li>
                            </ul>
                            <ul>
                                <li>Chemistry (organic, innorganic)</li>
                                <li>Food engineering (Industry I, II, III, etc.)</li>
                                <li>Bromayology (I, II, III)</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className={style.row33}>
                <div className={style.topic2}>
                        <div className={style.title}>Other academic skills</div>
                        <div className={style.list3}>
                            <ul>
                                <li>Mathemathics (I, II, II)</li>
                                <li>Physics (I, II)</li>
                                <li>Microbiology (I, II, III)</li>
                                <li>Chemistry (organic, innorganic)</li>
                                <li>Food engineering (Industry I, II, III, etc.)</li>
                                <li>Bromayology (I, II, III)</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Skills