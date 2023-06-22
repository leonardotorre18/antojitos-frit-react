import React from 'react'
import logoPng from '../../assets/logo.png'
import backgroundJpg from '../../assets/background1.jpg'

export default function Jumbotron() {
  return (
    <div className='relative overflow-hidden'>
      <div className='w-full blur opacity-80 absolute -z-10'>
        <img
          className='w-full object-cover'
          src={backgroundJpg} 
          alt="Tarta de chocolate"
        />
      </div>
      <div className='w-full flex items-center justify-center py-14'>
        <img
          className='w-80'
          src={logoPng}
          alt="Propietario de Local"
        />
      </div>
    </div>
  )
}
