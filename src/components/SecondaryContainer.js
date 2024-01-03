import React from 'react'
import Movieslist from './Movieslist'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
 
  const movies = useSelector((store) => store?.movies)
  

  return movies.nowplaying && (
    <div className=''>
      <div className='bg-black'>
        <div className='mt-0 md:-mt-64 relative z-10 '>
          <Movieslist title="now playing" movies={movies.nowplaying} />
          <Movieslist title="now playing" movies={movies.nowplaying} />
          <Movieslist title="now playing" movies={movies.nowplaying} />
          <Movieslist title="now playing" movies={movies.nowplaying} />
          <Movieslist title="now playing" movies={movies.nowplaying} />
        </div>
      </div>
    </div>
  )
}

export default SecondaryContainer;