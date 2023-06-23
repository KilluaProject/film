import React from 'react'

function SearchBox() {
  return (
    <div className="flex justify-center item-center gap-2 p-4 max-w-6xl mx-auto">
        <form className="">
            <input className="bg-transparent p-2 rounded-lg border border-white placeholder:text-xs outline-none w-full" type="text" placeholder="Search Movie ..." />
        </form>
        <button>Search</button>
    </div>
  )
}

export default SearchBox