import React, { useEffect } from 'react'
import Browse from './Browse'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from './Login';
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase"
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';


const Body = () => {
    
    const Approuter = createBrowserRouter([
        {
            path: "/",
            element: <Login />
        },
        {
            path: "/browse",
            element: <Browse />
        }

    ])

    return (
        <>

            <RouterProvider router={Approuter} />
        </>

    )

}

export default Body;