import React, { useState } from 'react'
import Header from './Header'

const Login = () => {
    const [issign, setIssign] = useState(true)
    const handelsign = () => {
        setIssign(!issign)

    }
    return (
        <div>
            <Header />
            <div className='absolute'>
                <img
                    alt='background'
                    src='https://assets.nflxext.com/ffe/siteui/vlv3/ca6a7616-0acb-4bc5-be25-c4deef0419a7/c5af601a-6657-4531-8f82-22e629a3795e/IN-en-20231211-popsignuptwoweeks-perspective_alpha_website_medium.jpg' />
            </div>
            <form className='bg-black absolute p-12 my-36 w-3/12 mx-auto right-0 left-0 h-[480px] bg-opacity-80 text-white '>
                <h1
                    className='font-bold  text-3xl py-4'>
                    {issign ? "Sign In" : "Sign Up"}</h1>
                {!issign &&
                    <input
                        className='p-2  my-4  w-full rounded-sm '
                        type='text'
                        placeholder='Enter Your Name ' />}
                <input
                    className='p-2  my-4  w-full rounded-sm '
                    type='text'
                    placeholder='Enter Email ' />
                <input
                    className='p-2 my-4 w-full rounded-sm'
                    type='password'
                    placeholder='Enter Password' />
                <button
                    className='p-2 my-6 w-full bg-red-800 rounded-sm'
                >{issign ?
                    "Sign In" : "Sign Up"}
                </button>
                <p
                    className='cursor-pointer'
                    onClick={handelsign}>
                    {issign?"New to Netflix? Sign Up Now":"Already login Sign In please..."}</p>
            </form>

        </div>
    )
}

export default Login