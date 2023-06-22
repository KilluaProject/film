"use client"


import Link from 'next/link'
import React from 'react'
import { useSearchParams } from 'next/navigation'

export const NavbarItem = ({tittle,param}) => {

const searchParams = useSearchParams();
const genre = searchParams.get("genre")
  return (
    <div>
        <Link className={`text-white hover:text-gray-700 dark:hover:text-orange-300 transition-colors duration-300 ${
            genre && genre === param && 
        }`} href={`/?genre=${param}`}>
        {tittle}
        </Link>
    </div>
  )
}
