import React from 'react'
import { IMG_CDN_URL } from '../utils/constants'


const MovieCard = ({posterpath}) => {
   
  return (
    <div className='w-40 h-44 m-2'>
        <img alt='poster' src={ IMG_CDN_URL + posterpath }/>
    </div>
  )
}

export default MovieCard;