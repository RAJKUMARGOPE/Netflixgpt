import React from 'react'
import { useSelector } from 'react-redux';
import VideoTitle from './VideoTitle';
import Backgroundvideo from './Backgroundvideo';



const MainContainer = () => {
    const movie = useSelector((store) => store.movies?.nowplaying)
    if (movie === null) return
    const Mainmovie = movie[0]
    const {original_title,overview,id} = Mainmovie
  

    return (
        <div className='pt-[30%] bg-black md:pt-0 ' >
            <VideoTitle  title={original_title} overview={overview}/>
            <Backgroundvideo movieid={id}/>
           
        </div>
    )
}

export default MainContainer;