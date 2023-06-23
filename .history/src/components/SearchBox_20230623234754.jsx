"use client"


import React from 'react'
import { useState } from 'react'
import {useRouter} from 'next/navigation'

function SearchBox() {
    const [search,setSearch] = useState("");
    const router = useRouter();
    function handleSubmit(e){
        e.preventDefault();
        if(!search) return;
        router.push(`/search/${search}`);
    }
  return (
    <div className="flex justify-center item-center gap-2 p-6 max-w-6xl mx-auto w-full">
        <form onSubmit={handleSubmit} className="w-1/2 flex gap-2">
            <input 
            value={search}
            onChange={(e)=> setSearch(e.target.value)}
            
            className="bg-transparent p-2 rounded-lg border border-white placeholder:text-xs text-xs outline-none w-full" type="text" placeholder="Search Movie ..." />
        <button type="submit" className="bg-orange-300 px-3 py-1 rounded-md text-gray-700 text-xs">Search</button>
        </form>
    </div>
  )
}

export default SearchBox