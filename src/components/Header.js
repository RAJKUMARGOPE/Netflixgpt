import React, { useEffect, useRef } from 'react'
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser, toggeleUser } from '../utils/userSlice';
import { LOGO, SUPORTED_LANGUAGE } from '../utils/constants';
import { toggelGptSearchView } from "../utils/gptSlice"
import { changeLanguage } from '../utils/configSlice';
import { Avatar } from "@material-tailwind/react";
import Userinfo from './Userinfo';

const Header = () => {

    const userMenu = useRef()

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const showGptSearch = useSelector((store) => store?.gpt?.showGptSearch)
    const user = useSelector((store) => store?.user?.userDetails)

    const handelToggelgpt = () => {
        dispatch(toggelGptSearchView())

    }
    useEffect(() => {
        const handeler = (e) => {
            if (userMenu.current && !userMenu.current.contains(e.target)) {
                dispatch(toggeleUser(false))
            }
            
        }
        document.addEventListener("mousedown", handeler)
        return (() => document.removeEventListener("mousedown", handeler))
    })

    useEffect(() => {
        const Unsuscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                const { email, uid, displayName } = user;
                dispatch(addUser({
                    uid: uid,
                    email: email,
                    displayName: displayName
                }))
                navigate("/browse")
            } else {
                dispatch(removeUser())
                navigate("/")
            }

        },);
        return () => Unsuscribe();
    }, [])
    const handellanguagechange = (e) => {
        dispatch(changeLanguage(e.target.value))
    }
    const handelusertoggel = () => {
        dispatch(toggeleUser())

    }
    return (
        <>
            <div className='fixed  w-screen  bg-gradient-to-b from-black z-50 flex justify-between flex-col md:flex-row'>
                <img
                    className='w-44 mx-auto md:mx-0'
                    alt='logo'
                    src={LOGO} />
                {user && <div className='flex my-3 ml-8 justify-between'>
                    <div>
                        {showGptSearch && <select className='py-3 px-3 rounded-e-md bg-gray-700 text-white mr-3' onChange={handellanguagechange}>
                            {SUPORTED_LANGUAGE?.map((language) =>
                                <option
                                    key={language.identifier}
                                    value={language.identifier}>
                                    {language.name}
                                </option>)}
                        </select>}
                    </div>
                    <div className='mr-14'>
                        <button className='bg-purple-600 text-white py-2 px-3 rounded-md' onClick={handelToggelgpt}>
                            {showGptSearch ? "Home Page" : "Gpt search"}
                        </button>
                    </div>
                    <div>
                        <Avatar
                            onClick={handelusertoggel}
                            variant="circular"
                            alt="userName"
                            className="border-2 border-white hover:z-10 focus:z-10 md:mr-20 cursor-pointer"
                            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"

                        />
                    </div>
                </div>}
            </div>
            {user && <div ref={userMenu} className='fixed z-40  pt-16 pl-[1530px]
            '>
                <Userinfo />
            </div>}

        </>


    )
}

export default Header