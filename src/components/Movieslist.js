import React from 'react'
import MovieCard from './MovieCard'

const Movieslist = ({ title, movies }) => {
    return (
        <div className='px-6'>
        <h1 className='text-lg text-white py-2 '>{title}</h1>
            <div className='flex overflow-x-scroll'>
                <div className='flex'>
                    { movies?.map((movieslist) =>
                        <MovieCard
                        key={movieslist.id}
                            posterpath=
                            {movieslist.poster_path}
                        />)}
                </div>
            </div>
        </div>

    )
}

export default Movieslist;