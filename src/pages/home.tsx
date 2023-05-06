import Image from 'next/image'
import { useState } from 'react'
import landscape_back from '../../public/background-h.png'
import portrait_back from '../../public/background-v.png'

const HomePage = ()=> {

    let [ loading, setLoadig ] = useState<boolean>(true)

    const imgIsLoaded = ()=> {
        setLoadig(false)
    }

    console.log("LOADING?", loading)

    return (

        <div className="main-home">
            {loading && <div className='loading'></div>}
            <div style={{width: '100%', height: '100%', position: 'absolute', zIndex: "-1"}} className='main-back land-back'>
                <Image fill={true}  src={landscape_back.src} alt="background image" onLoadingComplete={imgIsLoaded} />
            </div>
            {loading && <div className='loading'></div>}
            <div style={{width: '100%', height: '100%', position: 'absolute', zIndex: "-1"}} className='main-back port-back'>
                <Image fill={true}  src={portrait_back.src} alt="background image" onLoadingComplete={imgIsLoaded} />
            </div>
            <div className="main-content">
                <h1 className="main-title neonText fade2">WELCOME TO MY PORTFOLIO</h1>
                <div className="main-subtitle fade3">Hi! My name is Claussimar Rodríguez and I am a fullstack web developer with a focus on frontend. I hope you can see in my projects and your visit through my portfolio my obsession with details and achieving an aesthetically pleasing and simple user experience.</div>
                <button className='main-button fade4'>DOWLOAD MY CV</button>
            </div>
        </div>
    )
}

export default HomePage