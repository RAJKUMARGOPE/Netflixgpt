import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import languageConstant from '../utils/languageConstant'
import openai from "../utils/gptopeai"
import { API_OPTIONS } from '../utils/constants'
import { addGptMovies } from '../utils/gptSlice'

const GptSearch = () => {
    const SearchText = useRef(null)
    const dispatch = useDispatch()
    const language = useSelector((store) => store?.config?.language)


    const searchMovieTmdb = async (movie) => {
        const data = await fetch(
            `https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=false&language=en-US&page=1`
            , API_OPTIONS)
        const response = await data.json();
        return response.results;

    }

    const handelgptsearchclick = async () => {
        const gptQuery = `
        Act as a movie recomendation system and suggest some movies for the query 
        :${SearchText.current.value}.only give me names of five movies , 
        comma seprated like the example ahead Result:Gadar,Shole,Don,Golmal,koi mil gaya `

        const gptResult = await openai.chat.completions.create({
            messages: [{ role: 'user', content: gptQuery }],
            model: 'gpt-3.5-turbo',
        });
        // handel here errr------------------------------------------------------------
        // if (!gptResult.choices) { "then show here error handling navigate to error page" }

        console.log(gptResult.choices?.[0].message?.content)
        const gptMovielist = gptResult.choices?.[0].message?.content.split(",")

        const promiseArray = gptMovielist.map((movie) => searchMovieTmdb(movie))
        const tmdbResults = await Promise.all(promiseArray)
        dispatch(addGptMovies({ movieNames: gptResult, movieResult: tmdbResults }))

    }
    return (
        <div className='pt-[35%] md:pt-[5%] flex justify-center px-4 md:px-0'>
            <form className=' bg-black grid grid-cols-12 p-3  ' onSubmit={(e) => e.preventDefault()}>
                <input
                    ref={SearchText}
                    className='p-3 w-full md:w-96  rounded-md bg-slate-700 col-span-9'
                    type='text'
                    placeholder={languageConstant.hindi?.gptserachplaceholder}
                />
                <button className='bg-red-600 py-2 px-10 text-white rounded-md col-span-3 ml-3' onClick={handelgptsearchclick}>{languageConstant.hindi?.search}</button>
            </form>
        </div>
    )
}

export default GptSearch