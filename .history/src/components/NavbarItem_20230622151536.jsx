"use client"


import Link from 'next/link'
import React from 'react'
import { useSearchParams } from 'next/navigation'

export const NavbarItem = ({tittle,param}) => {

const searchParams = useSearchParams();
const genre = searchParams.get("genre")
  return (
    <div>
        <Link className={`m-4 font-semibold p-2 hover:text-white ${
            genre && genre === param && "underline"
        }`} href={`/?genre=${param}`}>
        {tittle}
        </Link>
    </div>
  )
}
