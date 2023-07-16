// import React from 'react'


type Props = {
  validation: boolean | string
}
export default function ErrorSign({ validation }: Props) {
  return (
    <>
    {
      validation ? <p className='w-fit bg-red-700 text-white rounded-lg mx-auto py-1 px-6'>{validation}</p>
      : <></>
    }
    </>
  )
}
