import React from 'react'

import { Link } from "react-router-dom"
import { BiMenu } from "react-icons/bi"
import { context } from '../../context/Context';
import { getAuth, signOut } from 'firebase/auth';
import ValidationPrivileges from '../errors/ValidationPrivileges';

export default function Navbar () {
  const [showMenu, setShowMenu] = React.useState<boolean>(false);
  const {state} = React.useContext(context)

  const toggleMenu = (): void => setShowMenu(!showMenu)
  const hiddeMenu = (): void => setShowMenu(false)

  const handlerLogOut = () => signOut(getAuth())

  return (
    <header
      className='sticky top-0 left-0 w-screen bg-white z-20 shadow-lg'
    >
      <nav 
        className='flex justify-between items-center p-4 overflow-hidden'
      >
        <span
          className='font-secondFont text-4xl'
        >
          Antojitos Frit
        </span>
        <div
          className={`
            flex gap-5 p-10 flex-col items-center
            sm:flex-row sm:p-0 sm:w-auto sm:static
            font-medium top-16 transition-all
            absolute bg-white w-full
            ${ showMenu ? 'left-0' : ' -left-full' }
          `}
        >
          <ul
            className='flex gap-3 items-center'
            onClick={hiddeMenu}
          >
            <Link to={'/'}>Inicio</Link>
            <Link to={'/products'}>Tienda</Link>
            <Link to={'/cart'}>Carrito</Link>
            <ValidationPrivileges>
              <Link to={'/admin'}>Dashboard</Link>
            </ValidationPrivileges>
          </ul>

          { 
            state.user ? (
              <button
                type='button'
                className='bg-gray-300 px-3 py-1 rounded-full'
                onClick={handlerLogOut}
              >
                LogOut
              </button>
            ) : (
          <div
            className='flex gap-3'
            onClick={hiddeMenu}
          >
            <Link to="/login">
              <button
                type='button'
                className='bg-gray-300 px-3 py-1 rounded-full'
              >
                Sign In
              </button>
            </Link>
            <Link to="/register">
              <button
                type='button'
                className='bg-gray-300 px-3 py-1 rounded-full'
              >
                Sign Up
              </button>

            </Link>
          </div>
            )
          }
        
        </div>
      <BiMenu className=" text-4xl text-secondColor cursor-pointer sm:hidden" onClick={toggleMenu} /> 
      </nav>
    </header>
  )
}
