import { FormEvent } from 'react'
import { BiSearchAlt } from 'react-icons/bi'

export default function SearchBar() {

  const handlerSubmit = (e: FormEvent): void => {
    e.preventDefault()
  }

  return (
    <div className=' bg-secondColor py-[2px] px-2 w-96 rounded-md mx-auto my-3'>
      <form onSubmit={handlerSubmit} className='flex items-center'>
        <input type="text" className='h-full py-1 px-3 w-full outline-0 rounded-s-lg' />
        <button className='pl-2'>
          <BiSearchAlt className=' text-white text-3xl' />
        </button>
      </form>
    </div>
  )
}
