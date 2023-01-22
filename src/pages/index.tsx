
import { useState } from 'react'
import Header from '../components/Header'
import Subheader from '../components/Subheader'
import { MenuItem} from '../types'

export default function Home() {
  let [page, setPage] = useState<MenuItem>('home')

  return (
    <div className='main'>
      <Header page={page} setPage={setPage}/>
      <Subheader page={page} setPage={setPage}/>
    </div>
  )
}
