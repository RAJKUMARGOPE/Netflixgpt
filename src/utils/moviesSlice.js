import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name: "movies",
    initialState: {
        nowplaying: null,
        trailervideo: null,
    },
    reducers: {
        addnowPlayingMovies: (state, action) => {
            state.nowplaying = action.payload
        },
        addtrailervideo: (state, action) => {
            state.trailervideo = action.payload
        }
    }
})
export const { addnowPlayingMovies, addtrailervideo } = moviesSlice.actions
export default moviesSlice.reducer;