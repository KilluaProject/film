"use client"


import Link from 'next/link'
import React from 'react'
import { useSearchParams } from 'next/navigation'

export const NavbarItem = ({tittle,param}) => {

const searchParams = useSearchParams();
const genre = searchParams.get("genre")
  return (
    <div>
        <Link className={`m-4 font-semibold p-2 hover:text-orange-300 ${
            genre && genre === param && "underline underline-offset-8 decoration-4 decoration-orange-300 rounded-lg transition-all duration-300"
        }`} href={`/?genre=${param}`}>
        {tittle}
        </Link>
    </div>
  )
}
