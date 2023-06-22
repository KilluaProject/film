"use client"

import React from 'react'
import {MdLightMode} from 'react-icons/md'
import {BsMoonStarsFill} from 'react-icons/bs'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

export const DarkMode = () => {

    const {systemTheme,theme,setTheme } = useTheme();
    const [mounted, setMounted] = useState(false)

    useEffect(() => setMounted(true), []);

    const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <div className='flex items-center gap-3'>

      <h2>
      select the mode :
      </h2>
        { mounted && (currentTheme === "dark" ? (
          <MdLightMode className='text-xl hover:text-orange-300 cursor-pointer' onClick={() => setTheme("light")}/>      
        ) : (
            <BsMoonStarsFill className='text-xl hover:text-orange-300 cursor-pointer' onClick={() => setTheme("dark")}/>  
        ) )}
        
        
    </div>
  )
}
