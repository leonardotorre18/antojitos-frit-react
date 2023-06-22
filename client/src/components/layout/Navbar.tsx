import React from 'react'

export default function Navbar () {
  return (
    <header className=' sticky top-0 left-0 w-full bg-white z-20'>
      <nav className='flex justify-between items-center p-4'>
        <span
          className='font-secondFont text-4xl'
        >Antojitos Frit</span>
        <div
          className='flex gap-5 font-medium'
        >
          <ul
            className='flex gap-3 items-center'
          >
            <li>Inicio</li>
            <li>Tienda</li>
            <li>Carrito</li>
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
      </nav>
    </header>
  )
}
