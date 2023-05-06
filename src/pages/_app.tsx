import '@/styles/globals.css'

import { Dispatch, createContext, useEffect, useState } from 'react'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'

import queryString from 'query-string'

import Header from '../components/Header'
import Subheader from '../components/Subheader'
import React from 'react'

interface AppContext {
  isRecruiter: boolean
  isScrollUp: boolean
  loading: boolean
  setLoading: Dispatch<boolean>
  setIsScrollUp: Dispatch<boolean>
}

export const AppContext = createContext<AppContext>(
  {
    isRecruiter: false, 
    isScrollUp: false, 
    loading: true,
    setLoading: ()=>{},
    setIsScrollUp: ()=>{}
  })

export default function App({ Component, pageProps }: AppProps) {
  let isRec
  if (typeof window !== "undefined" && localStorage.getItem('isRecruiter')) {
    let test = localStorage.getItem('isRecruiter')
    if (test) {
      isRec = JSON.parse(test)
    }
  }

  

  let [ isRecruiter, setIsRecruiter ] = useState<boolean>(isRec? isRec : false)
  let [ isScrollUp, setIsScrollUp ] = useState<boolean>(false)
  let [ loading, setLoading ] = useState<boolean>(true)

  let path = useRouter().pathname.substring(1)
  let router = useRouter()
  const { userType } = queryString.parse(router.asPath.split(/\?/)[1])

  useEffect(()=> {
    if (userType === "recruiter") {
      setIsRecruiter(true)
      localStorage.setItem('isRecruiter', JSON.stringify(true))
    }
  }, [userType])

  return (
    <AppContext.Provider value={{isRecruiter, isScrollUp, setIsScrollUp, loading, setLoading}}>
      <div className='main'>
        <img src="" alt="" />
        <div style={loading? {opacity: "0"} : {opacity: "1"}}><Header/></div>
        <div style={loading? {opacity: "0"} : {opacity: "1"}}><Subheader /></div>
        <Component {...pageProps}/>
        {path !== "home" && <div className='main-others'>
            <div className="sun"></div>
            <div className="overlay"></div>
            <div className="overlay glitch"></div>
          </div>}
      </div>
    </AppContext.Provider>
  )
}
