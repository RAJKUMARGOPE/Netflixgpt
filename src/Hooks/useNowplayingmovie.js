import { useEffect } from "react"
import { addnowPlayingMovies } from "../utils/moviesSlice"
import { API_OPTIONS } from "../utils/constants"
import { useDispatch } from "react-redux"

const useNowPlayingMovie = () => {
    const dispatch = useDispatch()
    const getNowPlayingMovies = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', API_OPTIONS)
        const response = await data.json()
        dispatch(addnowPlayingMovies(response.results))
    }
    useEffect(() => {
        getNowPlayingMovies()
    }, [])
}
export default useNowPlayingMovie;