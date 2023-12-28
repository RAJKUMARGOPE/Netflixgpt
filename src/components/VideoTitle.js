import React from 'react'

const VideoTitle = ({ title, overview }) => {
    return (
        <>
            <div className=' pt-80 px-12 text-white absolute '>
                <h1 className='text-lg font-bold text-black'>{title}</h1>
                <p className='w-4/12 text-sm'>{overview}</p>

                <div className='flex mt-4'>
                    <button className=' bg-white px-7 rounded-sm h-9 mx-3 text-black hover:bg-opacity-80 text-sm'   >▶ Play</button>
                    <button className=' bg-gray-400 px-9 rounded-sm h-9 text-sm' >MoreInfo</button>
                </div>
            </div>
        </>

    )
}

export default VideoTitle