import Link from 'next/link'
import React from 'react'

const Menu = ({tittle, address, Icon}) => {
  return (
    <div>
        <Link href="/" className='mx-4 lg-mx6'>
        <Icon className="text-2xl"/>
        <h1 className='hover:text-orange-300'>{tittle}</h1>

        
        </Link>

    </div>
  )
}

export default Menu