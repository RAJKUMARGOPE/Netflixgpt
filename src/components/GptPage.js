import React from 'react'
import GptMovieSuggection from './GptMovieSuggection'
import GptSearch from './GptSearch'
import { BG_IMG } from '../utils/constants'


const Gptpage = () => {
  return (
    <div>
     <div className='fixed -z-10'>
     <img className='h-screen w-screen object-cover' alt="bg" src={BG_IMG}/>
     </div>
      <GptSearch />
      <GptMovieSuggection />
    </div>
  )
}

export default Gptpage