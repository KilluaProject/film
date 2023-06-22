import Link from 'next/link'
import React from 'react'

const Menu = ({tittle, address, Icon}) => {
  return (
    <div>
        <Link href="/">
        <h1>{tittle}</h1>
        
        </Link>

    </div>
  )
}

export default Menu