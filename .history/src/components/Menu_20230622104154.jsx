import Link from 'next/link'
import React from 'react'

const Menu = ({tittle, address, Icon}) => {
  return (
    <div>
        <Link href="/">
        <Icon/>
        <h1 className='hover:text-orange-300'>{tittle}</h1>

        
        </Link>

    </div>
  )
}

export default Menu