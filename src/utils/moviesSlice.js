import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name: "movies",
    initialState: {
        nowplaying: null,
        popularmovies:null,
        trailervideo: null,
       
    },
    reducers: {
        addnowPlayingMovies: (state, action) => {
            state.nowplaying = action.payload
        },
        addpopularmovies: (state, action) => {
            state.popularmovies = action.payload
        },
        addtrailervideo: (state, action) => {
            state.trailervideo = action.payload
        }
    }
})
export const { addnowPlayingMovies, addtrailervideo,addpopularmovies } = moviesSlice.actions
export default moviesSlice.reducer;