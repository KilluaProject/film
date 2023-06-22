import React from 'react'
import { NavbarItem } from './NavbarItem'

function Navbar() {
  return (
    <div>
        <NavbarItem tittle="Trending" param="fetchTrending"/>
        <NavbarItem tittle="Top Rated" param="fetchTopRated"/>
    </div>
  )
}

export default Navbar