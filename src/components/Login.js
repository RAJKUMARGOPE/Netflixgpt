import React, { useRef, useState } from 'react'
import Header from './Header'
import { checkvalidate } from '../utils/Checkvalidate'
import { auth } from '../utils/firebase'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";





const Login = () => {
  
  
    const [issign, setIssign] = useState(true)
    const [errorMessage, setErrorMessage] = useState(null)
    const name = useRef(null)
    const email = useRef(null)
    const password = useRef(null)
    const handelsign = () => {
        setIssign(!issign)
    }
    const handelsubmit = () => {
        const validate = checkvalidate(email.current.value, password.current.value)
        setErrorMessage(validate)
        if (validate) return
        if (!issign) {
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed up 
                    const user = userCredential.user;
                    updateProfile(user, {
                        displayName: name.current.value,
                        photoURL: "https://example.com/jane-q-user/profile.jpg"
                    })})
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(errorCode + "" + errorMessage)
                    // ..
                });

        } else {
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                    
                    // ...
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(errorCode + "" + errorMessage)
                });

        }

    }
    return (
        <div>
            <Header />
            <div className='absolute'>
                <img
                    alt='background'
                    src='https://assets.nflxext.com/ffe/siteui/vlv3/ca6a7616-0acb-4bc5-be25-c4deef0419a7/c5af601a-6657-4531-8f82-22e629a3795e/IN-en-20231211-popsignuptwoweeks-perspective_alpha_website_medium.jpg' />
            </div>
            <form
                onSubmit={(event) => event.preventDefault()}
                className='bg-black absolute p-12 my-36 w-3/12 mx-auto right-0 left-0 h-[480px] bg-opacity-80 text-white '>
                <h1
                    className='font-bold  text-3xl py-4'>
                    {issign ? "Sign In" : "Sign Up"}</h1>
                {!issign &&
                    <input
                        ref={name}
                        className='p-2  my-4  w-full rounded-sm  text-black'
                        type='text'
                        placeholder='Enter Your Name ' />}
                <input
                    ref={email}
                    className='p-2  my-4  w-full rounded-sm  text-black'
                    type='text'
                    placeholder='Enter Email ' />

                <input
                    ref={password}
                    className='p-2 my-4 w-full rounded-sm text-black'
                    type='password'
                    placeholder='Enter Password' />
                <p className='font-bold text-red-500 text-sm'>{errorMessage}</p>
                <button
                    onClick={handelsubmit}
                    className='p-2 my-6 w-full bg-red-800 rounded-sm'
                >{issign ?
                    "Sign In" : "Sign Up"}
                </button>
                <p
                    className='cursor-pointer'
                    onClick={handelsign}>
                    {issign ? "New to Netflix? Sign Up Now" : "Already login Sign In please..."}</p>
            </form>

        </div>
    )
}

export default Login;