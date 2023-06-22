import Link from 'next/link'
import React from 'react'

export const NavbarItem = ({tittle,param}) => {
  return (
    <div>
        <Link href={`/?genre=${param}`}>
        
        
        </Link>
    </div>
  )
}
