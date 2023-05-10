import Image from 'next/image'
import landscape_back from '../../public/background-h.png'
import portrait_back from '../../public/background-v.png'

import { useContext, useEffect } from 'react'
import { AppContext } from './_app'

import { useRouter } from 'next/router'
import useSwipeDirection from '@/hooks/useSwipeDirection'
import useScreenWidth from '@/hooks/useScreenWidth500'

const HomePage = ()=> {

    const {loading, setLoading} = useContext(AppContext)
    const swipeDirection = useSwipeDirection();
    const isWidth500 = useScreenWidth()

    let page = useRouter()

    const imgIsLoaded = ()=> {
        setLoading(false)
    }

    console.log("SWIPE DIRECTION", swipeDirection)

    useEffect(()=> {
        if (swipeDirection === null) {
            return
        }
        console.log("USE EFFECT CONDITIONAL", swipeDirection === false)
        if (swipeDirection === false) {
            page.push('/skills')
        }
    }, [swipeDirection])

    return (

        <div className="main-home">
            {loading && <div className='loading'></div>}
            <div style={{width: '100%', height: '100%', position: 'absolute', zIndex: "-1"}} className='main-back land-back'>
                <Image fill={true} style={{objectFit:"cover"}} src={landscape_back.src} alt="background image" onLoadingComplete={imgIsLoaded} />
            </div>
            {loading && <div className='loading'></div>}
            <div style={{width: '100%', height: '100%', position: 'absolute', zIndex: "-1"}} className='main-back port-back'>
                <Image style={{objectFit:"cover"}} fill={true}  src={portrait_back.src} alt="background image" onLoadingComplete={imgIsLoaded} />
            </div>
            <div className="main-content">
                <h1 className="main-title neonText fade2">WELCOME TO MY PORTFOLIO</h1>
                <div className="main-subtitle fade3">Hi! My name is Claussimar Rodríguez and I am a fullstack web developer with a focus on frontend. I hope you can see in my projects and your visit through my portfolio my attention to details and achieving an aesthetically pleasing and simple user experience.</div>
                <div className="main-content-buttons">
                    {!isWidth500 && <button className='main-button arrow fade4'>{"SKILLS"}</button>}
                    {!isWidth500 && <button className='main-button arrow fade4'>{"PROJECTS"}</button>}
                    {!isWidth500 && <button className='main-button arrow fade4'>{"CONTACT"}</button>}
                    {isWidth500 && <button className='main-button arrow fade1'>{"SWIPE TO NAVIGATE"}</button>}
                </div>
            </div>
        </div>
    )
}

export default HomePage