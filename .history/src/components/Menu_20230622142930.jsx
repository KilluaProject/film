import Link from 'next/link'
import React from 'react'

const Menu = ({tittle, address, Icon}) => {
  return (
    <div>
        <Link href={address}>
        <Icon className="text-2xl sm:hidden hover:text-orange-300"/>
        <h1 className='hover:text-orange-300 hidden sm:inline'>{tittle}</h1>

        
        </Link>

    </div>
  )
}

export default Menu