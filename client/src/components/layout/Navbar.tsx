import React from 'react'

export default function Navbar () {
  return (
    <header>
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
            <li>Compra</li>
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
