import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <section className="relative bg-black text-white py-12 border-t-4 border-green-500">
      <div className="relative z-10 mx-auto max-w-7xl px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full p-6 md:w-1/2 lg:w-2/12">
            <h3 className="mb-6 text-sm font-semibold uppercase text-gray-400 tracking-wide">Company</h3>
            <ul>
              <li className="mb-4">
                <Link className="text-base font-medium hover:text-blue-400 hover:font-bold transition-colors" to="/">
                  Features
                </Link>
              </li>
              <li className="mb-4">
                <Link className="text-base font-medium hover:text-blue-400 hover:font-bold transition-colors" to="/">
                  Pricing
                </Link>
              </li>
              <li className="mb-4">
                <Link className="text-base font-medium hover:text-blue-400 hover:font-bold transition-colors" to="/">
                  Affiliate Program
                </Link>
              </li>
              <li>
                <Link className="text-base font-medium hover:text-blue-400 hover:font-bold transition-colors" to="/">
                  Press Kit
                </Link>
              </li>
            </ul>
          </div>
          <div className="w-full p-6 md:w-1/2 lg:w-2/12">
            <h3 className="mb-6 text-sm font-semibold uppercase text-gray-400 tracking-wide">Support</h3>
            <ul>
              <li className="mb-4">
                <Link className="text-base font-medium hover:text-blue-400 hover:font-bold transition-colors" to="/">
                  Account
                </Link>
              </li>
              <li className="mb-4">
                <Link className="text-base font-medium hover:text-blue-400 hover:font-bold transition-colors" to="/">
                  Help
                </Link>
              </li>
              <li className="mb-4">
                <Link className="text-base font-medium hover:text-blue-400 hover:font-bold transition-colors" to="/">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link className="text-base font-medium hover:text-blue-400 hover:font-bold transition-colors" to="/">
                  Customer Support
                </Link>
              </li>
            </ul>
          </div>
          <div className="w-full p-6 md:w-1/2 lg:w-3/12">
            <h3 className="mb-6 text-sm font-semibold uppercase text-gray-400 tracking-wide">Legals</h3>
            <ul>
              <li className="mb-4">
                <Link className="text-base font-medium hover:text-blue-400 hover:font-bold transition-colors" to="/">
                  Terms &amp; Conditions
                </Link>
              </li>
              <li className="mb-4">
                <Link className="text-base font-medium hover:text-blue-400 hover:font-bold transition-colors" to="/">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link className="text-base font-medium hover:text-blue-400 hover:font-bold transition-colors" to="/">
                  Licensing
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 flex flex-col items-center">
          <div className="mb-4">
            <img width="100px" alt="Company Logo" />
          </div>
          <p className="text-sm text-gray-400">
            &copy; 2023 DevUI. All Rights Reserved.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Footer
