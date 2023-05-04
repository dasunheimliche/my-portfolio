import '@/styles/globals.css'

import { createContext, useEffect, useState } from 'react'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'

import queryString from 'query-string'

import Header from '../components/Header'
import Subheader from '../components/Subheader'
import React from 'react'

export const AppContext = createContext({})

export default function App({ Component, pageProps }: AppProps) {
  let isRec
  if (typeof window !== "undefined" && localStorage.getItem('isRecruiter')) {
    let test = localStorage.getItem('isRecruiter')
    if (test) {
      isRec = JSON.parse(test)
    }
  }

  let path = useRouter().pathname.substring(1)
  let router = useRouter()

  const { userType } = queryString.parse(router.asPath.split(/\?/)[1])

  let [ isRecruiter, setIsRecruiter ] = useState(isRec? isRec : false)

  useEffect(()=> {
    if (userType === "recruiter") {
      setIsRecruiter(true)
      localStorage.setItem('isRecruiter', JSON.stringify(true))
    }
  }, [userType])

  return (
    <AppContext.Provider value={isRecruiter}>
      <div className='main'>
        <Header />
        <Subheader />
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
