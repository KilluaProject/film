import React from 'react'

function SearchBox() {
  return (
    <div className="flex justify-center item-center gap-2">
        <form className="p-4">
            <input type="text" placeholder="Search Movie ..." />
        </form>
        <button>Search</button>
    </div>
  )
}

export default SearchBox