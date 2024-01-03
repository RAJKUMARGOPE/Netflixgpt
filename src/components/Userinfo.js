import { signOut } from 'firebase/auth'
import React from 'react'
import { useSelector } from 'react-redux'
import { auth } from '../utils/firebase'

const Userinfo = () => {
    const user = useSelector((store) => store?.user?.userDetails)
    const showUser = useSelector((store)=> store?.user?.showUser)
    const handelSignOut = () => {
        signOut(auth).then(() => {

        }).catch((error) => {
            // An error happened.
        });
    }
    return showUser && (
        <div className='bg-white 300 h-28 w-36 fixed z-50 '>
           <h2 className=' text-blue-gray-500 font-bold capitalize text-center pt-6  '>{user?.displayName}</h2>
            <button className=' text-blue-gray-500 pt-3 pl-11 text-sm cursor-pointer hover:text-red-400' onClick={handelSignOut}>Sign out</button>
     </div> 
    )
}

export default Userinfo