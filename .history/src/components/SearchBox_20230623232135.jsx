import React from 'react'

function SearchBox() {
  return (
    <div className="flex justify-center item-center">
        <form>
            <input type="text" placeholder="Search Movie ..." />
        </form>
        <button>Search</button>
    </div>
  )
}

export default SearchBox