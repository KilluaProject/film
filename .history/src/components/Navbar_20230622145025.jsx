import React from 'react'
import { NavbarItem } from './NavbarItem'

function Navbar() {
  return (
    <div className='max-w-6xl mx-auto flex'>
        <NavbarItem tittle="Trending" param="fetchTrending"/>
        <NavbarItem tittle="Top Rated" param="fetchTopRated"/>
    </div>
  )
}

export default Navbar