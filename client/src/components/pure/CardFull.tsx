import { TProduct } from "../../store/types"

export default function CardFull({product}: {product: TProduct}) {

  const {
    id,
    title,
    subtitle,
    imgPath
  } = product
  
  return (
    <div className='max-w-7xl mx-auto w-full bg-white shadow-lg shadow-[#dddddd] rounded-lg overflow-hidden' key={id}>
      <div className='w-full  max-h-32 md:max-h-60 overflow-y-hidden'>
        <img
          className='w-full h-full object-cover'
          src={imgPath}
          alt=""
        />
      </div>
      <div className=' font-mainFont px-8 pt-3 pb-10 bg-white'>
        <h4 className=' font-semibold text-lg leading-tight mb-3'>{title}</h4>
        <p className=' opacity-60 leading-tight'>{subtitle}</p>
      </div>
    </div>
  )
}