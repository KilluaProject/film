import React from 'react'

function SearchBox() {
  return (
    <div className="flex justify-center item-center gap-2 p-4">
        <form>
            <input className="p-2 rounded-lg bg-none" type="text" placeholder="Search Movie ..." />
        </form>
        <button>Search</button>
    </div>
  )
}

export default SearchBox