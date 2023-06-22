import React from 'react'
import Menu from './Menu'
import {AiFillHome} from "react-icons/ai"
import {AiFillInfoCircle} from "react-icons/ai"
import Link from 'next/link'


export const Headers = () => {
  return (
    <div className='flex justify-between max-w-6xl sm:mx-auto items-center py-6'>
      <div className="flex gap-2">
      <Menu tittle="Home" address="/" Icon={AiFillHome}/>
      <Menu tittle="About" address="/about" Icon={AiFillInfoCircle}/>
      </div>

      <div className="">
        <Link href="/">
        
        <h2 className='text-2xl'>
          <span className='font-bold bg-orange-300 py-1 px-2 rounded-lg mr-1'>IMDB</span>
          <span className='text-xl hidden sm:inline'>Clone</span>
        </h2>
        </Link>

      </div>
    </div>
  )
}
