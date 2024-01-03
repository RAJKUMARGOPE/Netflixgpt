import React from 'react'
import { useSelector } from 'react-redux';
import Movieslist from './Movieslist';


const GptMovieSuggection = () => {
  const { movieNames, movieResults } = useSelector((store) => store.gpt)
  if (!movieNames) return null
  return (
    <div className='bg-black text-white p-4 m-4 bg-opacity-90'>
      {movieNames.map(
        (moviesname, index) =>
          <Movieslist
          key={movieNames}
            title={movieNames}
            movies={movieResults[index]}
          />)}

    </div>
  )
}

export default GptMovieSuggection;