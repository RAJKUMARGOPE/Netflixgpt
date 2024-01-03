import React, { useEffect } from 'react'
import Browse from './Browse'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from './Login';



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