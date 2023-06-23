import React from 'react'

function SearchBox() {
  return (
    <div className="flex justify-center item-center gap-2 p-4">
        <form className='border border-white'>
            <input className="p-2 rounded-lg border border-white" type="text" placeholder="Search Movie ..." />
        </form>
        <button>Search</button>
    </div>
  )
}

export default SearchBox