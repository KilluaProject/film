import React from 'react'
import Menu from './Menu'
import {AiFillHome} from "react-icons/ai"\
import {AiFillInfoCircle} from "react-icons/ai"


export const Headers = () => {
  return (
    <div>
      <div className="">
      <Menu tittle="Home" address="/" Icon={AiFillHome}/>
      <Menu tittle="About" address="/about" Icon={AiFillInfoCircle}/>
      </div>

      <div className="">


      </div>
    </div>
  )
}
