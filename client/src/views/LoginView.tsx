import React from 'react'
import { AiOutlineUserAdd } from 'react-icons/ai'
import { FcGoogle } from 'react-icons/fc'

export default function LoginView() {

  const handlerSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  }
  return (
    <div className='p-5'>

      <div className='bg-white relative mt-10 max-w-3xl mx-auto rounded-xl p-4 shadow-xl'>
        <div className=' rounded-full p-4 absolute -top-12 bg-white translate-x-1/2 right-1/2'>
          <AiOutlineUserAdd className='text-6xl' />
        </div>

        <div className='max-w-xl mx-auto py-12'>
          <h3 className='text-2xl font-bold text-center'>Registrarse</h3>

          <p className='text-center my-4 opacity-70'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, aliquid. Consequuntur fuga nobis harum pariatur, modi quaerat neque, ipsam obcaecati asperiores numquam architecto perspiciatis quidem, commodi voluptatem quas laborum atque?</p>

          <form onSubmit={handlerSubmit} className='w-full'>

            <label htmlFor="" className='flex flex-col w-full mt-4'>
            <input type="text" className='outline-none border-gray-300 rounded-xl border-2 shadow-xl text-base py-2 px-5' placeholder='Correo' />
            </label>
            <label htmlFor="" className='flex flex-col w-full mt-4'>
            <input type="text" className='outline-none border-gray-300 rounded-xl border-2 shadow-xl text-base py-2 px-5' placeholder='Contraseña' />
            </label>

            <div className='flex justify-center my-8 gap-6'>
              <button type="button" className=" bg-neutral-900 text-white  py-2 px-6 rounded-lg shadow-lg">Iniciar Sesión</button>

              <button type="button" className='py-2 px-6 flex items-center gap-2 shadow-lg'>Iniciar Sesión con Google <FcGoogle className='text-2xl' /></button>

            </div>


          </form>

          <p className=' opacity-60 text-center'>¿Olvidó su contraseña?</p>

        </div>


      </div>

      
    </div>
  )
}
