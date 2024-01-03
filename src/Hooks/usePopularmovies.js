import { useEffect } from "react"
import { API_OPTIONS } from "../utils/constants"
import { useDispatch, useSelector } from "react-redux"
import { addpopularmovies } from "../utils/moviesSlice"

const usePopularmovies=()=>{
    const popularmovies = useSelector((store)=>store.movies.popularmovies)
    const dispatch = useDispatch()
   const getPopularmovies=async()=>{
    const data = await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1',API_OPTIONS)
    const response = await data.json()
   dispatch(addpopularmovies(response))


   }
   useEffect(()=>{
    !popularmovies && getPopularmovies()
   },[])
}
export default usePopularmovies;