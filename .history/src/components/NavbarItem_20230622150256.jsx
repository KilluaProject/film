import Link from 'next/link'
import React from 'react'

export const NavbarItem = ({tittle,param}) => {
  return (
    <div>
        <Link className='text-white hover:text-gray-700 dark:hover:text-orange-300' href={`/?genre=${param}`}>
        {tittle}
        </Link>
    </div>
  )
}
