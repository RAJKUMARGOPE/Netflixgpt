import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import useMovietrailer from '../Hooks/useMovietrailer'


const Backgroundvideo = ({ movieid }) => {
    useMovietrailer(movieid)
    const trailerkey = useSelector((store) => store?.movies.trailervideo)


    return (
        <div>
            <iframe
                className='w-screen aspect-video'
                src={`https://www.youtube.com/embed/1t4BE7FA-rM?si=${trailerkey?.key}?&autoplay=1&mute=1&enablejsapi=1}`}
                title="YouTube video player"
                allow="accelerometer; 
                autoplay; 
                clipboard-write; 
                encrypted-media; gyroscope; 
                picture-in-picture; 
                web-share"

            ></iframe>
        </div>
    )
}

export default Backgroundvideo;