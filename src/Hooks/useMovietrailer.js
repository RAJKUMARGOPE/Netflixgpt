import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { addtrailervideo } from '../utils/moviesSlice'
import { API_OPTIONS } from '../utils/constants'

const useMovietrailer = (movieid) => {
    const dispatch = useDispatch()
    const getmovievideo = async () => {
        const data = await fetch(`https://api.themoviedb.org/3/movie/${movieid}/videos?language=en-US`, API_OPTIONS)
        const response = await data.json()
        const filterdata = response.results.filter((video) => video.type === "Trailer")
        const trailer = filterdata.length === 0 ? response.results[0] : filterdata[0]
        dispatch(addtrailervideo(trailer))
    }
    useEffect(() => {
        getmovievideo()
    }, [])

}

export default useMovietrailer;