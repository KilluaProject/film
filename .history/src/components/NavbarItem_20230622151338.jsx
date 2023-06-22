"use client"


import Link from 'next/link'
import React from 'react'
import { useSearchParams } from 'next/navigation'

export const NavbarItem = ({tittle,param}) => {

const searchParams = useSearchParams();
const genre = searchParams.get("genre")
  return (
    <div>
        <Link className={`m-4 hover:text-orange-300 font-semibold p-2 dark:hover:text-white`} href={`/?genre=${param}`}>
        {tittle}
        </Link>
    </div>
  )
}
