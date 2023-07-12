import { AiOutlineUserAdd } from 'react-icons/ai';
import { Outlet } from 'react-router-dom';



export default function SignView() {

  return (
    <div className='p-5'>

      <div className='bg-white relative mt-10 max-w-3xl mx-auto rounded-xl p-4 shadow-xl'>
        <div className=' rounded-full p-4 absolute -top-12 bg-white translate-x-1/2 right-1/2'>
          <AiOutlineUserAdd className='text-6xl' />
        </div>

        <div className='max-w-xl mx-auto py-12'>
          <h3 className='text-2xl font-bold text-center'>Registrarse</h3>

          <p className='text-center my-4 opacity-70'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, aliquid. Consequuntur fuga nobis harum pariatur, modi quaerat neque, ipsam obcaecati asperiores numquam architecto perspiciatis quidem, commodi voluptatem quas laborum atque?
          </p>

          <Outlet />

          <p className=' opacity-60 text-center'>¿Olvidó su contraseña?</p>

        </div>


      </div>

    </div>
  )
}
