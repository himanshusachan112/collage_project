import React from 'react'
import {useDispatch} from 'react-redux'

function LogoutBtn() {
    const dispatch = useDispatch()
    const logoutHandler = () => {
        console.log("logged out");
    }
  return (
    <button className={`relative z-10 px-6 py-2 text-base font-medium rounded-full transition-transform duration-300 transform hover:scale-105 shadow-md hover:shadow-lg overflow-hidden `}
  >
    <span className='relative z-10'>Logout</span>
                    {/* Gradient border effect */}
                    <span className={`absolute inset-0 border-2 border-transparent bg-gradient-to-r from-blue-500 to-purple-600 rounded-full -z-10`}></span>
  </button>
  )
}

export default LogoutBtn