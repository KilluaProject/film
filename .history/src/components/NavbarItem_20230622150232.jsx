import Link from 'next/link'
import React from 'react'

export const NavbarItem = ({tittle,param}) => {
  return (
    <div>
        <Link className='text-white hover:text-gray-700' href={`/?genre=${param}`}>
        {tittle}
        </Link>
    </div>
  )
}
