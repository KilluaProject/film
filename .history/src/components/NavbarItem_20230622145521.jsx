import Link from 'next/link'
import React from 'react'

export const NavbarItem = ({tittle,param}) => {
  return (
    <div>
        <Link className='hover:text-orange-300' href={`/?genre=${param}`}>
        {tittle}
        </Link>
    </div>
  )
}
