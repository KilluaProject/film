import Link from 'next/link'
import React from 'react'
import { useSearchParams } from 'next/navigation'

export const NavbarItem = ({tittle,param}) => {

cost searchParams = useSearchParams();
  return (
    <div>
        <Link className='text-white hover:text-gray-700 dark:hover:text-orange-300 transition-colors duration-300' href={`/?genre=${param}`}>
        {tittle}
        </Link>
    </div>
  )
}
