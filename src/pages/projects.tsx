import { useContext, useEffect } from 'react'
import { AppContext } from './_app'

const Projects = ()=> {
    const {setLoading} = useContext(AppContext)

    useEffect(()=>{
        setLoading(false)
    }, [])

    return (
        <>
        </>
    )
}

export default Projects