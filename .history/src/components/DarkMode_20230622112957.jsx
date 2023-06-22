import React from 'react'
import {MdLightMode} from 'react-icons/md'
import {BsMoonStarsFill} from 'react-icons/bs'
import { useTheme } from 'next-themes'
export const DarkMode = () => {

    const{systemTheme,theme,setTheme } = useTheme();

  return (
    <div className='flex'>
        <MdLightMode/>
        <BsMoonStarsFill/>
    </div>
  )
}
