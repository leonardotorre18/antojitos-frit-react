// import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Product } from '../../types';


export default function Card({product}: {product: Product}) {
  
  const {
    id,
    title,
    subtitle,
    imgPath
  } = product
   
  const navigate = useNavigate();

  const navigateToProduct = () => {
    navigate('/products/' + id)
  } 

  return (
    <div
      onClick={navigateToProduct}
      className='mx-auto w-full sm:w-56 bg-white shadow-lg shadow-[#dddddd] rounded-lg overflow-hidden'
    >
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
