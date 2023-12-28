import React, { useEffect } from 'react'
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { LOGO } from '../utils/constants';

const Header = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const user = useSelector((store) => store.user)
    const handelSignOut = () => {
        signOut(auth).then(() => {

        }).catch((error) => {
            // An error happened.
        });
    }

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
    return (
        <>
            <div className='absolute w-screen  bg-gradient-to-b from-black z-30 flex justify-between'>
                <img
                    className='w-44'
                    alt='logo'
                    src={LOGO} />
                {user && <div >
                    <h3 className='mr-28 text-white'>Displayname:{user.displayName}</h3>
                    <h4 className='text-white cursor-pointer' onClick={handelSignOut}>Signout</h4>
                </div>
                }
            </div>

        </>

    )
}

export default Header