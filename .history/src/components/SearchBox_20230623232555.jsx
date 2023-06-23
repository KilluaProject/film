import React from 'react'

function SearchBox() {
  return (
    <div className="flex justify-center item-center gap-2 p-4 max-w-6xl mx-auto">
        <form>
            <input className="p-2 rounded-lg border border-white placeholder:text-xs" type="text" placeholder="Search Movie ..." />
        </form>
        <button>Search</button>
    </div>
  )
}

export default SearchBox