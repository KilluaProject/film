import React from 'react'
import { NavbarItem } from './NavbarItem'

function Navbar() {
  return (
    <div className="mx-auto flex justify-center gap-2 mt-2 dark:bg-slate-500 bg-orange-100 py-3">
        <NavbarItem tittle="Trending" param="fetchTrending"/>
        <NavbarItem tittle="Top Rated" param="fetchTopRated"/>
    </div>
  )
}

export default Navbar