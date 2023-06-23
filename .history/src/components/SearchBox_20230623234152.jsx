"use client"


import React from 'react'
import { useState } from 'react'
import {useRouter} from 'next/navigation'
import Router from 'next/router';

function SearchBox() {
    const [search,setSearch] = useState("");
    function handleSubmit(e){
        e.preventDefault();
        if(!search) return;
        router.push(`/search/${search}`)
    }
  return (
    <div className="flex justify-center item-center gap-2 p-6 max-w-6xl mx-auto w-full">
        <form onSubmit={handleSubmit} className="w-1/2">
            <input 
            value={search}
            onChange={(e)=>setSearch(e.target.value)}
            
            className="bg-transparent p-2 rounded-lg border border-white placeholder:text-xs outline-none w-full" type="text" placeholder="Search Movie ..." />
        </form>
        <button type="submit" className="bg-orange-300 px-3 py-1 rounded-md text-gray-700 text-xs">Search</button>
    </div>
  )
}

export default SearchBox