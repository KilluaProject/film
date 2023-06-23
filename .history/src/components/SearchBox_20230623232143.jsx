import React from 'react'

function SearchBox() {
  return (
    <div className="flex justify-center item-center gap-2">
        <form>
            <input type="text" placeholder="Search Movie ..." />
        </form>
        <button>Search</button>
    </div>
  )
}

export default SearchBox