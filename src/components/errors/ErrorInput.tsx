import React from 'react';

type Props = {
  message: string
}

export default function ErrorInput({ message } : Props) {
  return (
    <div
      // className='flex gap-1 items-center bg-white my-2 bg-opacity-40 px-2'
      className='w-fit flex gap-1 items-center text-white my-2 bg-red-700 px-4 py-1 rounded-lg'
    >
      {/* <GrFormClose className='text-xl text-white' /> */}
      { message }
  </div>
  )
}
