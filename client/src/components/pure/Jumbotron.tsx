import React from 'react'
import logoPng from '../../assets/logo.png'
import backgroundJpg from '../../assets/background1.jpg'

export default function Jumbotron() {
  return (
    <div className='relative h-screen'>
      <div className='w-full h-full blur opacity-80'>
        <img
          className='w-full h-full object-cover'
          src={backgroundJpg} 
          alt="Tarta de chocolate"
        />
      </div>
      <div className='w-full h-full top-0 left-0 absolute flex items-center justify-center'>
        <img
          className='w-80'
          src={logoPng}
          alt="Propietario de Local"
        />
      </div>
    </div>
  )
}
