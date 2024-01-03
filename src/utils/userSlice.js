import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: {
        userDetails: null,
        showUser: false
    },
    reducers: {
        addUser: (state, action) => {
            state.userDetails = action.payload
        },
        toggeleUser: (state) => {
            state.showUser = !state.showUser
        },
        removeUser: (state) => {
            state.userDetails = null
        }
    }
})
export const { addUser, removeUser,toggeleUser } = userSlice.actions;
export default userSlice.reducer