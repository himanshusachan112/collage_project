import React from 'react'
import logo from '../images/logo.jpeg'


function Logo({width = '100px'}) {
  return (
    <div><img src={logo} alt="Logo" className=' w-28 rounded-2xl h-12' /></div>
  )
}

export default Logo