import React from 'react'

import { Link } from "react-router-dom"
import { BiMenu } from "react-icons/bi"

export default function Navbar () {
  const [showMenu, setShowMenu] = React.useState<boolean>(false);

  const toggleMenu = (): void => setShowMenu(!showMenu)

  return (
    <header className=' sticky top-0 left-0 w-full bg-white z-20'>
      <nav className='flex justify-between items-center p-4'>
        <span
          className='font-secondFont text-4xl'
        >Antojitos Frit</span>
        <div
          className={`flex gap-5 font-medium absolute sm:static bg-white left-0 w-screen sm:w-auto top-16 ${showMenu ? 'left-0' : 'left-full'} p-10 sm:p-0 flex-col sm:flex-row items-center justify-center transition-all`}
        >
          <ul
            className='flex gap-3 items-center'
          >
            <Link to={'/'}>Inicio</Link>
            <Link to={'/products'}>Tienda</Link>
            <Link to={'/cart'}>Carrito</Link>
          </ul>
          <div
            className='flex gap-3'
          >
            <button
              type='button'
              className=' bg-gray-300 px-3 py-1 rounded-full'
            >
              Sign In
            </button>
            <button
              type='button'
              className=' bg-gray-300 px-3 py-1 rounded-full'
            >
              Sign Up
            </button>
          </div>
        </div>
        <BiMenu className=" text-4xl text-secondColor cursor-pointer sm:hidden" onClick={toggleMenu} />
      </nav>
    </header>
  )
}
