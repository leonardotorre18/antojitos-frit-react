import React from 'react'
import { Navigate } from 'react-router-dom'
import { context } from '../../context/Context'

type Props = {
  children: React.ReactNode,
  invert?: boolean,
  to: string
}
export default function ValidationUser({
  children,
  invert,
  to
}: Props) {

  const { state } = React.useContext(context)

  return invert ? (
    <>
      {
        state.user ?
        <Navigate to={to} /> :
        children
      }
    </>
  ) : (
    <>
      {
        state.user ? 
        children :
        <Navigate to={to} />
      }
    </>
  )
}
