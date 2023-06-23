import React from 'react'
import Card from './Card'

export default function Results({results}) {
  return (
    <div className='sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-col-5 max-6xl mx-auto py-4 bg-white:'>
       {results.map((result) => (
          <Card key={result.id} result={result}/> 
       ))}
    </div>
  )
}
