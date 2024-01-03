import React from 'react'

const VideoTitle = ({ title, overview }) => {
    return (
        <>
            <div className='pt-0 md:pt-80 px-12 text-white absolute '>
                <h1 className=' mt-32 md:mt-0  md:text-3xl font-bold text-red-600'>{title}</h1>
                <p className='hidden md:inline-block w-4/12 md:text-lg'>{overview}</p>

                <div className='flex mt-4 flex-col md:flex-row '>
                    <button className='w-20 bg-white md:w-32 rounded-md h-9 mx-3 text-black hover:bg-opacity-80 text-sm '   >▶ Play</button>
                    <button className='hidden md:inline-block bg-gray-400 px-9 rounded-sm h-9 text-sm' >MoreInfo</button>
                </div>
            </div>
        </>

    )
}

export default VideoTitle