import React from 'react'
import { NavbarItem } from './NavbarItem'

function Navbar() {
  return (
    <div className='max-w-6xl mx-auto flex justify-center gap-2 mt-2 dark:bg-slate-500 bg-orange-300 py-3 text-white dark:hover:text-orange-300'>
        <NavbarItem tittle="Trending" param="fetchTrending"/>
        <NavbarItem tittle="Top Rated" param="fetchTopRated"/>
    </div>
  )
}

export default Navbar