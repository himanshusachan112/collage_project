import React, { useState } from 'react'
import Logo from '../Logo'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import LogoutBtn from './LogoutBtn'

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const authStatus = useSelector((state) => state.Auth.token)
  const navigate = useNavigate()

  const navItems = [
    { name: 'Home', slug: "/", active: true },
    { name: "Contact Us", slug: "/contact-us", active: true },
    { name: "About Us", slug: "/about-us", active: true },
    { name: "Login", slug: "/login", active: !authStatus, special: true },
    { name: "Signup", slug: "/signup", active: !authStatus, special: true },
  ]

  return (
    <header className={`bg-gradient-to-r from-gray-900 to-black text-white shadow-lg ${isMenuOpen ? 'h-screen' : 'h-auto'} transition-all duration-300 ease-in-out`}>
      <div className={`container mx-auto flex items-center justify-between py-4 px-6 ${isMenuOpen ? 'justify-center' : 'justify-between'}`}>
        <Link to='/' className='flex items-center'>
          <Logo width='50px' className={`w-[50px] sm:w-[70px] ${isMenuOpen ? 'm-auto' : ''}`} />
          {!isMenuOpen && (
            <span className='ml-2 text-xl sm:text-2xl font-bold'>CareerSync</span>
          )}
        </Link>
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className='sm:hidden text-white focus:outline-none'
        >
          <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4 6h16M4 12h16m-7 6h7' />
          </svg>
        </button>
        {/* This nav is hidden on mobile devices */}
        <nav className={`hidden sm:flex items-center space-x-4 sm:space-x-6`}>
          <ul className='flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6'>
            {navItems.map((item) =>
              item.active ? (
                <li key={item.name} className='relative'>
                  <button
                    onClick={() => navigate(item.slug)}
                    className={`relative z-10 px-4 py-2 sm:px-6 sm:py-2 text-sm sm:text-base font-medium rounded-full transition-transform duration-300 transform hover:scale-105 shadow-md hover:shadow-lg overflow-hidden ${
                      item.special
                        ? 'bg-black text-white border-2 border-transparent'
                        : 'bg-black text-white border-2 border-transparent hover:bg-white hover:text-black'
                    }`}
                  >
                    <span className='relative z-10'>{item.name}</span>
                    <span className={`absolute inset-0 border-2 ${item.special ? 'border-transparent bg-gradient-to-r from-blue-500 to-purple-600' : 'border-transparent'} rounded-full -z-10`}></span>
                  </button>
                </li>
              ) : null
            )}
            {authStatus && (
              <li>
                <LogoutBtn />
              </li>
            )}
          </ul>
        </nav>
      </div>
      {/* Dropdown List for Mobile */}
      <div className={`sm:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
        <ul className='flex flex-col space-y-4 px-6 py-4 bg-black'>
          {navItems.map((item) =>
            item.active ? (
              <li key={item.name} className='relative'>
                <button
                  onClick={() => {
                    navigate(item.slug)
                    setIsMenuOpen(false) // Close menu after navigation
                  }}
                  className={`relative z-10 w-full text-left px-4 py-2 text-sm font-medium rounded-lg transition-transform duration-300 transform hover:scale-105 shadow-md hover:shadow-lg overflow-hidden ${
                    item.special
                      ? 'bg-black text-white border-2 border-transparent'
                      : 'bg-black text-white border-2 border-transparent hover:bg-white hover:text-black'
                  }`}
                >
                  <span className='relative z-10'>{item.name}</span>
                  <span className={`absolute inset-0 border-2 ${item.special ? 'border-transparent bg-gradient-to-r from-blue-500 to-purple-600' : 'border-transparent'} rounded-lg -z-10`}></span>
                </button>
              </li>
            ) : null
          )}
          {authStatus && (
            <li>
              <LogoutBtn />
            </li>
          )}
        </ul>
      </div>
    </header>
  )
}

export default Header
