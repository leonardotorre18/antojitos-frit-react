// import React from 'react'
import {TProduct} from '../../store/types'

export default function Card({product}: {product: TProduct}) {

  const {
    id,
    title,
    subtitle,
    imgPath
  } = product
  
  return (
    <div className=' mx-auto w-2/3 h-72 bg-white shadow-lg rounded-lg overflow-hidden' key={id}>
      <div className='h-1/2'>
        <img
          className='w-full h-full object-cover'
          src={imgPath}
          alt=""
        />
      </div>
      <div className='h-1/2'>
        <h4>{title}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  )
}
