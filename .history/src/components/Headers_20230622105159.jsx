import React from 'react'
import Menu from './Menu'
import {AiFillHome} from "react-icons/ai"
import {AiFillInfoCircle} from "react-icons/ai"
import Link from 'next/link'


export const Headers = () => {
  return (
    <div>
      <div className="">
      <Menu tittle="Home" address="/" Icon={AiFillHome}/>
      <Menu tittle="About" address="/about" Icon={AiFillInfoCircle}/>
      </div>

      <div className="">
        <Link>
        
        <h2 className='text-2xl'>
          <span className='font-bold'>IMDB</span>
          <span>Clone</span>
        </h2>
        </Link>

      </div>
    </div>
  )
}
