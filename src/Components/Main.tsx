import React from 'react'
import Menu from './Menu'

interface MainProps{
    children: React.ReactNode,
}
export default function Main({ children }: MainProps): JSX.Element {
  return (
    <div>
        <Menu />
        {children}
    </div>
  )
}
