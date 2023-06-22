"use client"

import React from 'react'
import {MdLightMode} from 'react-icons/md'
import {BsMoonStarsFill} from 'react-icons/bs'
import { useTheme } from 'next-themes'
export const DarkMode = () => {

    const {systemTheme,theme,setTheme } = useTheme();
    const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <div className='flex'>
        { currentTheme === "dark" ? (
          <MdLightMode onClick={() => setTheme("light")}/>      
        ) : (
            <BsMoonStarsFill onClick={() => setTheme("dark")}/>  
        ) }
        
        
    </div>
  )
}
