import React from 'react'
import Logo from '../Logo'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import LogoutBtn from './LogoutBtn'

function Header() {
  const authStatus = useSelector((state) => state.Auth.token)
  const navigate = useNavigate()

  const navItems = [
    { name: 'Home', slug: "/", active: true },
    { name: "Contact Us", slug: "/contact", active: true },
    { name: "About Us", slug: "/about", active: true },
    { name: "Login", slug: "/login", active: !authStatus, special: true },
    { name: "Signup", slug: "/signup", active: !authStatus, special: true },
  ]

  return (
    <header className='bg-gradient-to-r from-gray-900 to-black text-white shadow-lg'>
      <div className='container mx-auto flex items-center justify-between py-4 px-6'>
        <Link to='/' className='flex items-center'>
          <Logo width='70px' />
          <span className='ml-3 text-2xl font-bold'>YourBrand</span> {/* Optional Brand Name */}
        </Link>
        <nav className='flex items-center space-x-6'>
          <ul className='flex space-x-6'>
            {navItems.map((item) => 
              item.active ? (
                <li key={item.name} className='relative'>
                  <button
                    onClick={() => navigate(item.slug)}
                    className={`relative z-10 px-6 py-2 text-base font-medium rounded-full transition-transform duration-300 transform hover:scale-105 shadow-md hover:shadow-lg overflow-hidden ${
                      item.special
                        ? 'bg-black text-white border-2 border-transparent'
                        : 'bg-black text-white border-2 border-transparent hover:bg-white hover:text-black'
                    }`}
                  >
                    <span className='relative z-10'>{item.name}</span>
                    {/* Gradient border effect */}
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
    </header>
  )
}

export default Header
