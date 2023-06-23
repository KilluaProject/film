import React from 'react'

function SearchBox() {
  return (
    <div className="flex justify-center item-center gap-2 p-4 max-w-6xl mx-auto w-full">
        <form className="w-1/2">
            <input className="bg-transparent p-2 rounded-lg border border-white placeholder:text-xs outline-none w-full" type="text" placeholder="Search Movie ..." />
        </form>
        <button className="bg-orange-300 px-3 py-1 rounded-md">Search</button>
    </div>
  )
}

export default SearchBox