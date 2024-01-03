import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "./moviesSlice"
import gptReducer from "./gptSlice"
import userReducer from "./userSlice"
import configReducer from "./configSlice"


const appStore = configureStore({
    reducer: {
        user: userReducer,
        movies: moviesReducer,
        gpt: gptReducer,
        language:configReducer,
    }
})
export default appStore;