// import React from 'react'
import {TProduct} from '../../store/types'

export default function Card({product}: {product: TProduct}) {

  const {
    // id,
    title,
    subtitle,
    imgPath
  } = product
  
  return (
    <div className='mx-auto w-full sm:w-56 bg-white shadow-lg shadow-[#dddddd] rounded-lg overflow-hidden'>
      <div className='w-full'>
        <img
          className='w-full h-full object-cover'
          src={imgPath}
          alt=""
        />
      </div>
      <div className=' font-mainFont px-8 pt-3 pb-10'>
        <h4 className=' font-semibold text-lg leading-tight mb-3'>{title}</h4>
        <p className=' opacity-60 leading-tight'>{subtitle}</p>
      </div>
    </div>
  )
}
