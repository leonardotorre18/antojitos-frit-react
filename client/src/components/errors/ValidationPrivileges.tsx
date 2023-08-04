import React from 'react'
import { context } from '../../context/Context'
import { Navigate } from 'react-router-dom'
import { Privileges } from '../../context/actions/User'

type Props = {
  children: React.ReactNode,
}

export default function ValidationPrivileges({ children }: Props) {

  const { state } = React.useContext(context)

  console.log(state.user)


  return (
    <>
      {
        state.user?.privileges === Privileges.ADMIN ? 
        children : <Navigate to={'/cart'} />
      }
    </>
  )
}
